<div align="center">

# 🤖 Google Form AI 自動填寫工具

[English](README.md) | [繁體中文](README.zh-TW.md)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Python](https://img.shields.io/badge/Python-3.7%2B-blue)](https://www.python.org/)
[![Gemini](https://img.shields.io/badge/AI-Gemini-orange)](https://deepmind.google/technologies/gemini/)

一個使用 Google Gemini AI 來自動填寫 Google Form 的智能工具  
只需提供表單網址和基本資訊，即可自動生成填寫用的網址

[功能特點](#功能特點) •
[快速開始](#快速開始) •
[使用說明](#使用說明) •
[貢獻指南](#貢獻指南)

</div>

---

## ✨ 功能特點

- 🧠 使用 Gemini AI 智能生成答案
- 🔍 自動解析 Google Form 結構
- 📝 支援多種題型：
  - 簡答題 / 詳答題
  - 選擇題 / 下拉式選單
  - 核取方塊 / 線性刻度
  - 單選方格 / 核取方格
  - 日期題 / 時間題

## 🚀 快速開始

### 前置需求

```bash
pip install -r requirements.txt
```

### 基本設定

1. 申請 [Google AI Studio](https://makersuite.google.com/app/apikey) API 金鑰

2. 建立 `.env` 檔案：
```bash
GEMINI_API_KEY=你的API金鑰
```

3. 修改設定：
```python
# 修改表單網址
URL = '你的Google Form網址'

# 修改個人資訊
PROMPT_PARTS = [
    "名字: Your Name",
    "性別: 男/女",
    "電話: 你的電話",
    # ... 其他資訊
]
```

### 執行程式

```bash
python ai_form.py
```

## 📖 使用說明

### 自訂提示詞
你可以透過修改 `PROMPT_PARTS` 來自訂 AI 的回答方式：
- 個人基本資料
- 回答規則和格式
- 答案選擇限制

### 程式架構
| 函數名稱 | 說明 |
|---------|------|
| `string_to_object_list()` | 解析 Google Form 結構 |
| `objects_to_result_strings()` | 生成填寫用的 URL |
| `objects_to_string()` | 將表單轉換為 AI 可理解的格式 |
| `set_answer()` | 設定答案 |
| `get_form()` | 獲取表單資料 |

## ⚠️ 注意事項

- 請確保你有合法的 Gemini API 金鑰
- 不要將含有 API 金鑰的 `.env` 檔案上傳至公開儲存庫
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
- 優化程式碼結構
- 新增錯誤處理機制

## 📄 授權條款

此專案使用 MIT License - 詳見 [LICENSE](LICENSE) 檔案

## 📢 免責聲明

本工具僅供教育和研究目的使用。使用者應自行承擔使用風險，並遵守相關法律法規。

## 📮 聯絡方式

如有任何問題或建議：
- 🐛 [開啟 Issue](../../issues)
- 🔀 [提交 Pull Request](../../pulls)
- 📧 寄信至 [your-email@example.com]

## 🙏 致謝

- [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- [python-dotenv](https://github.com/theskumar/python-dotenv)
- [requests](https://requests.readthedocs.io/)

---

<div align="center">
Made with ❤️ by Your Name
</div>
