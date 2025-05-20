# Analyzing Data with Pandas and Visualizing Results with Matplotlib

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris

# Load dataset
try:
    iris = load_iris()
    df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
    df['species'] = pd.Categorical.from_codes(iris.target, iris.target_names)
    print("Dataset loaded successfully.")
except Exception as e:
    print(f"Error loading dataset: {e}")

# Display first few rows
print("\nFirst 5 rows:")
print(df.head())

# Dataset info
print("\nDataset Info:")
print(df.info())

# Check for missing values
print("\nMissing values:")
print(df.isnull().sum())

# Clean dataset (if needed)
df = df.dropna()

# Basic statistics
print("\nBasic Statistics:")
print(df.describe())

# Group by species
grouped_means = df.groupby('species').mean()
print("\nGroup by Species - Mean Values:")
print(grouped_means)

# 1. Line chart
plt.figure(figsize=(10, 5))
for species in df['species'].unique():
    subset = df[df['species'] == species]
    plt.plot(subset.index, subset['sepal length (cm)'], label=species)

plt.title('Sepal Length Trend by Species')
plt.xlabel('Index')
plt.ylabel('Sepal Length (cm)')
plt.legend()
plt.grid(True)
plt.savefig("line_chart_sepal_length.png")
plt.show()

# 2. Bar chart
grouped_means['petal length (cm)'].plot(kind='bar', color='skyblue')
plt.title('Average Petal Length per Species')
plt.ylabel('Petal Length (cm)')
plt.xticks(rotation=0)
plt.grid(axis='y')
plt.savefig("bar_chart_petal_length.png")
plt.show()

# 3. Histogram
plt.hist(df['sepal width (cm)'], bins=15, color='lightgreen', edgecolor='black')
plt.title('Distribution of Sepal Width')
plt.xlabel('Sepal Width (cm)')
plt.ylabel('Frequency')
plt.grid(True)
plt.savefig("histogram_sepal_width.png")
plt.show()

# 4. Scatter plot
plt.figure(figsize=(8, 6))
sns.scatterplot(data=df, x='sepal length (cm)', y='petal length (cm)', hue='species', palette='Set1')
plt.title('Sepal Length vs Petal Length')
plt.xlabel('Sepal Length (cm)')
plt.ylabel('Petal Length (cm)')
plt.legend(title='Species')
plt.grid(True)
plt.savefig("scatter_plot_sepal_vs_petal.png")
plt.show()

# Summary of Findings (printed)
print("\nSummary of Findings:")
print("- Setosa species is significantly different from the others in petal size.")
print("- Versicolor and Virginica are closer but still separable.")
print("- Sepal and petal lengths are positively correlated.")
