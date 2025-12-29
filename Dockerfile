FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only lockfiles first for layer caching
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM node:20-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
