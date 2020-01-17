import multiprocessing
import time


def do_some_work(value):
    time.sleep(10)
    print(value)


if __name__ == '__main__':
    p1 = multiprocessing.Process(target=do_some_work, args=(12,), daemon=True)
    p1.start()
    # p1.join()

