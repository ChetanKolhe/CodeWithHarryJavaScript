from concurrent.futures import ProcessPoolExecutor
import threading
import random
import time


def do_some_work():
    sleep_time = random.randint(1, 9)
    time.sleep(sleep_time)
    print("I have complete the work ", threading.current_thread().name)
    return sleep_time


if __name__ == '__main__':
    pool_exec = ProcessPoolExecutor()
    f1 = pool_exec.submit(do_some_work)
    f2 = pool_exec.submit(do_some_work)

    print("Those are thread pool executor result ")
    try:
        print(f1.result())
        print(f2.result())
    except Exception as e:
        print(e)
