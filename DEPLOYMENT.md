# 部署指南

## 專案修改總結

本次修改將專案從 Create React App 遷移到 Vite，並配置了完整的 Docker 部署環境。

### 主要修改內容

#### 1. package.json
- ✅ 移除 `react-scripts` 依賴
- ✅ 更新 scripts 使用 Vite 命令
  - `npm run dev` - 啟動開發伺服器
  - `npm run build` - 建置生產版本
  - `npm run preview` - 預覽生產版本

#### 2. Dockerfile
- ✅ 修改輸出目錄從 `build` 改為 `dist`（Vite 預設輸出目錄）
- ✅ 使用 multi-stage build 優化映像大小
- ✅ 使用 Nginx Alpine 作為生產環境

#### 3. vite.config.js
- ✅ 配置開發伺服器設定
- ✅ 配置路徑別名 `@` 指向 `src` 目錄
- ✅ 配置 SCSS 預處理器
- ✅ 配置 build 選項和 chunk 分割
- ✅ 配置 API 代理

#### 4. index.html
- ✅ 在根目錄創建新的 `index.html`（Vite 要求）
- ✅ 移除 CRA 特定的 `%PUBLIC_URL%` 語法
- ✅ 添加正確的 module script 引用

#### 5. 入口檔案（Vite）
- ✅ 使用 `src/main.jsx` 作為 Vite 標準入口（避免 `.js` 內含 JSX 造成 `vite build` / Docker build 失敗）
- ✅ `index.html` 改為載入 `/src/main.jsx`
- ✅ 全域樣式由 `src/main.jsx` 匯入 `src/assets/styles/main.scss`

#### 6. 應用程式組件
- ✅ 創建 Header 組件
- ✅ 創建 Footer 組件
- ✅ 更新 Home, About, Contact 頁面
- ✅ 更新 App.jsx 使用 React Router

#### 7. 其他配置
- ✅ 創建 `.dockerignore` 優化 Docker 建置
- ✅ 更新 README.md 文檔
- ✅ 更新全域樣式支援新的 App 結構

## 啟動專案

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 訪問 http://localhost:5173
```

### Docker 部署

```bash
# 建置並啟動容器
docker-compose up -d --build

# 訪問 http://localhost:8080

# 查看日誌
docker-compose logs -f

# 停止容器
docker-compose down
```

## 驗證清單

- [ ] 本地開發環境正常運行 (`npm run dev`)
- [ ] 本地建置成功 (`npm run build`)
- [ ] Docker 建置成功 (`docker-compose build`)
- [ ] Docker 容器啟動成功 (`docker-compose up`)
- [ ] 網站可以在 http://localhost:8080 訪問
- [ ] 路由正常切換（首頁、關於我們、聯絡我們）
- [ ] 樣式正常顯示
- [ ] 沒有控制台錯誤

## 常見問題

### Q: 執行 `npm run dev` 時出現端口被占用
A: 修改 `vite.config.js` 中的 `server.port` 為其他端口

### Q: Docker 建置失敗
A: 確保已安裝 Docker 和 Docker Compose，並且 Docker daemon 正在運行

### Q: 樣式沒有正確載入
A: 檢查 `src/assets/styles/main.scss` 是否正確導入到 `App.jsx`

### Q: 路由不工作
A: 確保已安裝 `react-router-dom` 依賴

## 下一步

1. 完善各個頁面的內容和功能
2. 添加更多組件和路由
3. 集成後端 API
4. 添加測試
5. 配置 CI/CD 流程
