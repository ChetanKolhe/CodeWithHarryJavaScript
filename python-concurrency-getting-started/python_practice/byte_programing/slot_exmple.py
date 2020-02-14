import sys


class DemoClass:
    __slots__ = ["name", "age", "sal"]

    def __init__(self, name, age, sal):
        self.name = name
        self.age = age
        self.sal = sal


class DemoClass_2:
    def __init__(self, name, age, sal):
        self.name = name
        self.age = age
        self.sal = sal


if __name__ == '__main__':
    demo = [DemoClass("abc", 145, 234234) for a in range(100)]
    print(sys.getsizeof(demo))
