#!/bin/bash

echo "Build script"
npm install
npm run eslint
npm test
npm run build