class A:pass
class B(A):pass
class E:pass
class F(E):pass

class Result(B,F,E):pass

print(Result.__mro__)