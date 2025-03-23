# Deeplearning4j 入门教程

## 简介
Deeplearning4j（DL4J）是一个用于Java和Scala的开源、分布式深度学习库。它与Hadoop和Apache Spark集成，支持GPU加速，是为商业环境构建的深度学习解决方案。

## 环境要求

- Java 8 或更高版本
- Maven 或 Gradle 构建工具
- CUDA（可选，用于GPU加速）

## 快速开始

### Maven 依赖

```xml
<dependency>
    <groupId>org.deeplearning4j</groupId>
    <artifactId>deeplearning4j-core</artifactId>
    <version>1.0.0-M2</version>
</dependency>

<dependency>
    <groupId>org.nd4j</groupId>
    <artifactId>nd4j-native-platform</artifactId>
    <version>1.0.0-M2</version>
</dependency>
```

### Gradle 依赖

```groovy
dependencies {
    implementation 'org.deeplearning4j:deeplearning4j-core:1.0.0-M2'
    implementation 'org.nd4j:nd4j-native-platform:1.0.0-M2'
}
```

## 基本使用

### 1. 创建神经网络

```java
import org.deeplearning4j.nn.conf.MultiLayerConfiguration;
import org.deeplearning4j.nn.conf.NeuralNetConfiguration;
import org.deeplearning4j.nn.conf.layers.DenseLayer;
import org.deeplearning4j.nn.conf.layers.OutputLayer;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;
import org.nd4j.linalg.activations.Activation;
import org.nd4j.linalg.lossfunctions.LossFunctions;

// 构建神经网络配置
MultiLayerConfiguration conf = new NeuralNetConfiguration.Builder()
    .seed(123)
    .list()
    .layer(0, new DenseLayer.Builder()
        .nIn(784)
        .nOut(250)
        .activation(Activation.RELU)
        .build())
    .layer(1, new OutputLayer.Builder(LossFunctions.LossFunction.NEGATIVELOGLIKELIHOOD)
        .nIn(250)
        .nOut(10)
        .activation(Activation.SOFTMAX)
        .build())
    .build();

// 初始化神经网络
MultiLayerNetwork model = new MultiLayerNetwork(conf);
model.init();
```

### 2. 训练模型

```java
import org.nd4j.linalg.api.ndarray.INDArray;
import org.nd4j.linalg.dataset.DataSet;
import org.nd4j.linalg.factory.Nd4j;

// 准备训练数据
INDArray input = Nd4j.rand(100, 784);
INDArray labels = Nd4j.rand(100, 10);
DataSet trainingData = new DataSet(input, labels);

// 训练模型
model.fit(trainingData);
```

### 3. 模型评估和预测

```java
// 进行预测
INDArray testInput = Nd4j.rand(1, 784);
INDArray output = model.output(testInput);

// 评估模型
Evaluation eval = new Evaluation(10);
eval.eval(labels, output);
System.out.println(eval.stats());
```

## 高级特性

### 1. 模型保存和加载

```java
// 保存模型
ModelSerializer.writeModel(model, "model.zip", true);

// 加载模型
MultiLayerNetwork savedModel = ModelSerializer.restoreMultiLayerNetwork("model.zip");
```

### 2. GPU 加速

```xml
<!-- 替换 nd4j-native-platform 为 nd4j-cuda-11.0-platform -->
<dependency>
    <groupId>org.nd4j</groupId>
    <artifactId>nd4j-cuda-11.0-platform</artifactId>
    <version>1.0.0-M2</version>
</dependency>
```

## 最佳实践

1. 数据预处理和规范化
2. 使用适当的学习率和批量大小
3. 实现早停和模型检查点
4. 使用适当的评估指标
5. 注意内存管理和资源释放