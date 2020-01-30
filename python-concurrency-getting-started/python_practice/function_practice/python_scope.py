message = "global"


def enclosing():
    message = "enclosing"

    def local():
        nonlocal message
        message = "local"

    print("Enclosing", message)
    local()
    print("Enclosing", message)


print("Global", message)
enclosing()
print("Global", message)
