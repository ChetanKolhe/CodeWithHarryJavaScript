class Vector:
    def __init__(self, x, y):
        self.y = y
        self.x = x

    def __repr__(self):
        return "{}({},{})".format(self.__class__.__name__, self.x, self.y)

    def __getattr__(self, item):
        print("Getter is called ")
        return getattr(self,
                       item)

    def __getattribute__(self, item):
        print("Item not found ")
        raise AttributeError("Element not found")
        # getattr(self,item)


    def my_fun(self):
        pass


if __name__ == '__main__':
    v = Vector(1, 5)
    print(v)
    print(v.__dict__)

    print(dir(v))

    print(v.x)
    print(v.y)
    # print(v.z)