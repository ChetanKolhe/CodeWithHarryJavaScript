class MetaclassA(type):
    pass


class MetaclassB(type):
    pass


class A(metaclass=MetaclassA):
    pass


class B(metaclass=MetaclassB):
    pass


class MetaclassC(MetaclassA, MetaclassB):
    pass


class C(A, B, metaclass=MetaclassC):
    pass
