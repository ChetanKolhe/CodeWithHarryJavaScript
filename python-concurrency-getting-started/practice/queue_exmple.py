import multiprocessing
import random

def make_tuple(conn):
    num = random.randint(1,9) * 10
    conn.put(("Hi",num))
    print(conn.get())

def make_string(conn):
    tup_var = conn.get()
    result = ""

    substr, num = tup_var
    for _ in range(num):
        result += substr
    conn.put(result)

if __name__ == "__main__":
    queue = multiprocessing.Queue()
    p1 = multiprocessing.Process(target=make_tuple,args=(queue,))
    p2 = multiprocessing.Process(target=make_string,args=(queue,))

    p1.start()
    p2.start()
