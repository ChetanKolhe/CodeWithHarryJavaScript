import socket



class Resolver:
    def __init__(self):
        self._cache = {}

    def __call__(self, host_name):
        if host_name not in self._cache:
            self._cache[host_name] = socket.gethostbyname(host_name)
        return self._cache[host_name]

