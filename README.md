# プロジェクトについて

## 目的 
スキーマ駆動開発の理解と実践

- Prisma スキーマからのモックデータ生成
- OpenAPI Generator を用いた API クライアントの自動生成と活用


## アーキテクチャ

localhost:5173 : Vite の開発サーバー  
localhost:4010 : Prism Mock Serverのエンドポイント  


TODO  
vite-project（React開発環境）からも openapi.yml にアクセスできるように、ボリュームマウントしたい。

add openapi-generator
openapi-generator generate \
  -i /tmp/openapi/openapi.yml \
  -g typescript-fetch \
  -o ./src/generated-api