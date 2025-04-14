#!/bin/bash

echo "Build script"

echo "Installing dependencies"
npm install

echo "Checking code style"
npm run eslint

echo "Running tests"
npm test

echo "Compiling build"
npm run build