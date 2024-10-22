# Uni Nest

这是一个 `nestjs` 工具库, 它集成了大多数 `nestjs` 项目中会使用到的常规基础设施, 如: 统一响应数据格式、统一异常处理、自定义业务异常、jwt权限守卫以及swagger文档生成等, 帮助你更快捷的实现接口定义.

## 前言

在 Nestjs 项目中, 默认的 `post` 请求响应状态码总是 `201`, 这很不符合国内大多数约定俗成的规范, 尤其是作为前端开发, 我们其实更希望拿到的是 `200` 而不是 `201`. 从官方得到的答案是通过 `@HttpCode()` 这个装饰器来更改某个 `post` 请求的状态码, 这当然即方便又简单, 但需要我在每一个 post 请求上都使用它, 我很反感这种重复的定义, 代码不仅冗余而且容易产生纰漏, 我希望能在全局去“纠正”所有 post 请求的状态码, 同时还能兼顾到 swagger 文档. 起初我开发这个项目主要目的就是为了去解决这个问题, 但当我实现了这些看似无关紧要的业务逻辑之后, 我发现我还能让它做到更多😋.

## UniNest 能做什么

- 默认集成 `@nestjs/swagger`, 通过更简单的选项完成对 `swagger` 文档的配置, 并自动收集 `extraModels`.
- 统一状态码, 所有请求方式的默认状态码均为 200
- 默认注册全局响应拦截器, 统一响应数据格式, 同时兼容 swagger 文档
- 默认注册全局jwt权限守卫, 控制器中按需公开接口
- 默认注册全局异常过滤器处理业务逻辑异常、标准Http异常以及可扩展的自定义业务异常
- 接口的定义只需要在一个装饰器中完成

## 使用

使用脚手架创建一个使用uni-nest的 nestjs 项目

```sh
# 需要 nodejs 18+
npm create uni-nest@latest
```

### 开发环境

```sh
npm run start:dev
```

### debug

```sh
npm run start:debug
```

### 生产环境

```sh
npm run start:prod
```

### 测试

```sh
npm run test
```
