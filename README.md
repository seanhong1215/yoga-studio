# Yoga Studio - React + Vite + Docker

這是一個使用 React + Vite 建置的瑜珈工作室網站專案，支援 Docker 容器化部署。

## 技術棧

- React 19
- Vite 6
- React Router 7
- SASS
- Docker & Nginx

## 開發環境設定

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:5173](http://localhost:5173)

### 建置生產版本

```bash
npm run build
```

建置結果會輸出到 `dist` 目錄。

### 預覽生產版本

```bash
npm run preview
```

## Docker 部署

### 建置並啟動 Docker 容器

```bash
npm run docker:build
npm run docker:up
```

或使用簡化命令：

```bash
docker-compose up -d --build
```

應用程式會在 [http://localhost:8080](http://localhost:8080) 上運行。

### 查看日誌

```bash
npm run docker:logs
```

### 停止容器

```bash
npm run docker:down
```

### 重新建置（清除快取）

```bash
npm run docker:rebuild
```

## 專案結構

```
yoga-studio/
├── src/
│   ├── assets/          # 靜態資源
│   │   └── styles/      # 全域樣式
│   ├── components/      # 共用組件
│   │   ├── common/      # 通用組件
│   │   └── layout/      # 佈局組件
│   ├── pages/           # 頁面組件
│   ├── utils/           # 工具函數
│   ├── App.jsx          # 應用程式主組件
│   └── index.js         # 應用程式入口
├── public/              # 公開資源
├── Dockerfile           # Docker 設定檔
├── docker-compose.yml   # Docker Compose 設定
├── nginx.conf           # Nginx 設定
├── vite.config.js       # Vite 設定
└── package.json         # 專案相依套件

```

## 瀏覽器支援

支援所有現代瀏覽器：

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## License

MIT
