# Neuroph 快速开始

## 简介
Neuroph是一个轻量级的Java神经网络框架，提供了易于使用的API来创建和训练神经网络。它适合用于学习神经网络和开发简单的神经网络应用。

## 特点
- 简单易用的API
- 支持多种神经网络类型
- 内置学习算法
- 可视化工具支持
- 示例和教程丰富

## 环境配置
```xml
<dependency>
    <groupId>org.neuroph</groupId>
    <artifactId>neuroph-core</artifactId>
    <version>2.98</version>
</dependency>
```

## 基本使用
```java
import org.neuroph.core.NeuralNetwork;
import org.neuroph.nnet.MultiLayerPerceptron;
import org.neuroph.core.data.DataSet;
import org.neuroph.core.data.DataSetRow;

// 创建神经网络
MultiLayerPerceptron neuralNetwork = new MultiLayerPerceptron(2, 3, 1);

// 创建训练数据
DataSet trainingSet = new DataSet(2, 1);
trainingSet.addRow(new DataSetRow(new double[]{0, 0}, new double[]{0}));
trainingSet.addRow(new DataSetRow(new double[]{0, 1}, new double[]{1}));
trainingSet.addRow(new DataSetRow(new double[]{1, 0}, new double[]{1}));
trainingSet.addRow(new DataSetRow(new double[]{1, 1}, new double[]{0}));

// 训练网络
neuralNetwork.learn(trainingSet);

// 使用网络
neuralNetwork.setInput(1, 1);
neuralNetwork.calculate();
double[] networkOutput = neuralNetwork.getOutput();
```