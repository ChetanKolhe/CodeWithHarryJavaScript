class CallCount:
    def __init__(self, f):
        self.f = f
        self.count = 0

    def __call__(self, *args, **kwargs):
        self.count += 1
        return self.f(*args, **kwargs)

@CallCount
def my_sum():
    print("This is sum example ")
my_sum()
my_sum()
my_sum()
print(my_sum.count)
