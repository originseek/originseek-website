# LangChain4j 入门指南

## 简介

LangChain4j 是一个强大的 Java 语言模型框架，专注于构建基于大语言模型的应用。它提供了丰富的工具和抽象，使开发者能够轻松地创建智能应用。

## 环境要求

- Java 17 或更高版本
- Maven 或 Gradle 构建工具

## 快速开始

### Maven 依赖

```xml
<dependency>
    <groupId>dev.langchain4j</groupId>
    <artifactId>langchain4j</artifactId>
    <version>0.27.1</version>
</dependency>
```

### Gradle 依赖

```groovy
dependencies {
    implementation 'dev.langchain4j:langchain4j:0.27.1'
}
```

## 基本使用

### 1. 创建语言模型

```java
OpenAiChatModel model = OpenAiChatModel.builder()
    .apiKey(System.getenv("OPENAI_API_KEY"))
    .build();
```

### 2. 发送消息

```java
ChatResponse response = model.generate(Arrays.asList(
    SystemMessage.from("You are a helpful assistant."),
    UserMessage.from("What is LangChain4j?")
));

System.out.println(response.content().text());
```

### 3. 使用工具和代理

```java
@Tool
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

AiServices aiServices = AiServices.builder()
    .chatLanguageModel(model)
    .tools(new Calculator())
    .build();

MathSolver solver = aiServices.create(MathSolver.class);
String result = solver.solve("What is 5 + 3?");
```

## 高级特性

### 1. 记忆管理

```java
MessageMemory memory = MessageMemoryImpl.builder().build();
AiServices aiServices = AiServices.builder()
    .chatLanguageModel(model)
    .memory(memory)
    .build();
```

### 2. 文档处理

```java
DocumentLoader loader = FileSystemDocumentLoader.builder()
    .path("documents/")
    .build();

EmbeddingModel embeddingModel = OpenAiEmbeddingModel.builder()
    .apiKey(System.getenv("OPENAI_API_KEY"))
    .build();

EmbeddingStore<TextSegment> embeddingStore = new InMemoryEmbeddingStore<>();
```

## 最佳实践

1. 使用环境变量管理 API 密钥
2. 实现错误处理和重试机制
3. 优化提示工程
4. 使用异步操作提高性能

## 下一步

- 探索[核心功能](/ai/langchain4j/core-features)
- 了解[链式调用](/ai/langchain4j/chains)
- 查看[应用示例](/ai/langchain4j/examples)