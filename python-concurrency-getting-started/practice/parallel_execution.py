import asyncio


async def get_item(num):
    print("get_item")
    await asyncio.sleep(num)
    return "item" + str(num)


async def get_items(num):
    print("Get items")
    items_cors = [get_item(i) for i in range(num)]

    print("Waiting for task to complete")
    complete, pending = await asyncio.wait(items_cors, timeout=2)

    if pending:
        print("Canceling remaining task ")
        for t in pending:
            print(type(t))
            t.cancel()

    result = [t.result() for t in complete]
    print("Result : {!r}".format(result))


loop = asyncio.get_event_loop()

try:
    loop.run_until_complete(get_items(4))
finally:
    loop.close()
