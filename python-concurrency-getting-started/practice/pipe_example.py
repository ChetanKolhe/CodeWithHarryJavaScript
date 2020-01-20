import multiprocessing
import random

def make_tuple(conn):
    num = random.randint(1,9) *10
    conn.send(("Hi",num))
    print(conn.recv())

def make_string(conn):
    tup_var = conn.recv()
    result = ""

    substr, num = tup_var
    for _ in range(num):
        result += substr
    conn.send(result)

if __name__ == "__main__":
    conn1,conn2 = multiprocessing.Pipe(True)
    p1 = multiprocessing.Process(target=make_tuple,args=(conn1,))
    p2 = multiprocessing.Process(target=make_string,args=(conn2,))

    p1.start()
    p2.start()
