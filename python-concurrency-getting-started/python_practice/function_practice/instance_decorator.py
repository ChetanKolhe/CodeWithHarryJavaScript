class Trace:
    def __init__(self, enable=False):
        self.enable = enable

    def __call__(self, f):
        def wrap(*args, **kwargs):
            if self.enable:
                print("Calling {}".format(f))
            return f(*args, **kwargs)

        return wrap()


my_trac = Trace(enable=False)

@my_trac
def my_function():
    print("This is my_function")
