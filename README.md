<div align="center">

# 🤖 Google Form AI Auto-Fill Tool

[English](README.md) | [繁體中文](README.zh-TW.md)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Python](https://img.shields.io/badge/Python-3.7%2B-blue)](https://www.python.org/)
[![Gemini](https://img.shields.io/badge/AI-Gemini-orange)](https://deepmind.google/technologies/gemini/)

An intelligent tool that uses Google Gemini AI to automatically fill out Google Forms.  
Just provide the form URL and basic information to generate a pre-filled URL.

[Features](#features) •
[Quick Start](#quick-start) •
[Usage](#usage) •
[Contributing](#contributing)

</div>

---

## ✨ Features

- 🧠 Use Gemini AI to generate answers
- 🔍 Automatically parse Google Form structure
- 📝 Support multiple question types:
  - Short Answer / Long Answer
  - Multiple Choice / Dropdown
  - Checkbox / Linear Scale
  - Single Choice / Checkbox
  - Date / Time

## 🚀 Quick Start

### Prerequisites

```bash
pip install -r requirements.txt
```

### Basic Setup

1. Apply for [Google AI Studio](https://makersuite.google.com/app/apikey) API key

2. Create `.env` file:
```bash
GEMINI_API_KEY=your API key
```

3. Modify settings:
```python
# Modify form URL
URL = 'your Google Form URL'

# Modify personal information
PROMPT_PARTS = [
    "Name: Your Name",
    "Gender: Male/Female",
    "Phone: Your Phone",
    # ... other information
]
```

### Run the program

```bash
python ai_form.py
```

## 📖 Usage

### Custom Prompt
You can customize AI's response by modifying `PROMPT_PARTS`:
- Personal information
- Response rules and format
- Answer selection restrictions

### Program Architecture
| Function Name | Description |
|---------|------|
| `string_to_object_list()` | Parse Google Form structure |
| `objects_to_result_strings()` | Generate pre-filled URL |
| `objects_to_string()` | Convert form to AI-understandable format |
| `set_answer()` | Set answer |
| `get_form()` | Get form data |

## ⚠️ Notes

- Ensure you have a valid Gemini API key
- Do not upload the `.env` file containing API keys to public repositories
- This tool is for educational and research purposes only
- Please comply with Google Form's terms of service

## 🤝 Contributing

We welcome contributions to improve this tool:

1. Fork this project
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Improvement Directions
- Support more question types
- Improve AI accuracy
- Optimize code structure
- Add error handling mechanism

## 📄 License

This project uses MIT License - see [LICENSE](LICENSE) file

## 📢 Disclaimer

This tool is for educational and research purposes only. Users should assume all risks and comply with relevant laws and regulations.

## 📮 Contact

For any questions or suggestions:
- 🐛 [Open Issue](../../issues)
- 🔀 [Submit Pull Request](../../pulls)
- 📧 Email to [your-email@example.com]

## 🙏 Acknowledgements

- [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- [python-dotenv](https://github.com/theskumar/python-dotenv)
- [requests](https://requests.readthedocs.io/)

---

<div align="center">
Made with ❤️ by Your Name
</div>