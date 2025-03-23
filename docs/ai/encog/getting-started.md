# Encog 入门指南

## 简介
Encog是一个高效的机器学习框架，专注于神经网络和人工智能算法的实现。它提供了多种神经网络类型和训练方法，以及遗传算法等优化技术。

## 特点
- 高性能神经网络实现
- 支持多种训练算法
- 遗传算法和进化计算
- 数据标准化工具
- 跨平台支持

## 环境配置
```xml
<dependency>
    <groupId>org.encog</groupId>
    <artifactId>encog-core</artifactId>
    <version>3.4</version>
</dependency>
```

## 基本使用
```java
import org.encog.Encog;
import org.encog.engine.network.activation.ActivationSigmoid;
import org.encog.ml.data.MLDataSet;
import org.encog.ml.data.basic.BasicMLDataSet;
import org.encog.neural.networks.BasicNetwork;
import org.encog.neural.networks.layers.BasicLayer;
import org.encog.neural.networks.training.propagation.resilient.ResilientPropagation;

// 创建神经网络
BasicNetwork network = new BasicNetwork();
network.addLayer(new BasicLayer(null, true, 2));
network.addLayer(new BasicLayer(new ActivationSigmoid(), true, 4));
network.addLayer(new BasicLayer(new ActivationSigmoid(), false, 1));
network.getStructure().finalizeStructure();
network.reset();

// 准备训练数据
double[][] XOR_INPUT = {{0.0, 0.0}, {1.0, 0.0}, {0.0, 1.0}, {1.0, 1.0}};
double[][] XOR_IDEAL = {{0.0}, {1.0}, {1.0}, {0.0}};
MLDataSet trainingSet = new BasicMLDataSet(XOR_INPUT, XOR_IDEAL);

// 训练网络
ResilientPropagation train = new ResilientPropagation(network, trainingSet);

do {
    train.iteration();
} while(train.getError() > 0.01);

train.finishTraining();

// 清理
Encog.getInstance().shutdown();
```