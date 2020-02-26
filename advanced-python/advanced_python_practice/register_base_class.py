from abc import ABCMeta


class Text(metaclass=ABCMeta):
    pass


Text: ABCMeta

print(Text.register(str))

from abc import ABCMeta


class Text(metaclass=ABCMeta):
    pass



@Text.register
class Pros:
    pass
