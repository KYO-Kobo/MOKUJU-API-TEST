# MOKUJU API テスト

MOKUJU APIのテスト環境を提供するNext.jsアプリケーションです。

## セットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/KYO-Kobo/MOKUJU-API-TEST.git
cd MOKUJU-API-TEST
```

2. 依存関係のインストール
```bash
npm install
```

3. 環境変数の設定
`.env.local`ファイルを作成し、以下の環境変数を設定してください：
```
MOKUJU_API_KEY=your_api_key_here
```

4. 開発サーバーの起動
```bash
npm run dev
```

## デプロイ

このプロジェクトはVercelにデプロイすることを想定しています。

1. Vercelにプロジェクトをインポート
2. 環境変数を設定
3. デプロイを実行

## 使用方法

1. ブラウザで`http://localhost:3000`にアクセス
2. 「APIテスト実行」ボタンをクリックしてAPIをテスト 