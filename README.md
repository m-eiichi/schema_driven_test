# プロジェクトについて

## 目的 
スキーマ駆動開発の理解と実践

- Prisma スキーマからのモックデータ生成
- OpenAPI Generator を用いた API クライアントの自動生成と活用


## アーキテクチャ

localhost:5173 : Vite の開発サーバー  
localhost:4010 : Prism Mock Serverのエンドポイント  


add openapi-generator
openapi-generator generate \
  -i ./openapi/openapi.yml \
  -g typescript-fetch \
  -o ./src/generated-api