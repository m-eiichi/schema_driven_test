FROM node:23.11.0-bullseye-slim
LABEL version="1.0"
LABEL description="node20 with Yarn 4"
# Update and install necessary packages
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
        git \
        openjdk-17-jre-headless \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Enable Corepack and set Yarn to version 4
RUN corepack enable \
&& corepack prepare yarn@stable --activate 

# OpenAPI Generator CLI のインストール
# WORKDIR /usr/src/app
# RUN yarn install