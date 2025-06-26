#!/bin/bash
cd /home/kavia/workspace/code-generation/eleganceestate-portfolio-74133-29857404/real_estate_portfolio_frontend_workspace/real_estate_portfolio_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

