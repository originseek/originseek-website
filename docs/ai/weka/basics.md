# Weka 基础教程

## 简介
Weka是一个用Java开发的开源机器学习和数据挖掘软件。它提供了丰富的机器学习算法集合，包括数据预处理、分类、回归、聚类、关联规则和可视化等功能。

## 特点
- 完整的数据挖掘工具包
- 丰富的机器学习算法
- 直观的图形用户界面
- 强大的数据预处理功能
- 可视化数据分析工具

## 环境配置
```xml
<dependency>
    <groupId>nz.ac.waikato.cms.weka</groupId>
    <artifactId>weka-stable</artifactId>
    <version>3.8.6</version>
</dependency>
```

## 基本使用
```java
import weka.core.Instances;
import weka.core.converters.ConverterUtils.DataSource;
import weka.classifiers.trees.J48;

// 加载数据
DataSource source = new DataSource("data.arff");
Instances data = source.getDataSet();
if (data.classIndex() == -1) {
    data.setClassIndex(data.numAttributes() - 1);
}

// 创建和训练分类器
J48 tree = new J48();
tree.buildClassifier(data);

// 使用分类器进行预测
double result = tree.classifyInstance(data.instance(0));

// 输出决策树
System.out.println(tree.toString());
```

## 数据格式
Weka使用ARFF（Attribute-Relation File Format）格式存储数据：
```arff
@relation weather

@attribute outlook {sunny, overcast, rainy}
@attribute temperature numeric
@attribute humidity numeric
@attribute windy {TRUE, FALSE}
@attribute play {yes, no}

@data
sunny,85,85,FALSE,no
overcast,80,90,TRUE,yes
```