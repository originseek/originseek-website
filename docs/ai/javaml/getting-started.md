# JavaML 基础入门

## 简介
JavaML是一个专注于机器学习的Java库，为开发者提供了丰富的机器学习算法实现。它设计简单直观，适合用于教学和小型项目开发。

## 特点
- 丰富的机器学习算法
- 简单易用的API
- 完整的数据处理功能
- 聚类和分类算法
- 特征选择工具

## 环境配置
```xml
<dependency>
    <groupId>net.sourceforge</groupId>
    <artifactId>javaml</artifactId>
    <version>0.1.7</version>
</dependency>
```

## 基本使用
```java
import net.sf.javaml.core.Dataset;
import net.sf.javaml.core.DefaultDataset;
import net.sf.javaml.core.DenseInstance;
import net.sf.javaml.clustering.Clusterer;
import net.sf.javaml.clustering.KMeans;

// 创建数据集
Dataset data = new DefaultDataset();
for (int i = 0; i < 100; i++) {
    double[] values = new double[]{Math.random() * 10, Math.random() * 10};
    data.add(new DenseInstance(values));
}

// 创建并运行聚类算法
Clusterer km = new KMeans(4); // 4个聚类
Dataset[] clusters = km.cluster(data);

// 输出聚类结果
for (int i = 0; i < clusters.length; i++) {
    System.out.println("Cluster " + i + ": " + clusters[i].size() + " instances");
}
```