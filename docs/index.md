---
layout: home

hero:
  image:
    src: /logo.png
    alt: SmartFlow
  name: SmartFlow
  text: 可信 AI 执行平台
  tagline: 让 AI 在规则内裁决真实脚本执行，服务企业交付、平台治理、个人免费入口与 CLI 接入。
  actions:
    - theme: brand
      text: 产品概览
      link: /product/
    - theme: alt
      text: 核心能力
      link: /product/capabilities
    - theme: alt
      text: 联系我
      link: /contact
    - theme: alt
      text: 我的博客
      link: https://zmx2321.github.io/vite-blog

features:
  - title: 多租户平台治理
    details: public 超管域、租户隔离、平台模板分发、日志审计与客户台账已经形成统一治理边界。
  - title: 智能大脑执行闭环
    details: 从意图理解、计划确认到脚本执行留痕，平台强调可控、可确认、可审计，而不是自由聊天。
  - title: 企业交付与免费入口并行
    details: 企业交付 1.0 承接收入主线，个人免费版承担增长入口，两条线共用同一套后端执行底座。
  - title: CLI 与本地接入
    details: smartflow-cli 已打通最小注册与运行闭环，后续继续承接本地 Agent 和脚本接入标准化。
  - title: 平台模板与分发
    details: 平台模板、租户安装申请、安装确认、回滚和日志构成正式分发主链路。
  - title: 可持续产品化
    details: 当前文档站只聚焦平台介绍、能力边界、版本路线和联系入口，不再混入个人博客内容。
---

## 这是什么

SmartFlow 不是一个“能聊天的后台”，更准确地说，它是一套让 AI 在规则里调度真实脚本执行的可信平台。

它当前同时服务四条现实主线：

- 企业客户交付
- `public` 平台治理
- 个人免费版入口
- CLI / 本地脚本接入

## 当前项目矩阵

| 项目 | 当前角色 | 当前语义 |
| --- | --- | --- |
| `back-python` | 统一后端能力中心 | 多租户 + `public` 平台能力 |
| `smart-flow-admin` | 平台超管前端 | `public` |
| `smart-flow-local` | 第一个客户正式交付前端 | `tenant_1001` |
| `sync-flow` | 第二个客户正式交付前端 | `tenant_1002` |
| `smart-flow-free` | 个人免费版正式前端 | 隐藏租户 `tenant_1000` |
| `smartflow-cli` | CLI / 本地 Agent 入口 | 本地用户环境 |

## 站点导航

- 想先理解平台：看 [产品概览](/product/)
- 想看能力边界：看 [核心能力](/product/capabilities)
- 想看技术结构：看 [架构说明](/product/architecture)
- 想看版本和路线：看 [版本路线](/product/editions)
- 想看品牌方向：看 [Logo 设计](/logo-design/)
- 想直接联系我：看 [联系我](/contact)
