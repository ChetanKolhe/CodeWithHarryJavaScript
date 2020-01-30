class ExampleIterator:
    def __init__(self):
        self.index = 0
        self.value = [1, 2, 3, 4, 5, 6, 67]

    def __iter__(self):
        return self

    def __next__(self):
        if self.index >= len(self.value):
            raise StopIteration

        result = self.value[self.index]
        self.index += 1
        return result


demo = ExampleIterator()

print(next(demo))
for i in demo:
    print(i)


class AlternativeIterable:
    def __init__(self):
        self.data = [1, 2, 3, 4, 5]

    def __getitem__(self, item):
        return self.data[self.data[item]]

# iterator can be implemented using __getitem__ where element is access by its index.
my_alternative_iterator = AlternativeIterable()
for i in my_alternative_iterator:
    print(i)



