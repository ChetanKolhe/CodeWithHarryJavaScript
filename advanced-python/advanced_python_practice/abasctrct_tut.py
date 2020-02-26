from abc import ABC, ABCMeta


class SwordMeta(type):

    def __instancecheck__(self, instance):
        return self.__subclasscheck__(type(instance))

    def __subclasscheck__(self, subclass):
        return (hasattr(subclass, "swipe") and callable(subclass.swipe)
                and
                hasattr(subclass, "sharpen") and callable(subclass.sharpen))


# class Sword(metaclass=SwordMeta):
#
#     # Virtual Base class doesnt' play any role in method resolution order .
#     # thrust method can't be called until it actually inherited.
#     def thrust(self):
#         print("Thrust ... ")

class SmallSword(metaclass=ABCMeta):

    @classmethod
    def __subclasshook__(cls, subclass):
        print("this method not called")
        return True


class Sword(SmallSword):

    # Virtual Base class doesnt' play any role in method resolution order .
    # thrust method can't be called until it actually inherited.

    @classmethod
    def __subclasshook__(cls, subclass):
        return NotImplemented
        return (hasattr(subclass, "swipe") and callable(subclass.swipe)
                and
                hasattr(subclass, "sharpen") and callable(subclass.sharpen))

    def thrust(self):
        print("Thrust ... ")


class BroadSword:

    def swipe(self):
        print("Swoop..")

    def sharpen(self):
        print("Swooosh ...")


class SamuraiSword:

    def swipe(self):
        print("Swoop..")

    def sharpen(self):
        print("Swooosh ...")


class Riffle:
    def fire(self):
        print("Fire ...")


if __name__ == '__main__':
    samurai_obj = SamuraiSword()

    print(issubclass(SamuraiSword, Sword))
    print(isinstance(samurai_obj, Sword))
    print(Sword.__subclasshook__(SamuraiSword))