<div align="center">

# 🤖 Google Form AI 自動填寫工具

[English](README.md) | [繁體中文](README.zh-TW.md)

<img src="Logo.png" alt="AutoFormAI Logo" width="150" />

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Python](https://img.shields.io/badge/Python-3.7%2B-blue)](https://www.python.org/)
[![Gemini](https://img.shields.io/badge/AI-Gemini-orange)](https://deepmind.google/technologies/gemini/)

一個使用 Google Gemini AI 來自動填寫 Google Form 的智能工具  
只需提供表單網址和基本資訊，即可自動生成填寫用的網址

[功能特點](#功能特點) •
[快速開始](#快速開始) •
[使用說明](#使用說明) •
[貢獻指南](#貢獻指南)

<img src="preview.png" alt="AutoFormAI 截圖" width="800" />

</div>

---

## ✨ 功能特點

- 🧠 **AI 智能回答** - 使用 Gemini AI 生成智能回答
- 🔍 **表單結構檢測** - 自動解析 Google Form 結構
- 📝 **多種題型支援** - 支援各種問題格式：
  - 簡答題 / 詳答題
  - 選擇題 / 下拉式選單
  - 核取方塊 / 線性刻度
  - 單選方格 / 核取方格
  - 日期題 / 時間題
- 🌐 **網頁界面** - 功能完整的網頁介面與響應式設計
- 🌙 **多語言支援** - 支援英文和繁體中文
- 📱 **裝置最佳化** - 針對桌面和行動裝置優化
- 📋 **詳細說明** - 為使用者提供逐步指引

<details>
<summary>📋 詳細功能清單</summary>

| 功能 | 描述 | 狀態 |
|-----|-----|-----|
| AI 整合 | 連接 Google Gemini AI API | ✅ |
| 表單檢測 | 解析 Google Form 結構和元素 | ✅ |
| 問題支援 | 支援各種 Google Form 問題類型 | ✅ |
| 網頁界面 | 適用於所有裝置的響應式網頁設計 | ✅ |
| 多語言界面 | 支援英文和繁體中文 | ✅ |
| 預填網址 | 生成預填表單的網址 | ✅ |
| Python 版本 | 命令列界面的 Python 腳本 | ✅ |
| 純前端版本 | 無需伺服器運行 | ✅ |

</details>

## 🚀 快速開始

本工具可以通過兩種方式使用：純前端應用或搭配 Python 後端。

### 方式 A：純前端版本（無需安裝）

#### 前置需求
- 現代網頁瀏覽器（Chrome、Firefox、Edge 等）
- 有效的 [Google AI Studio](https://makersuite.google.com/app/apikey) API金鑰

#### 執行應用程式
只需下載此儲存庫並在瀏覽器中開啟 `index.html` 檔案即可。無需任何伺服器。

您也可以使用：
- Visual Studio Code 的 "Live Server" 擴充功能
- 任何靜態檔案伺服器（如 Python 的 `python -m http.server`）

### 方式 B：Python 版本

#### 前置需求
- Python 3.7 或更高版本
- 有效的 [Google AI Studio](https://makersuite.google.com/app/apikey) API金鑰

#### 設置
1. 安裝所需套件：
   ```bash
   cd python
   pip install -r requirements.txt
   ```

2. 配置 Python 腳本：
   - 用文字編輯器開啟 `python/ai_form.py`
   - 在腳本中設置您的 Google Form URL 和個人資訊
   - 在 python 目錄中創建 `.env` 檔案，並添加您的 API 金鑰：
     ```
     GEMINI_API_KEY=您的API金鑰
     ```

3. 執行腳本：
   ```bash
   python ai_form.py
   ```

## 📖 使用說明

### 前端版本

1. 輸入您的 Gemini API 金鑰
2. 貼上 Google Form 網址
3. 等待表單結構被檢測
4. 輸入您的個人資訊
5. 點擊"生成填寫連結"獲取預填表單的網址

### Python 版本

您可以通過修改以下內容來自訂腳本：
- `URL` 變數，設置您的 Google Form 網址
- `PROMPT_PARTS` 列表，設置您的個人資訊

### 自訂資訊格式
您可以按照自己喜歡的方式格式化個人資訊。例如：
```
名字: 王小明
性別: 男
電子郵件: example@email.com
出生日期: {"year": 1990, "month": 5, "day": 15}
興趣愛好: 音樂, 健行, 閱讀
```

## 🔧 技術細節

<details>
<summary>🔍 專案結構</summary>

```
AutoFormAI/
├── index.html            # 主要網頁界面
├── help.html             # 幫助文檔頁面
├── about.html            # 關於頁面
├── privacy.html          # 隱私政策頁面
├── 404.html              # 錯誤頁面
├── static/               # 靜態資源
│   ├── css/              # 樣式表
│   │   └── style.css     # 主要 CSS 樣式
│   └── js/               # JavaScript 文件
│       ├── script.js     # 主要應用邏輯
│       └── i18n.js       # 國際化
├── python/               # Python 版本
│   ├── ai_form.py        # 主要 Python 腳本
│   └── requirements.txt  # Python 依賴
├── Logo.png              # 專案標誌
├── preview.png           # README 的截圖
├── favicon-circle.svg    # 網站圖標
├── robots.txt            # 機器人檔案
├── sitemap.xml           # 網站地圖
└── README.md             # 文檔
```

</details>

## Google AdSense 合規性更新

為確保符合 Google AdSense 政策，我們做了以下改進：

1. **廣告動態載入**：修改代碼以確保廣告僅與相關內容一起顯示
   - 添加邏輯，僅在檢測到表單結構後才載入中間內容廣告
   - 添加邏輯，僅在生成結果後才載入結果廣告
   - 從空白/佔位區域移除廣告

2. **內容優先方法**：重新構建所有頁面的廣告放置位置
   - 調整廣告位置，使其在實質性內容部分之後出現
   - 確保廣告不會放置在僅用於導航或功能性的區域

3. **移除警告/提示對話框**：刪除可能觸發警告彈窗的功能
   - 移除 about.html 和 privacy.html 中的「回報問題」功能
   - 刪除所有可能產生警告對話框的 JavaScript 代碼

這些更改確保我們的網站完全符合 Google AdSense 政策，防止廣告出現在沒有發布商內容的頁面、建設中的頁面或僅用於導航或警示目的的頁面上。

**實施這些更改後，您應該向 Google AdSense 提交網站複查申請，以解除任何限制。**

## ⚠️ 注意事項

- 您的 Gemini API 金鑰僅在本地使用，從不會被儲存或傳輸到任何伺服器
- 網頁版本需要成功檢測表單結構後才能生成連結
- 本工具僅供學習研究使用
- 請遵守 Google Form 的使用條款

## 🤝 貢獻指南

歡迎提交 Pull Request 來改善此工具：

1. Fork 此專案
2. 建立新分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

### 改善方向
- 支援更多題型
- 改善 AI 回答準確度
- 加強表單檢測的錯誤處理
- 提升使用者介面和體驗

## 📄 授權條款

此專案使用 MIT License - 詳見 [LICENSE](LICENSE) 檔案

## 📢 免責聲明

本工具僅供教育和研究目的使用。使用者應自行承擔使用風險，並遵守相關法律法規。

## 📮 聯絡方式

如有任何問題或建議：
- 🐛 [開啟 Issue](../../issues)
- 🔀 [提交 Pull Request](../../pulls)
- 📧 寄信至 [sun055676@gmail.com]

## 🙏 致謝

- [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- 各種協助表單檢測的 CORS 代理服務
- 現代網頁技術 (HTML, CSS, JavaScript)

---

<div align="center">
Made with ❤️ by Sun
</div>
