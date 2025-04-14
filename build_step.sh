#!/bin/bash

echo "Build script"

echo "Installing dependencies"
npm install

echo "Checking code style"
npm run eslint

echo "Running tests"
npm test

echo "Running end-to-end tests"
npm run test:e2e

echo "Compiling build"
npm run build