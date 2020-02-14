import pyspark
import pyspark.sql.types as typ
from pyspark.shell import sc, sqlContext
import csv

# reading csv  data from file
rows = []
with open("records.csv", 'r') as csvfile:
    csvreader = csv.reader(csvfile)
    for row in csvreader:
        rows.append(row)

rdd: pyspark.rdd.RDD = sc.parallelize(rows)

"""
row[0] = TimeStamp
row[1] = EventType
row[2] = Private IP
row[3] = Private Port
row[6] = Destination IP
row[7] = Destination Port
"""

reduced = rdd.map(lambda row: ((row[2], row[3], row[6], row[7]), [(row[1], row[0])])) \
    .reduceByKey(lambda x, y: x + y) \
    .map(lambda row: (row[0], sorted(row[1], key=lambda text: text[0]))).filter(lambda row: len(row[1]) == 2) \
    .map(lambda row: (row[1][0][1], row[1][1][1],
                      row[0][0], row[0][1], row[0][2], row[0][3]))

schema_red = typ.StructType([
    typ.StructField('Start Date', typ.StringType(), False),
    typ.StructField('End Date', typ.StringType(), False),
    typ.StructField('Private IP', typ.StringType(), False),
    typ.StructField('Private Port', typ.StringType(), False),
    typ.StructField('Destination IP', typ.StringType(), False),
    typ.StructField('Destination Port', typ.StringType(), False)

])

df_red = sqlContext.createDataFrame(reduced, schema_red)
df_red.show()

"""
Output
+-------------------+-------------------+--------------+------------+--------------+----------------+
|         Start Date|           End Date|    Private IP|Private Port|Destination IP|Destination Port|
+-------------------+-------------------+--------------+------------+--------------+----------------+
|22-02-2016 12:40:59|22-02-2016 12:42:04|100.68.154.175|         112| 216.58.197.77|               0|
|22-02-2016 12:41:07|22-02-2016 12:43:16|100.77.186.232|       38867|  100.1.200.99|            8080|
|22-02-2016 12:41:08|22-02-2016 12:43:18|100.68.154.175|       11882| 59.144.144.99|              53|
|22-02-2016 12:41:12|22-02-2016 12:43:21|100.77.186.232|       38875|  100.1.200.99|            8080|
|22-02-2016 12:41:17|22-02-2016 12:43:26|100.76.103.155|       35050| 59.144.144.99|              53|
|22-02-2016 12:41:17|22-02-2016 12:43:26|100.77.186.232|       38880|  100.1.200.99|            8080|
|22-02-2016 12:41:17|22-02-2016 12:43:26|100.77.186.232|       38881|  100.1.200.99|            8080|
|22-02-2016 12:41:18|22-02-2016 12:43:28|100.77.186.232|       38885|  100.1.200.99|            8080|
|22-02-2016 12:41:22|22-02-2016 12:43:31|100.77.186.232|       38889|  100.1.200.99|            8080|
|22-02-2016 12:41:29|22-02-2016 12:43:38|100.77.186.232|       38894|  100.1.200.99|            8080|
|22-02-2016 12:41:32|22-02-2016 12:43:41|100.76.252.210|       40352|    74.6.105.9|             443|
|22-02-2016 12:41:36|22-02-2016 12:43:45|100.77.211.209|       29133| 59.144.144.99|              53|
|22-02-2016 12:42:03|22-02-2016 12:44:11|100.77.186.232|       38903|  100.1.200.99|            8080|
|22-02-2016 13:01:52|22-02-2016 13:04:02|100.68.154.175|        3635| 59.144.144.99|              53|
|22-02-2016 13:01:52|22-02-2016 13:04:01|100.68.154.175|        5790| 59.144.144.99|              53|
|22-02-2016 13:01:52|22-02-2016 13:39:22|100.77.183.241|       41321|  31.13.79.245|             443|
|22-02-2016 13:01:52|22-02-2016 13:04:23|100.77.183.241|       41944|    31.13.78.8|             443|
|22-02-2016 13:01:52|22-02-2016 13:04:45|  100.77.55.77|       45594| 74.125.68.104|             443|
|22-02-2016 13:01:52|22-02-2016 13:05:28|  100.76.35.84|       60832|  31.13.79.221|             443|
|22-02-2016 13:01:52|22-02-2016 13:04:02|  100.76.35.84|       62218| 59.144.144.99|              53|
+-------------------+-------------------+--------------+------------+--------------+----------------+
only showing top 20 rows


"""

# First part where map is used  create this structure
part_1 = \
    [(('Private IP', 'Private Port', 'Destination IP', "Destination Port"), [('C', "Start Time")]),
     (('Private IP', 'Private Port', 'Destination IP', "Destination Port"), [('D', "End Time")])
     ]

# Second part where reduce is used to combine the structure
# Key is used : ('Private IP', 'Private Port', 'Destination IP', "Destination Port")
part_2 = [
    ('Private IP', 'Private Port', 'Destination IP', "Destination Port", [('C', "Start Time"), ('D', "End Time")]),
    ]

# Again map used to just sort the second column :[('C', 22), ('D', 23)]
part_3 = [
    (('Private IP', 'Private Port', 'Destination IP', "Destination Port"), [('C', "Start Time"), ('D', "End Time")])]

# Again map is used to combine C,D
part_4 = [("Start Time", "End Time", 'Private IP', 'Private Port', 'Destination IP', "Destination Port", )]


