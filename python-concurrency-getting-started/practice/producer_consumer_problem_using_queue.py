import threading
import time
from queue import Queue

my_queue = Queue()
condition = threading.Condition()


def consumer():
    while True:
        item = my_queue.get()
        print(threading.current_thread().name)
        print(item)
        time.sleep(5)
        my_queue.task_done()
        if item is None:
            break


def producer():
    for i in range(20):
        my_queue.put(i)
        print(threading.current_thread().name)
    my_queue.put(None)


print("Starting all consumer thread")
consumer_1 = threading.Thread(target=consumer, args=(), name="consumer_1")
produce_thread = threading.Thread(target=producer, args=(), name="produce_1")



consumer_1.start()
# time.sleep(3)
produce_thread.start()

print("Waiting for queue to complete")
my_queue.join()

print("Queue is complete")

