import multiprocessing

def do_work(data):
    return data**2

def start_process():
    print("Starting process",multiprocessing.current_process().name)

if __name__ == "__main__":
    process_count = multiprocessing.cpu_count() -1
    process_pool = multiprocessing.Pool(processes=process_count,
    initializer=start_process,maxtasksperchild=1)

    input_list = list(range(10))
    

    output  = process_pool.map(do_work,input_list)

    process_pool.map_async

    print("Output", output)


    print("This is example to applay")
    print(process_pool.apply(do_work,args=(12,)))


    print("This is example of apply_async ");
    output = process_pool.apply_async(do_work,args=(45,))
    # print(output.ready())
    print(output.wait(10))
    print(output.successful())
    # print(output.wait(10))
    # print(output.wait(10))
    print(output.get())
    process_pool.close()
    process_pool.join()



    
