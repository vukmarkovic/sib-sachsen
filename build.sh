#!/bin/bash

cd /app/Frontend

npm install --legacy-peer-deps
npm run build

cd /app/Backend

npm install --legacy-peer-deps
npm run build
