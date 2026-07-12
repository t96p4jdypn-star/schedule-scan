# Schedule Scan

画像・スクリーンショット・PDFから予定情報を端末内OCRで抽出し、確認・修正後にiCalendar（.ics）として登録できるPWAです。

## 開発

```bash
pnpm install
pnpm dev
pnpm build
```

OCRはTesseract.js、履歴保存はIndexedDB（Dexie）を使用します。外部OCR APIは使用しません。
