FROM node:18-alpine AS build

WORKDIR /app

# 複製 package 檔案
COPY package*.json ./

# 安裝所有依賴(包括 devDependencies,建置時需要)
RUN npm ci

# 複製原始碼
COPY . .

# 建置應用
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run build

# 生產階段:使用 Nginx
FROM nginx:alpine

# 只複製建置結果,不包含 node_modules
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
