# React-useEffect-InputApp

Reactの `useEffect` を使って、入力フォームの値が変更されたときに処理を実行する練習用アプリです。

## 📌 概要

`useState` で入力値を管理し、`useEffect` を使って入力文字数を監視します。

入力内容が変更されるたびに、現在の入力文字数をコンソールへ出力します。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* React Hooks

  * `useState`
  * `useEffect`

## 📂 構成

```text
src/
├── components/
│   └── HandleInput.tsx
├── App.tsx
└── main.tsx
```

## 💡 学習内容

### useState

入力フォームの値を状態として管理します。

```tsx
const [input, setInput] = useState<string>("");
```

### useEffect

`input` が変更されたときに処理を実行します。

```tsx
useEffect(() => {
  console.log(`入力文字数: ${input.length}`);
}, [input]);
```

依存配列に `[input]` を指定することで、`input` の値が変更されるたびに `useEffect` が実行されます。

## 🧹 クリーンアップ処理

このアプリでは `useEffect` 内で `console.log` を実行しているだけなので、クリーンアップ処理は必要ありません。

イベントリスナーやタイマーなど、後から解除・停止する必要がある処理を `useEffect` で扱う場合にはクリーンアップ処理を使用します。

## 🚀 起動方法

```bash
# パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで表示されたURLへアクセスします。

## 🎯 動作

入力フォームに文字を入力すると、ブラウザのコンソールに入力文字数が表示されます。

```text
入力文字数: 1
入力文字数: 2
入力文字数: 3
...
```

## 📚 学習ポイント

* `useState` による状態管理
* `onChange` による入力値の取得
* `React.ChangeEvent<HTMLInputElement>` の型付け
* `useEffect` による状態変更の監視
* `useEffect` の依存配列
* クリーンアップ処理が必要なケース・不要なケース
