#!/usr/bin/env sh

set -e

COMMIT_MESSAGE="${1:-docs: update source content}"

git pull --rebase
git add .

if git diff --cached --quiet; then
  echo "No source changes to upload."
  exit 0
fi

git commit -m "${COMMIT_MESSAGE}"
git push
