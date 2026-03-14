# 蓝剑切水果 - 部署指南

## 快速开始（小米 Pad）

### 方法一：PWA 方式（推荐）

1. **部署网页**
   - 将所有文件上传到任意静态网页空间（GitHub Pages、Vercel、Netlify 等）
   - 或使用 VS Code 的 "Live Server" 插件本地预览

2. **添加到主屏幕**
   - 用小米 Pad 浏览器打开网页
   - 点击右上角三个点 → "添加至主屏幕"
   - 就会像原生 App 一样出现！

### 方法二：转换为 APK

#### 方案 A：PWABuilder（推荐）

1. 访问 https://pwabuilder.com
2. 输入你的网页地址
3. 点击 "Build"
4. 下载 Android 安装包

#### 方案 B：Web2App

1. 访问 https://www.appmaker.xyz/web-to-app/
2. 上传 index.html 或输入网址
3. 生成 APK 下载

#### 方案 C：Chrome 打包

1. 在电脑 Chrome 打开网页
2. 开发者工具 → Application → Manifest
3. 点击 "Install"

---

## 文件说明

```
fruit-ninja/
├── index.html      # 游戏主文件
├── manifest.json   # PWA 配置文件
└── SPEC.md         # 游戏规格说明
```

---

## 游戏特性

- ✅ 10 个关卡
- ✅ 6 种水果 + 炸弹
- ✅ 触屏滑动切割
- ✅ 连击 combo 系统
- ✅ 音效和背景音乐
- ✅ 分数、生命系统

---

## 本地测试

双击 index.html 即可在浏览器中测试游戏！
