# 蓝剑切水果 - GitHub Pages 部署

## 步骤

### 1. 创建 GitHub 仓库

1. 打开 https://github.com/new
2. 仓库名称输入：`fruit-ninja`
3. 选择 **Public**
4. 点击 **Create repository**（不要勾选任何选项）

### 2. 推送代码

在本地打开 Git Bash 或 PowerShell，运行：

```bash
cd C:\Users\Bulesword\.openclaw\workspace\fruit-ninja

git init
git add .
git commit -m "Initial commit - 蓝剑切水果游戏"

git branch -M main
git remote add origin https://github.com/你的用户名/fruit-ninja.git
git push -u origin main
```

### 3. 开启 GitHub Pages

1. 进入仓库页面 → Settings → Pages
2. Source 选择 **Deploy from a branch**
3. Branch 选择 **main**
4. 保存

### 4. 完成！

等待 1-2 分钟，访问：
```
https://你的用户名.github.io/fruit-ninja
```

---

## 生成 APK

有了网址后：
1. 访问 https://pwabuilder.com
2. 输入上面的网址
3. 点击 Build
4. 下载 Android APK

---

## 游戏玩法

- 🎮 滑动切割水果
- 🍎 水果 +10 分
- 💣 炸弹 -50 分
- ⏱️ 60秒一关，达到目标分数过关
- ❤️ 3 条命
