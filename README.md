
### 目录结构
```sh
packages
  ├─components # 组件
  ├─core # 入口
  ├─docs # 文档
  ├─hooks # 自定义hook
  ├─playground # 调试
  ├─theme # 主题
  └─utils # 工具
```

### 开发依赖

```sh
pnpm add -Dw typescript@^5.2.2 vite@5.1.4 vitest@1.4.0 vue-tsc@^1.8.27 postcss-color-mix@^1.1.0 postcss-each@^1.1.0 postcss-each-variables@0.3.0 postcss-for@^2.1.1 postcss-nested@6.0.1 @types/node@^20.11.20 @types/lodash-es@4.17.12 @vitejs/plugin-vue-jsx@^3.1.0 @vitejs/plugin-vue@5.0.4 @vue/tsconfig@0.5.1
```
### 正式环境依赖

```sh
pnpm add -w lodash-es@4.17.21 vue@3.4.19
```

### 组件开发依赖

```sh
pnpm add -D -F @tk-element/components @vue/test-utils@2.4.5 @vitest/coverage-v8@^1.4.0 jsdom@^24.0.0
```

### 组件正式环境依赖

```sh
pnpm add @popperjs/core@^2.11.8 async-validator@^4.2.5 -F @tk-element/components
```

### 文档依赖

```sh
pnpm add vitepress@1.0.0-rc.44 -D -F @tk-element/docs
```

```sh
npx vitepress init # 初始化文档项目
```


### 组件目录结构

```sh
/**
 * Button.vue
 * Button.tst.tsx
 * type.ts
 * style.css
 * constants.ts
 */
```


###  nvm 补充

```sh
echo 
nvm use $(cat .nvmrc)
```


## StoryBook

在playground初始化storybook
```sh
pnpm dlx storybook@latest init
```

##
lerna
changset
release-it
rimraf # 清除dist打包产物
