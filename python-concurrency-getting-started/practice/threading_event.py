import threading
import time
event = threading.Event()



def consumer():
    print("Consumer waiting for supplier permission")
    event.wait()
    print("Consumer given a permission ")


def supplier():
    print("Setting the event")
    event.set()


thread_1 = threading.Thread(target=consumer, args=())
thread_2 = threading.Thread(target=supplier, args=())

thread_1.start()
time.sleep(4)
thread_2.start()
thread_1.join()
thread_2.join()

