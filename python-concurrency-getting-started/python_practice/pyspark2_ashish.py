import pyspark
import pyspark.sql.types as typ
from pyspark.shell import sc, sqlContext

rdd: pyspark.rdd.RDD = sc.parallelize([('xxx', 'yyy', 'zzz', 'C', 22),
                                       ('xxx', 'yyy', 'zzz', 'D', 23),
                                       ('xxx1', 'yyy1', 'zzz1', 'C', 24),
                                       ('xxx1', 'yyy1', 'zzz1', 'D', 25)])

reduced = rdd.map(lambda row: ((row[0], row[1], row[2]), [(row[3], row[4])])) \
    .reduceByKey(lambda x, y: x + y) \
    .map(lambda row: (row[0], sorted(row[1], key=lambda text: text[0]))) \
    .map(
    lambda row: (row[0][0], row[0][1], row[0][2], ','.join([str(e[0]) for e in row[1]]), row[1][0][1], row[1][1][1])) \
    .filter(lambda row: row[3] == "C,D")

schema_red = typ.StructType([
    typ.StructField('Data1', typ.StringType(), False),
    typ.StructField('Data2', typ.StringType(), False),
    typ.StructField('Data3', typ.StringType(), False),
    typ.StructField('Type', typ.StringType(), False),
    typ.StructField('Start Date', typ.StringType(), False),
    typ.StructField('End Date', typ.StringType(), False)
])

df_red = sqlContext.createDataFrame(reduced, schema_red)
df_red.show()

# Explanation####################################################################################################
result = rdd.map(lambda row: ((row[0], row[1], row[2]), [(row[3], row[4])])).reduceByKey(lambda x, y: x + y). \
    map(lambda row: (row[0], sorted(row[1], key=lambda text: text[0]))). \
    map(
    lambda row: (row[0][0], row[0][1], row[0][2], ','.join([str(e[0]) for e in row[1]]), row[1][0][1], row[1][1][1])). \
    filter(lambda row: row[3] == "C,D")

print(result.collect())


# Raw Data
# rdd: pyspark.rdd.RDD = sc.parallelize([('xxx', 'yyy', 'zzz', 'C', 22),
#                                        ('xxx', 'yyy', 'zzz', 'D', 23),
#                                        ('xxx1', 'yyy1', 'zzz1', 'C', 24),
#                                        ('xxx1', 'yyy1', 'zzz1', 'D', 25)])


# First part where map is used  create this structure
part_1 = \
    [(('xxx', 'yyy', 'zzz'), [('C', 22)]),
     (('xxx', 'yyy', 'zzz'), [('D', 23)]),
     (('xxx1', 'yyy1', 'zzz1'), [('C', 24)]),
     (('xxx1', 'yyy1', 'zzz1'), [('D', 25)])
     ]

# Second part where reduce is used to combine the structure
# Key is used : ('xxx', 'yyy', 'zzz')
part_2 = [(('xxx', 'yyy', 'zzz'), [('C', 22), ('D', 23)]),
          (('xxx1', 'yyy1', 'zzz1'), [('C', 24), ('D', 25)])
          ]

# Again map used to just sort the second column :[('C', 22), ('D', 23)]
part_3 = [(('xxx', 'yyy', 'zzz'), [('C', 22), ('D', 23)]),
          (('xxx1', 'yyy1', 'zzz1'), [('C', 24), ('D', 25)])
          ]

# Again map is used to combine C,D
part_4 = [('xxx', 'yyy', 'zzz', 'C,D', 22, 23),
          ('xxx1', 'yyy1', 'zzz1', 'C,D', 24, 25)]

# Again map is used to combine C,D
part_5 = [('xxx', 'yyy', 'zzz', 'C,D', 22, 23),
          ('xxx1', 'yyy1', 'zzz1', 'C,D', 24, 25)]
