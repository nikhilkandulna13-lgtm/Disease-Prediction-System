import pandas as pd

df = pd.read_sas("DXXAG_I.xpt")
df.to_csv("DXXAG_I.csv", index=False)

print(df.shape)