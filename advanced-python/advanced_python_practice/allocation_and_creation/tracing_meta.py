# class Widget:
#     pass

# name = Widget
# base = ()
# kwargs = {}
# metclass = type
# namespace = metaclass.__prepare__(name, bases, **kwargs)
# Widget = metclass.__net__(name, bases, namespace, **kwargs)
# metaclass.__init__(Widget, name, bases, namespace, **kwargs)
from typing import List


class TracingMeta(type):
    @classmethod
    def __prepare__(mcs, name, bases, **kwargs):
        print("metaclass.__prepare__(metcls,name,bases)")
        print("metacls :{}".format(mcs))
        print("name: {}".format(name))
        print("bases: {}".format(bases))
        print("kwargs : {}".format(kwargs))
        namespace = super.__prepare__(name, bases)
        print("namespace : {}".format(namespace))
        print()
        return namespace

    def __new__(mcs, name, bases, namespace, **kwargs):
        print("metaclass.__new__(mcs,name,bases,namespace)")
        print("metacls :{}".format(mcs))
        print("name: {}".format(name))
        print("bases: {}".format(bases))
        print("namespace : {}".format(namespace))
        print("kwargs : {}".format(kwargs))
        cls = super().__new__(mcs, name, bases, namespace)
        print("class : {}".format(cls))
        print()
        return cls

    def __init__(cls, name, bases, namespace, **kwargs):
        print("metaclass.__init__(mcs,name,bases,namespace)")
        print("class :{}".format(cls))
        print("name: {}".format(name))
        print("bases: {}".format(bases))
        print("namespace: {}".format(namespace))
        print("kwargs : {}".format(kwargs))
        super().__init__(name, bases, namespace)
        print()

    def metamethod(cls):
        print("This is metamethod which is called by instance of metaclass")

    def __call__(cls, *args, **kwargs):
        print("cls : {}".format(cls))
        print("args : {}".format(args))
        print("kwargs : {}".format(kwargs))
        obj = super().__call__(*args,
                               **kwargs)

        print("obj : {}".format(obj))
        return obj


if __name__ == '__main__':
    class Widget(metaclass=TracingMeta):
        pass


    print("This is keyword argument example")


    # Passing keyword argument

    class Widget2(metaclass=TracingMeta, some="this is keyowrd"):
        pass


    Widget2.metamethod()
    w = Widget()
