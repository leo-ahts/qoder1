# 待办事项管理小程序

一个基于React的简单待办事项管理应用，使用localStorage进行数据持久化存储。

## 功能特性

- 添加新的待办事项
- 标记待办事项为已完成
- 删除待办事项
- 数据持久化存储（使用浏览器localStorage）
- 响应式设计，支持移动端和桌面端

## 技术栈

- React 18
- Vite
- CSS3

## 部署方式

### 使用Vercel部署（推荐）

1. 将此仓库推送到GitHub
2. 访问 [Vercel](https://vercel.com/) 并注册/登录账户
3. 点击 "New Project"
4. 选择此仓库
5. 保持默认设置，点击 "Deploy"
6. 等待部署完成，获取访问链接

### 使用Netlify部署

1. 将此仓库推送到GitHub
2. 访问 [Netlify](https://netlify.com/) 并注册/登录账户
3. 点击 "New site from Git"
4. 选择此仓库
5. 设置构建命令为 `npm run build`
6. 设置发布目录为 `dist`
7. 点击 "Deploy site"

## 本地开发

由于项目使用了较新的Vite版本，需要Node.js 16+版本才能正常运行。

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 使用说明

1. 在输入框中输入待办事项内容
2. 点击"添加"按钮或按回车键添加新任务
3. 点击任务前的复选框标记任务为已完成
4. 点击"删除"按钮删除任务

## 注意事项

- 数据存储在浏览器localStorage中，清除浏览器数据会导致任务丢失
- 应用不涉及后端服务，所有数据仅保存在本地浏览器中