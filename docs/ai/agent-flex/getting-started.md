# Agent-Flex 入门教程

## 简介
Agent-Flex是一个专注于智能代理开发的Java框架，它提供了灵活的代理构建和管理功能，帮助开发者快速构建智能代理系统。

## 特点
- 灵活的代理架构
- 多代理协作支持
- 智能决策引擎
- 可扩展的插件系统
- 丰富的通信协议

## 环境配置
```xml
<dependency>
    <groupId>com.agents-flex</groupId>
    <artifactId>agent-flex-core</artifactId>
    <version>1.0.0</version>
</dependency>
```

## 基本使用
```java
import com.originseek.agentflex.core.Agent;
import com.originseek.agentflex.core.AgentBuilder;
import com.originseek.agentflex.core.behavior.Behavior;

// 创建智能代理
Agent agent = new AgentBuilder()
    .setName("MyAgent")
    .addBehavior(new CustomBehavior())
    .build();

// 定义代理行为
class CustomBehavior implements Behavior {
    @Override
    public void execute() {
        // 实现代理逻辑
        System.out.println("Agent is performing task...");
    }

    @Override
    public boolean done() {
        return false; // 持续执行
    }
}

// 启动代理
agent.start();

// 发送消息
agent.send(new Message("Hello", "OtherAgent"));

// 接收消息
agent.receive((message) -> {
    System.out.println("Received: " + message.getContent());
});
```