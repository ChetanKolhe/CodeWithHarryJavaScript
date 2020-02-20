from typing import Tuple, Any, Mapping


class OneShotDict(dict):
    def __init__(self, existing=None) -> None:
        super().__init__()
        if existing is not None:
            for k, v in existing.items():
                self[k] = v

    def __setitem__(self, k, v) -> None:
        if k in self:
            raise ValueError("Cannot assign exsiting key {!r}".format(k))
        super().__setitem__(k, v)


class ProhibitDuplicateMethod(type):

    @classmethod
    def __prepare__(metacls, __name: str, __bases: Tuple[type, ...], **kwds: Any) -> Mapping[str, Any]:
        return OneShotDict()
        # return super().__prepare__(__name, __bases, **kwds)


class Dodgy(metaclass=ProhibitDuplicateMethod):
    def my_method(self):
        pass

    def my_method(self):
        pass

if __name__ == '__main__':
    one_obj = OneShotDict()
    one_obj["1"] = "demo"
    # one_obj["1"] = "demo"
    print(one_obj)
