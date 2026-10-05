# Single image used for both local dev (astro dev) and producing the static
# build (astro build). Node lives only in here — the host needs just Docker.
FROM node:20-alpine

WORKDIR /app

# Install deps first so this layer is cached unless package.json changes.
COPY package.json package-lock.json* ./
RUN npm install

# App source is bind-mounted in dev (see docker-compose.yml); copying it here
# means the image also works standalone for `npm run build`.
COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
