class common:
    def add(self):
        print("Add method call from common")


class A1(common):
    def add(self):
        print("Add method call from A1")
        super().add()


class A2:
    def add(self):
        print("Add method call from A2")


class A(A1, A2):
    def add(self):
        print("Add method call from A")
        super().add()


class B1(common):
    def add(self):
        print("Add method call from B1")
        super().add()


class B2:
    def add(self):
        print("Add method call from B2")


class B(B1, B2):
    def add(self):
        print("Add method call from B")
        super().add()


class C(B1, A):
    def add(self):
        print("Add method call from C")
        super().add()
