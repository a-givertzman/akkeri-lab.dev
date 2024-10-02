FROM --platform=linux/amd64 node:20.17.0-bookworm

RUN apt-get update && \
    apt-get install libimagequant-dev -y --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install --global gulp-cli

COPY package.json package-lock.json ./
RUN npm ci