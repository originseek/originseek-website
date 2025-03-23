# Spring AI 快速开始

## 简介

Spring AI 是 Spring 生态系统中的新成员，旨在简化 AI 应用的开发过程。本指南将帮助你快速上手 Spring AI，了解其基本概念和使用方法。

## 环境准备

在开始使用 Spring AI 之前，请确保你的开发环境满足以下要求：

- Java 17 或更高版本
- Spring Boot 3.2.0 或更高版本
- Maven 或 Gradle 构建工具

## 项目配置

### Maven 依赖

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter</artifactId>
    <version>0.8.0</version>
</dependency>
```

### Gradle 依赖

```groovy
dependencies {
    implementation 'org.springframework.ai:spring-ai-starter:0.8.0'
}
```

## 基本使用

### 1. 创建 Spring Boot 项目

使用 Spring Initializr 创建一个新的 Spring Boot 项目，或在现有项目中添加 Spring AI 依赖。

### 2. 配置 AI 模型

在 `application.properties` 或 `application.yml` 中配置 AI 模型：

```yaml
spring:
  ai:
    model:
      provider: openai
      api-key: ${OPENAI_API_KEY}
```

### 3. 创建服务类

```java
@Service
public class AIService {
    private final AI ai;

    public AIService(AI ai) {
        this.ai = ai;
    }

    public String generateResponse(String prompt) {
        return ai.generateText(prompt);
    }
}
```

### 4. 创建控制器

```java
@RestController
@RequestMapping("/api/ai")
public class AIController {
    private final AIService aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/generate")
    public String generate(@RequestBody String prompt) {
        return aiService.generateResponse(prompt);
    }
}
```

## 示例代码

以下是一个完整的示例，展示如何使用 Spring AI 生成文本：

```java
@SpringBootApplication
public class SpringAIApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringAIApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(AI ai) {
        return args -> {
            String response = ai.generateText("What is Spring AI?");
            System.out.println("AI Response: " + response);
        };
    }
}
```

## 下一步

- 了解 Spring AI 的[基础概念](/ai/spring-ai/concepts)
- 探索更多[模型集成](/ai/spring-ai/models)选项
- 查看[最佳实践](/ai/spring-ai/best-practices)指南