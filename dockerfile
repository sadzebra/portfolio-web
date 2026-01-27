# STAGE 1: Base (Install Dependencies)
FROM node:24-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# STAGE 2: Builder (Build the Next.js app)
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
# Disable Next.js telemetry for privacy
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# STAGE 3: Runner (Production Image)
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a system user (Security Best Practice: Don't run as root)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only the necessary files from the build
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
