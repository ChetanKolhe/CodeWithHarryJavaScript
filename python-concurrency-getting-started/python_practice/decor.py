from weakref import WeakKeyDictionary


class Positive:
    def __init__(self):
        self.instance_data = WeakKeyDictionary()

    def __get__(self, instance, owner):
        print(owner)
        return self.instance_data[instance]

    def __set__(self, instance, value):
        # print("Positive called :{}")
        # print(instance)
        # print(value)
        self.instance_data[instance] = value


class Person:
    name = Positive()
    pass


if __name__ == '__main__':
    person = Person()
    # person.name = "chetan"
    person.name = "Chetan"
    print(person.name)
    # print(person.name)
