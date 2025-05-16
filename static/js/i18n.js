/**
 * AutoFormAI 多語言支援
 */

// 語言定義
const i18n = {
    'zh-TW': {
        // 共用
        'langBtn': 'EN',

        // 首頁
        'appTitle': 'AutoFormAI - 自動表單填寫工具',
        'appTagline': 'AI 驅動的表單自動填寫工具',
        'helpLink': '使用說明',
        'returnHome': '返回首頁',
        'setupFormInfo': '設定表單資訊',
        'apiKeyLabel': 'Gemini API 金鑰',
        'apiKeyPlaceholder': '在此輸入您的 API 金鑰',
        'getApiKey': 'Google AI Studio',
        'apiKeyInfo': '您的 API 金鑰僅在本地使用，不會被傳送至伺服器',
        'formUrlLabel': 'Google Form URL',
        'formUrlPlaceholder': '貼上 Google Form URL 即可自動檢測表單結構',
        'formUrlInfo': '必須先檢測表單結構成功後才能生成填寫連結',
        'userInputLabel': '提供的資訊',
        'userInputPlaceholder': '請輸入您希望AI用來填寫表單的資訊...',
        'userInputInfo': '輸入您想提供給AI的任何資訊，格式不限。AI會基於這些資訊自動填寫表單。',
        'generateBtn': '生成填寫連結',
        'formStructureTitle': '表單結構',
        'fillLinkTitle': '填寫連結',
        'clickToComplete': '請點擊下方連結完成表單填寫：',
        'copyLinkBtn': '複製連結',
        'copied': '已複製!',
        'loading': 'AI 正在分析表單並生成回答...',
        'footer': 'AutoFormAI © 2025 | 透過 AI 輕鬆完成表單填寫',

        // 檢測提示
        'detecting': '正在檢測表單結構...',
        'detectSuccess': '✓ 表單結構檢測成功',
        'detectError': '❌ 表單結構檢測失敗: ',
        'detectFirst': '請先成功檢測表單結構後再生成填寫連結',
        'error': '發生錯誤: ',
        'copyFail': '複製失敗，請手動複製連結',
        'noFormStructure': '無法獲取表單結構，請確認表單 URL 是否正確',
        'invalidFormUrl': '無法解析 Google Form 結構，請確認表單 URL 是否正確',
        'invalidFormStructure': 'Google Form 結構無效',
        'cantGetForm': '無法獲取或解析表單: ',
        'directFetchFail': '直接獲取失敗，嘗試使用代理: ',
        'proxySuccess': '代理 {0}.成功獲取表單',
        'proxyNoForm': '代理 {0} 返回的內容不含表單結構',
        'proxyError': '代理返回錯誤狀態碼: {0}',
        'proxyFailed': '代理 {0} 失敗: {1}',
        'proxyException': '代理 {0} 發生錯誤: {1}',

        // API 錯誤訊息
        'apiRequestFail': 'API 請求失敗: {0}',
        'apiResponseInvalid': 'API 回應結構異常',
        'apiCallFailed': 'AI 生成答案失敗: {0}',

        // 表單結構相關
        'question': '問題',
        'type': '類型',
        'required': '是否必填',
        'title': '題目',
        'optionType': '選項類型',
        'options': '選項',
        'min': '最小為',
        'max': '最大為',

        // 使用說明頁面
        'helpTitle': '使用說明 - AutoFormAI',
        'helpTagline': '使用說明',
        'toc': '目錄',
        'introTitle': '如何使用 AutoFormAI',
        'introText': 'AutoFormAI 是一個使用 Google Gemini AI 模型自動填寫 Google Form 的工具，讓您不再需要手動填寫重複性的表單。',
        'tipTitle': '提示：',
        'introTip': '使用前請確保您已經有一個 Google 帳戶，並且有權限創建 API 金鑰。',

        // 常見問題
        'faqTitle': '常見問題',
        'reportIssue': '回報問題',
        'issueMsg': '感謝您的回饋！請將問題描述發送至 support@autoformai.example.com',

        // 使用說明頁面 - 步驟標題
        'step1Title': '獲取 Gemini API 金鑰',
        'step2Title': '指定 Google Form',
        'step3Title': '提供您的資訊',
        'step4Title': '生成填寫連結',

        // 步驟 1 內容
        'step1_1': '訪問 <a href="https://makersuite.google.com/app/apikey" target="_blank">Google AI Studio</a> 並登入您的 Google 帳戶',
        'step1_2': '點擊「Create API key」按鈕創建新的 API 金鑰',
        'step1_3': '複製生成的 API 金鑰（它看起來像這樣：AIzaSyC_...）',
        'step1_4': '在 AutoFormAI 應用中填入您的 API 金鑰',

        // 步驟 2 內容
        'step2_1': '直接粘貼 Google Form 的網址到輸入框中',
        'step2_2': '系統會自動嘗試檢測表單的結構，並在檢測成功後啟用「生成填寫連結」按鈕',
        'step2_3': '如果檢測失敗，請確認您的網址是否正確，或嘗試使用其他瀏覽器',

        // 步驟 3 內容
        'step3_1': '在文本框中輸入您希望 AI 用來填寫表單的資訊，格式不限。例如：',
        'step3_2': '您可以使用自然語言或結構化格式，AI 會盡可能理解您的意圖',
        'step3_tip': '結構化格式（例如 JSON）通常能提高 AI 理解準確性',

        // 步驟 4 內容
        'step4_1': '確認所有資訊無誤後，點擊「生成填寫連結」按鈕',
        'step4_2': '系統會顯示以下內容：',
        'step4_2_1': '表單結構 - 顯示 AI 將要回答的問題',
        'step4_2_2': '填寫連結 - 點擊此連結即可打開已預填答案的表單',
        'step4_3': '點擊「複製連結」按鈕可以方便地複製填寫連結',

        // FAQ 問題
        'faq1_q': '我的 API 金鑰安全嗎？',
        'faq1_a': '您的 API 金鑰僅用於從瀏覽器直接向 Google API 發送請求，不會被發送到任何其他服務器或儲存。所有處理都在您的本地瀏覽器中完成。',
        'faq2_q': '為什麼表單檢測會失敗？',
        'faq2_a': '由於瀏覽器的跨域安全限制，直接從 JavaScript 訪問 Google Form 內容可能會被阻止。系統會嘗試使用多種代理方法，但並非所有表單都能成功檢測。',
        'faq3_q': 'API 金鑰有使用限制嗎？',
        'faq3_a': '是的，Google Gemini API 有使用配額限制。如果您頻繁使用，可能會達到每日限制。請參考 <a href="https://ai.google.dev/docs/quotas_limits" target="_blank">Google AI 文檔</a>瞭解更多。',
        'faq4_q': '我需要安裝什麼才能使用此工具？',
        'faq4_a': '此工具是純前端應用程式，只需要一個現代網頁瀏覽器即可使用。無需安裝 Python 或 Node.js。',

        // 其他元素
        'backToTop': '回到頂部',
        'copyright': 'AutoFormAI © 2025',

        // 樣本資料
        'sampleData': `名字: Sun\n性別: 男\n電話: 0912345678\n出生: {"year": 1999,"month": 8,"day": 19}\nEmail: xxxx@gmail.com\n地址: 高雄市\n喜好: 畫畫、遊戲`,
    },
    'en': {
        // Common
        'langBtn': '中文',

        // Home page
        'appTitle': 'AutoFormAI - Automatic Form Filling Tool',
        'appTagline': 'AI-powered Form Auto-filling Tool',
        'helpLink': 'Help',
        'returnHome': 'Return to Home',
        'setupFormInfo': 'Set Up Form Information',
        'apiKeyLabel': 'Gemini API Key',
        'apiKeyPlaceholder': 'Enter your API key here',
        'getApiKey': 'Google AI Studio',
        'apiKeyInfo': 'Your API key is only used locally and won\'t be sent to any server',
        'formUrlLabel': 'Google Form URL',
        'formUrlPlaceholder': 'Paste Google Form URL to automatically detect form structure',
        'formUrlInfo': 'Form structure detection must succeed before generating a fill link',
        'userInputLabel': 'Your Information',
        'userInputPlaceholder': 'Enter information you want AI to use for form filling...',
        'userInputInfo': 'Enter any information you want to provide to the AI in any format. The AI will automatically fill the form based on this information.',
        'generateBtn': 'Generate Fill Link',
        'formStructureTitle': 'Form Structure',
        'fillLinkTitle': 'Fill Link',
        'clickToComplete': 'Click the link below to complete the form:',
        'copyLinkBtn': 'Copy Link',
        'copied': 'Copied!',
        'loading': 'AI is analyzing the form and generating answers...',
        'footer': 'AutoFormAI © 2025 | Easily complete forms with AI',

        // Detection messages
        'detecting': 'Detecting form structure...',
        'detectSuccess': '✓ Form structure detection successful',
        'detectError': '❌ Form structure detection failed: ',
        'detectFirst': 'Please successfully detect the form structure before generating a fill link',
        'error': 'Error: ',
        'copyFail': 'Copy failed, please copy the link manually',
        'noFormStructure': 'Unable to get form structure, please verify the form URL is correct',
        'invalidFormUrl': 'Unable to parse Google Form structure, please verify the form URL is correct',
        'invalidFormStructure': 'Google Form structure is invalid',
        'cantGetForm': 'Unable to get or parse form: ',
        'directFetchFail': 'Direct fetch failed, trying proxies: ',
        'proxySuccess': 'Proxy {0} successfully retrieved the form',
        'proxyNoForm': 'Content returned by proxy {0} does not contain form structure',
        'proxyError': 'Proxy returned error status code: {0}',
        'proxyFailed': 'Proxy {0} failed: {1}',
        'proxyException': 'Error occurred with proxy {0}: {1}',

        // API error messages
        'apiRequestFail': 'API request failed: {0}',
        'apiResponseInvalid': 'API response structure is abnormal',
        'apiCallFailed': 'AI answer generation failed: {0}',

        // Form structure related
        'question': 'Question',
        'type': 'Type',
        'required': 'Required',
        'title': 'Title',
        'optionType': 'Option Type',
        'options': 'Options',
        'min': 'Min',
        'max': 'Max',

        // Help page
        'helpTitle': 'Help - AutoFormAI',
        'helpTagline': 'Help',
        'toc': 'Table of Contents',
        'introTitle': 'How to Use AutoFormAI',
        'introText': 'AutoFormAI is a tool that uses Google Gemini AI model to automatically fill in Google Forms, eliminating the need to manually fill in repetitive forms.',
        'tipTitle': 'Tip:',
        'introTip': 'Before using, make sure you have a Google account and permission to create API keys.',

        // FAQ
        'faqTitle': 'Frequently Asked Questions',
        'reportIssue': 'Report an Issue',
        'issueMsg': 'Thank you for your feedback! Please send your issue description to support@autoformai.example.com',

        // Help page - Step titles
        'step1Title': 'Get Gemini API Key',
        'step2Title': 'Specify Google Form',
        'step3Title': 'Provide Your Information',
        'step4Title': 'Generate Fill Link',

        // Step 1 content
        'step1_1': 'Visit <a href="https://makersuite.google.com/app/apikey" target="_blank">Google AI Studio</a> and sign in to your Google account',
        'step1_2': 'Click the "Create API key" button to create a new API key',
        'step1_3': 'Copy the generated API key (it looks like: AIzaSyC_...)',
        'step1_4': 'Enter your API key in the AutoFormAI application',

        // Step 2 content
        'step2_1': 'Paste the Google Form URL directly into the input field',
        'step2_2': 'The system will automatically attempt to detect the form structure and enable the "Generate Fill Link" button after successful detection',
        'step2_3': 'If detection fails, please check if your URL is correct or try using a different browser',

        // Step 3 content
        'step3_1': 'Enter the information you want the AI to use to fill out the form in the text box. The format is flexible. For example:',
        'step3_2': 'You can use natural language or structured format, and the AI will understand your intent as much as possible',
        'step3_tip': 'Structured formats (like JSON) usually improve AI understanding accuracy',

        // Step 4 content
        'step4_1': 'After confirming all information is correct, click the "Generate Fill Link" button',
        'step4_2': 'The system will display the following:',
        'step4_2_1': 'Form Structure - Shows the questions the AI will answer',
        'step4_2_2': 'Fill Link - Click this link to open the form with pre-filled answers',
        'step4_3': 'Click the "Copy Link" button to easily copy the fill link',

        // FAQ questions
        'faq1_q': 'Is my API key secure?',
        'faq1_a': 'Your API key is only used to send requests directly from your browser to the Google API. It is not sent to any other servers or stored. All processing is done in your local browser.',
        'faq2_q': 'Why does form detection fail?',
        'faq2_a': 'Due to cross-domain security restrictions in browsers, directly accessing Google Form content from JavaScript may be blocked. The system will try various proxy methods, but not all forms can be successfully detected.',
        'faq3_q': 'Are there usage limits for the API key?',
        'faq3_a': 'Yes, Google Gemini API has usage quota limits. If you use it frequently, you may reach the daily limit. Please refer to the <a href="https://ai.google.dev/docs/quotas_limits" target="_blank">Google AI documentation</a> for more information.',
        'faq4_q': 'What do I need to install to use this tool?',
        'faq4_a': 'This tool is a pure frontend application that only requires a modern web browser to use. There is no need to install Python or Node.js.',

        // Other elements
        'backToTop': 'Back to Top',
        'copyright': 'AutoFormAI © 2025',

        // 樣本資料
        'sampleData': `Name: John\nGender: Male\nPhone: 0912345678\nBirth: {"year": 1999,"month": 8,"day": 19}\nEmail: xxxx@gmail.com\nAddress: New York\nHobbies: Drawing, Gaming`,
    }
};

// 預設語言 - 現在改為自動偵測瀏覽器語系
let currentLang = 'zh-TW';

/**
 * 偵測瀏覽器語系並設定初始語言
 * @returns {string} 偵測到的語言代碼
 */
function detectBrowserLanguage() {
    // 獲取瀏覽器語言設定
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();

    // 檢查是否為中文（繁體）
    if (browserLang.includes('zh-tw') || browserLang.includes('zh-hk')) {
        return 'zh-TW';
    }

    // 檢查是否為其他中文變體，以防部分瀏覽器只報告 'zh'
    if (browserLang.startsWith('zh') && !browserLang.includes('zh-cn')) {
        return 'zh-TW';
    }

    // 默認其他語言為英文
    return 'en';
}

// 先檢查本地存儲的語言設定，如果沒有則使用偵測到的瀏覽器語言
if (localStorage.getItem('autoformLang')) {
    currentLang = localStorage.getItem('autoformLang');
} else {
    currentLang = detectBrowserLanguage();
    // 儲存偵測到的語系設定
    localStorage.setItem('autoformLang', currentLang);
}

/**
 * 切換語言
 */
function toggleLanguage() {
    // 添加過渡動畫
    document.body.classList.add('language-transition');

    // 延遲執行，使動畫有機會顯示
    setTimeout(() => {
        currentLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';

        // 儲存語言設定
        localStorage.setItem('autoformLang', currentLang);

        // 應用翻譯
        applyTranslations();

        // 更新切換按鈕文本
        updateToggleButton();

        // 更新表單結構顯示（如果存在）
        updateFormStructureDisplay();

        // 更新help.html中的樣本資料
        updateHelpCodeBlock();

        // 移除過渡動畫
        setTimeout(() => {
            document.body.classList.remove('language-transition');
        }, 300);
    }, 50);

    return currentLang;
}

/**
 * 更新語言切換按鈕文本
 */
function updateToggleButton() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = getText('langBtn');
    }
}

/**
 * 獲取文本翻譯
 * @param {string} key - 文本鍵值
 * @param {Array} replacements - 要替換的值
 * @returns {string} 翻譯後的文本
 */
function getText(key, replacements = []) {
    let text = i18n[currentLang][key] || i18n['zh-TW'][key] || key;

    // 處理替換
    if (replacements.length > 0) {
        replacements.forEach((replacement, index) => {
            text = text.replace(`{${index}}`, replacement);
        });
    }

    return text;
}

/**
 * 應用翻譯到頁面元素
 */
function applyTranslations() {
    // 更新頁面標題
    document.title = getText(window.location.pathname.includes('help.html') ? 'helpTitle' : 'appTitle');

    // 更新所有帶有 data-i18n 屬性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (key) {
            // 更新元素內文
            if (!element.hasAttribute('data-i18n-attr')) {
                element.innerHTML = getText(key);
            }
            // 更新元素屬性
            else {
                const attr = element.getAttribute('data-i18n-attr');
                element.setAttribute(attr, getText(key));
            }
        }
    });

    // 更新樣本資料
    updateSampleData();

    // 更新help.html中的樣本資料
    updateHelpCodeBlock();
}

/**
 * 更新樣本資料
 */
function updateSampleData() {
    const userInput = document.getElementById('userInput');
    if (userInput) {
        // 只有當用戶沒有修改過樣本資料時才進行替換
        // 檢查是否是原始樣本資料 (中文或英文)
        const originalTextZH = i18n['zh-TW']['sampleData'].replace(/<br>/g, '\n');
        const originalTextEN = i18n['en']['sampleData'].replace(/<br>/g, '\n');
        const currentValue = userInput.value.trim();

        // 比較原始樣本資料和用戶輸入的值
        if (currentValue === originalTextZH ||
            currentValue === originalTextEN) {
            // 使用新的樣本資料
            userInput.value = getText('sampleData').replace(/<br>/g, '\n');
        }
    }

    // 更新help.html中的樣本資料
    updateHelpCodeBlock();
}

/**
 * 更新help.html中的樣本資料
 */
function updateHelpCodeBlock() {
    // 找到所有帶有data-i18n="sampleData"屬性的code-block元素
    const codeBlocks = document.querySelectorAll('.code-block[data-i18n="sampleData"]');
    if (codeBlocks.length > 0) {
        codeBlocks.forEach(block => {
            block.innerHTML = getText('sampleData');
        });
    }
}

/**
 * 更新表單結構顯示
 */
function updateFormStructureDisplay() {
    const formDataDisplay = document.getElementById('formDataDisplay');
    if (formDataDisplay && window.detectedFormData) {
        // 使用自定義事件通知 script.js 更新表單結構顯示
        const event = new CustomEvent('updateFormDisplay');
        document.dispatchEvent(event);
    }
}

// 導出為全局變數
window.i18n = {
    toggle: toggleLanguage,
    getText: getText,
    applyTranslations: applyTranslations,
    getCurrentLang: () => currentLang,
    detectBrowserLanguage: detectBrowserLanguage,
    updateHelpCodeBlock: updateHelpCodeBlock
};

// 當 DOM 加載完成後初始化翻譯
document.addEventListener('DOMContentLoaded', function () {
    // 初始化語言切換按鈕事件
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function (e) {
            e.preventDefault();
            window.i18n.toggle();
        });
    }

    // 應用初始翻譯
    updateToggleButton();
    applyTranslations();
}); 