#!/bin/bash
if git diff --quiet HEAD^ HEAD ./src; then
  echo "No changes in src folder. Skipping build."
  exit 0
fi
