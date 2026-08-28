FROM node:20-alpine AS builder
WORKDIR /app
# pnpm is PINNED deliberately: `pnpm@latest` floated to 11.x, which imports
# node:sqlite -- a builtin absent from Node 20 -- so corepack installed it
# happily (its engines field claims >=18.12) and the build died at run time
# with ERR_UNKNOWN_BUILTIN_MODULE. Nothing in the repo changed that day.
RUN corepack enable && corepack prepare pnpm@10.23.0 --activate
COPY package.json pnpm-lock.yaml* package-lock.json* ./
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; elif [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
RUN if [ -f pnpm-lock.yaml ]; then pnpm build; else npm run build; fi

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
RUN echo "server { listen 80; server_name _; root /usr/share/nginx/html; index index.html; gzip on; gzip_types text/plain text/css application/json application/javascript; location / { try_files \$uri \$uri.html \$uri/ /index.html; } }" > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
