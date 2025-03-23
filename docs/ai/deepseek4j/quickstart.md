# deepseek4j 快速上手

## 简介

deepseek4j 是一个基于 DeepSeek API 的 Java SDK，它提供了简单易用的接口，帮助开发者快速集成和使用 DeepSeek 的大语言模型能力。本指南将帮助你快速上手 deepseek4j。

## 环境要求

- Java 8 或更高版本
- Maven 或 Gradle 构建工具

## 快速开始

### Maven 依赖

```xml
<dependency>
    <groupId>com.pig4cloud.plugin</groupId>
    <artifactId>deepseek4j-spring-boot-starter</artifactId>
    <version>0.1.0</version>
</dependency>
```

### Gradle 依赖

```groovy
dependencies {
    implementation 'com.pig4cloud.plugin:deepseek4j-spring-boot-starter:0.1.0'
}
```

## 基本使用

### 1. 配置 API Key

在 `application.yml` 中配置 DeepSeek API Key：

```yaml
deepseek:
  api-key: your-api-key-here
```

### 2. 注入 DeepSeekClient

```java
@Autowired
private DeepSeekClient deepseekClient;
```

### 3. 文本生成

```java
// 基本对话
ChatMessage message = ChatMessage.of("Tell me about artificial intelligence.");
ChatResponse response = deepseekClient.chat(message);
System.out.println(response.getContent());

// 带上下文的对话
List<ChatMessage> messages = new ArrayList<>();
messages.add(ChatMessage.of(Role.SYSTEM, "You are a helpful assistant."));
messages.add(ChatMessage.of(Role.USER, "What is deep learning?"));
ChatResponse response = deepseekClient.chat(messages);
```

### 4. 参数配置

```java
ChatMessage message = ChatMessage.of("Tell me a story.");
ChatCompletionRequest request = ChatCompletionRequest.builder()
    .messages(Collections.singletonList(message))
    .temperature(0.7f)
    .topP(0.9f)
    .maxTokens(2000)
    .build();

ChatResponse response = deepseekClient.chat(request);
```

## 高级特性

### 1. 流式输出

```java
ChatMessage message = ChatMessage.of("Write a long story.");
deepseekClient.streamChat(message, new ChatStreamListener() {
    @Override
    public void onMessage(String content) {
        System.out.print(content);
    }

    @Override
    public void onError(Throwable throwable) {
        throwable.printStackTrace();
    }

    @Override
    public void onComplete() {
        System.out.println("\nStream completed");
    }
});
```

### 2. 自定义配置

```java
@Configuration
public class DeepSeekConfig {
    @Bean
    public DeepSeekClient deepseekClient() {
        return DeepSeekClient.builder()
            .apiKey("your-api-key")
            .timeout(60)
            .baseUrl("https://api.deepseek.com")
            .build();
    }
}
```

## 最佳实践

1. 合理设置超时时间和重试策略
2. 使用流式输出处理长文本生成
3. 实现错误处理机制
4. 合理管理 API Key

## 下一步

- 查看[API参考](/ai/deepseek4j/api-reference)
- 了解[高级特性](/ai/deepseek4j/advanced)
- 探索[实战案例](/ai/deepseek4j/case-studies)