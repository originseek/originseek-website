# Mallet 快速入门

## 简介
Mallet（MAchine Learning for LanguagE Toolkit）是一个基于Java的统计自然语言处理、文档分类、聚类、主题建模、信息抽取和其他机器学习应用的包。

## 特点
- 文本分类和序列标注
- 主题建模（LDA）
- 信息抽取
- 文档聚类
- 最大熵模型

## 环境配置
```xml
<dependency>
    <groupId>cc.mallet</groupId>
    <artifactId>mallet</artifactId>
    <version>2.0.8</version>
</dependency>
```

## 基本使用
```java
import cc.mallet.types.*;
import cc.mallet.pipe.*;
import cc.mallet.pipe.iterator.*;
import cc.mallet.topics.*;

// 创建主题模型
ParallelTopicModel model = new ParallelTopicModel(numTopics, alpha, beta);

// 导入数据
InstanceList instances = new InstanceList(
    new SerialPipes(Arrays.asList(
        new CharSequence2TokenSequence(),
        new TokenSequenceLowercase(),
        new TokenSequenceRemoveStopwords(),
        new TokenSequence2FeatureSequence()
    ))
);

// 从目录导入文档
FileIterator iterator = new FileIterator(new File(dataDir));
instances.addThruPipe(iterator);

// 训练模型
model.addInstances(instances);
model.setNumThreads(2);
model.setNumIterations(1000);
model.estimate();

// 输出主题
Object[][] topicWords = model.getTopWords(10);
for (int topic = 0; topic < numTopics; topic++) {
    System.out.println("Topic " + topic);
    for (int word = 0; word < 10; word++) {
        System.out.print(topicWords[topic][word] + " ");
    }
    System.out.println();
}
```