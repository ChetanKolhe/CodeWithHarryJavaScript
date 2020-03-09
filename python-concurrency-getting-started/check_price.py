import json
from pprint import pprint as pp


with open("price.json") as price_dp:
    price_json = json.load(price_dp)

print(price_json.keys())
print(price_json["prices"][0]["price"])
print(price_json["prices"][0]["attributes"])
pp(price_json["prices"][0]["attributes"])

price:dict
for price in price_json["prices"]:
    if price.get("attributes"):
        if "64 GiB" in price["attributes"]["aws:ec2:memory"]:
            print("Storage:",price["attributes"]["aws:ec2:storage"])
            print("Operating System: ",price["attributes"]["aws:ec2:operatingSystem"])
            if price["attributes"].get("aws:ec2:gpu"):
                print("GPU :",price["attributes"]["aws:ec2:gpu"])
            print("Clock Speed :", price["attributes"]["aws:ec2:clockSpeed"])
            print("Term :", price["attributes"]["aws:ec2:term"])
            print("Instance Type :", price["attributes"]["aws:ec2:instanceType"])
            print("Ram :", price["attributes"]["aws:ec2:memory"])

            print("Price Hourly", float(price["price"]["USD"]))
            print("Price Monthly", float(price["price"]["USD"]) *  730)
            print("Price Yearly", float(price["price"]["USD"]) *  730 * 365)
            print()
