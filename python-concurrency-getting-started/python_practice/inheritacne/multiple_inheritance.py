class common:
    pass


class A1(common):
    pass

class A2:
    pass

class A(A1,A2):
    pass

class B1(common):
    pass

class B2:
    pass

class B(B1,B2):
    pass

class C(A,B):
    pass
