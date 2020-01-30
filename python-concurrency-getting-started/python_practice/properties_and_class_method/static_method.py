class ShippingContainer:
    class_attribute = 11

    def __init__(self):
        pass

    @staticmethod
    def static_method():
        print("Static method called")

    @classmethod
    def class_method(cls):
        print(cls)
        print("Class method called")


shipping_obj = ShippingContainer()
print(shipping_obj.class_attribute)
shipping_obj.class_method()
shipping_obj.static_method()

print("This is class instance")
ShippingContainer.static_method()
ShippingContainer.class_method()




