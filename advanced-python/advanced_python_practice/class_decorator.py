def my_class_decorator(cls):
    print("my_class_decorator is called")
    print(cls.__name__)
    print(vars(cls).items())

    for k in vars(cls).items():
        print(k)

    return cls


@my_class_decorator
class Temperature:
    def get_kelvin(self):
        pass

    def set_kelvin(self):
        pass
