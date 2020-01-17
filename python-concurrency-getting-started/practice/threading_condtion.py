import threading
import time

condition = threading.Condition()


def consumer():
    condition.acquire()
    print("Consumer waiting for supplier permission")
    print(threading.current_thread().name)
    condition.wait()
    print(threading.current_thread().name, "Completed")
    condition.release()


def producer():
    condition.acquire()
    print("Setting the event")
    condition.notify(1)
    print("Notified one thread")
    condition.notify(1)
    condition.release()
    time.sleep(3)
    condition.acquire()
    condition.notify_all()
    condition.release()


print("Starting all consumer thread")
consumer_1 = threading.Thread(target=consumer, args=(), name="consumer_1")
consumer_2 = threading.Thread(target=consumer, args=(), name="consumer_2")
consumer_3 = threading.Thread(target=consumer, args=(), name="consumer_3")

produce_thread = threading.Thread(target=producer, args=())

consumer_1.start()
consumer_2.start()
consumer_3.start()

time.sleep(3)
produce_thread.start()
