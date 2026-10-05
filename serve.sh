#!/usr/bin/env bash
#
# One command to work on the ACL website locally. No Node needed on your host —
# everything runs inside Docker.
#
#   ./serve.sh           Start the live dev server at http://localhost:4321
#                        (edit any Markdown/component and the browser reloads).
#
#   ./serve.sh build     Build the static production site into ./dist
#                        (what you'd deploy — nothing is deployed automatically).
#
#   ./serve.sh preview   Build, then serve the production output at :4321
#                        to preview exactly what would ship.
#
#   ./serve.sh stop      Stop and remove the dev container.
#
set -euo pipefail
cd "$(dirname "$0")"

cmd="${1:-dev}"

# Production builds run on a copy of the project inside the container: Astro
# deletes and recreates directories under dist/ as it builds, which fails
# intermittently (ENOENT) on Docker Desktop's bind mounts.
IN_CONTAINER_COPY="mkdir -p /tmp/site && tar -C /app -cf - --exclude=./dist --exclude=./.astro \\
  --exclude=./.git --exclude=./_site --exclude=./node_modules . | tar -C /tmp/site -xf - \\
  && ln -s /app/node_modules /tmp/site/node_modules && cd /tmp/site"

case "$cmd" in
  dev|"")
    echo "==> Starting ACL website dev server..."
    echo "==> Open http://localhost:4321  (Ctrl-C to stop)"
    docker compose up --build
    ;;
  build)
    echo "==> Building static site into ./dist ..."
    rm -rf dist
    docker compose run --rm --no-deps web sh -c "$IN_CONTAINER_COPY && npm run build && cp -R dist /app/dist"
    echo "==> Done. Static site is in ./dist"
    ;;
  preview)
    echo "==> Building, then previewing production output at http://localhost:4321"
    docker compose run --rm --service-ports --no-deps web sh -c "$IN_CONTAINER_COPY && npm run build && npm run preview"
    ;;
  stop)
    docker compose down
    ;;
  *)
    echo "Usage: ./serve.sh [dev|build|preview|stop]" >&2
    exit 1
    ;;
esac
