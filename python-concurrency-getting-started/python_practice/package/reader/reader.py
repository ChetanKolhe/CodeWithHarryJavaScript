
class Reader:
    def __init__(self,file_name):
        self.file_name = file_name
        self.f = open(self.file_name, 'rt')

    def close(self):
        self.f.close()

    def read(self):
        return self.f.read()
