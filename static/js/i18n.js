/**
 * AutoFormAI 多語言支援
 */

// 語言定義
const i18n = {
    'zh-TW': {
        // 共用
        'langBtn': 'EN',
        'privacy': '隱私權政策',
        'about': '關於此專案',
        'copyright': '謝上智 © 2025',
        'returnHome': '返回首頁',
        'reportIssue': '回報問題',
        'backToTop': '回到頂部',
        'issueMsg': '感謝您的回饋！請將問題描述發送至 sun055676@gmail.com',

        // 首頁
        'appTitle': 'AutoFormAI - 自動表單填寫工具',
        'appTagline': 'AI 驅動的表單自動填寫工具',
        'helpLink': '使用說明',
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
        'footer': '謝上智 © 2025 | 透過 AI 輕鬆完成表單填寫',

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
        'copyright': 'AutoFormAI © 2025',

        // 樣本資料
        'sampleData': `名字: Sun\n性別: 男\n電話: 0912345678\n出生: {"year": 1999,"month": 8,"day": 19}\nEmail: xxxx@gmail.com\n地址: 高雄市\n喜好: 畫畫、遊戲`,

        // 隱私權政策頁面
        'privacyTitle': '隱私權政策 - AutoFormAI',
        'privacyTagline': '隱私權政策',
        'privacyPolicy': '隱私權政策',
        'lastUpdated': '最後更新日期：2025 年 5 月 17 日',
        'overview': '概述',
        'welcomeText': '歡迎使用 AutoFormAI。保護您的隱私是本服務的重要原則。本隱私權政策旨在說明如何收集、使用、分享和保護您在使用本網站和服務時所提供的個人資料。',
        'agreementText': '使用本網站即表示您同意本隱私權政策中所述的做法。如果您不同意本政策的任何部分，請停止使用本網站和服務。',
        'dataCollected': '收集的資料',
        'dataTypesIntro': '本服務可能會收集以下類型的資料：',
        'personalData': '<strong>個人識別資料</strong>：當您使用本服務時，可能會要求您提供某些可識別身分的資料，包括但不限於您的名稱、電子郵件地址和與表單填寫相關的資料。',
        'usageData': '<strong>使用資料</strong>：本系統會自動收集有關您與網站互動的資料，例如您訪問的頁面、您的 IP 地址、瀏覽器類型、訪問時間以及您點擊的連結。',
        'formData': '<strong>表單資料</strong>：當您使用自動表單填寫功能時，您可能會提供用於填寫表單的資料。',
        'apiKeyData': '<strong>API 金鑰資料</strong>：您可能會提供第三方服務（如 Google Gemini API）的 API 金鑰。',
        'dataUsage': '資料的使用方式',
        'dataUsageIntro': '收集到的資料用於以下目的：',
        'dataUsage1': '提供、維護和改進服務',
        'dataUsage2': '處理和完成您的請求',
        'dataUsage3': '向您發送關於服務的通知',
        'dataUsage4': '監控網站的使用情況',
        'dataUsage5': '偵測、預防和解決技術問題',
        'dataUsage6': '根據適用法律的要求',
        'cookiesTitle': 'Cookie 與追蹤技術',
        'cookiesText1': '本網站使用 Cookie 和類似的追蹤技術來追蹤網站活動並保存某些資料。Cookie 是包含少量資料的檔案，可能包含匿名唯一識別碼。Cookie 會從網站發送到您的瀏覽器並存儲在您的設備上。',
        'cookiesText2': '使用以下類型的 Cookie：',
        'essentialCookies': '<strong>必要的 Cookie</strong>：這些對於網站的運作是必需的，不能在系統中關閉。',
        'analyticsCookies': '<strong>分析 Cookie</strong>：這些幫助了解訪問者如何與網站互動，用於改善用戶體驗。',
        'advertisingCookies': '<strong>廣告 Cookie</strong>：這些用於向您展示相關廣告。',
        'cookiesText3': '您可以通過修改瀏覽器設置來指示瀏覽器拒絕所有 cookie 或在發送 cookie 時通知您。但是，如果您不接受 cookie，您可能無法使用網站的某些部分。',
        'thirdPartyTitle': '第三方服務',
        'thirdPartyText': '本服務可能使用第三方服務來幫助運營。這些第三方服務包括：',
        'googleAnalytics': '<strong>Google Analytics</strong>：用於分析網站流量和使用情況。',
        'googleAdSense': '<strong>Google AdSense</strong>：用於在網站上顯示廣告。',
        'googleGemini': '<strong>Google Gemini API</strong>：用於處理和分析表單資料。',
        'thirdPartyPolicy': '這些第三方服務提供商有自己的隱私政策，建議您查閱這些政策以更好地了解他們如何處理您的個人資料。',
        'dataSecurity': '資料安全',
        'dataSecurityText': '本服務採取合理的安全措施來保護您的個人資料免受丟失、濫用、未經授權的訪問、披露、更改和銷毀。但是，請注意，互聯網上的數據傳輸或電子存儲不是 100% 安全的。雖然努力保護您的個人資料，但無法保證其絕對安全。',
        'dataRetention': '資料保留',
        'dataRetentionText': '本服務只會在達到本隱私權政策中列出的目的所需的時間內保留您的個人資料，除非法律要求或允許更長的保留期限。',
        'childrenPrivacy': '兒童隱私',
        'childrenPrivacyText': '本服務不針對 18 歲以下的兒童。不會故意收集 18 歲以下兒童的個人資料。如果發現收集了 18 歲以下兒童的個人資料，會立即採取措施刪除這些資料。',
        'yourRights': '您的權利',
        'yourRightsText': '根據您所在地區的隱私法律，您可能擁有以下權利：',
        'accessData': '訪問您的個人資料',
        'correctData': '更正不准確或不完整的資料',
        'deleteData': '刪除您的個人資料',
        'restrictData': '限制或反對處理您的個人資料',
        'portabilityData': '資料可攜性',
        'withdrawConsent': '撤回同意',
        'exerciseRights': '如果您想行使任何這些權利，請通過以下聯絡資料與我聯絡。',
        'policyChanges': '隱私權政策的變更',
        'policyChangesText': '本隱私權政策可能會不時更新。任何變更都會在本頁上發布，並在重大變更的情況下通過電子郵件或網站通知通知您。鼓勵您定期查看本隱私權政策以了解任何變更。',
        'contactUs': '聯絡方式',
        'contactUsText': '如果您對本隱私權政策有任何問題或疑慮，請通過以下方式與我聯絡：',
        'contactEmail': '電子郵件：sun055676@gmail.com',

        // 關於頁面
        'aboutTitle': '關於 AutoFormAI - 謝上智開發',
        'aboutTagline': '關於此專案',
        'projectBackground': '專案背景',
        'projectOrigin': 'AutoFormAI 誕生於 2025 年，源於一個簡單的想法：讓表單填寫變得智能化和高效化。在一個資訊爆炸的時代，每個人每天都面臨著填寫各種表單的需求 — 從工作調查到政府申請，從預約登記到會員註冊。',
        'developerInsight': '作為一名熱衷於人工智能和用戶體驗的開發者，我觀察到大多數人在填寫重複性表單時浪費了大量時間，且容易出錯。這促使我思考：「如果能利用 AI 技術自動化這個過程，會為用戶節省多少時間？」',
        'projectLaunch': '在經過數月的研發和測試後，AutoFormAI 正式推出，旨在利用 Google Gemini 等最先進的 AI 技術，自動化表單填寫過程，為用戶節省寶貴時間。',
        'designPrinciples': '設計理念',
        'savingTime': '節省時間',
        'savingTimeDesc': '致力於通過自動化重複性任務，為用戶每週節省數小時的時間。',
        'privacyProtection': '保護隱私',
        'privacyProtectionDesc': '設計系統時以隱私為中心，確保用戶數據安全且不會被濫用。',
        'accessibleTech': '普及科技',
        'accessibleTechDesc': '希望讓 AI 技術成為人人可用的工具，降低技術門檻。',
        'techArchitecture': '技術架構',
        'techIntro': 'AutoFormAI 基於多項創新技術建立：',
        'techGemini': '<strong>Google Gemini AI</strong>：利用最先進的自然語言處理模型理解表單內容和用戶輸入。',
        'techFormEngine': '<strong>表單分析引擎</strong>：能夠自動檢測和分析各種 Google Form 的結構。',
        'techClientProcess': '<strong>客戶端處理</strong>：所有數據處理在用戶的瀏覽器中進行，無需將敏感資訊傳輸至伺服器。',
        'techAdaptiveLearning': '<strong>自適應學習</strong>：系統會不斷優化，提高對各種表單類型的處理能力。',
        'futureProspects': '未來展望',
        'futureIntro': '展望未來，計劃擴展 AutoFormAI 的功能：',
        'futureSupport': '支持更多類型的表單平台，如 Microsoft Forms、TypeForm 等。',
        'futureTemplate': '開發表單模板庫，讓用戶可以重複使用已填寫的資訊。',
        'futureBatch': '提供批量處理功能，讓企業可以更高效地管理表單填寫任務。',
        'futureAI': '探索更多 AI 應用場景，如智能數據摘要和分析功能。',
        'contactInfo': '聯繫方式',
        'contactIntro': '非常重視用戶的反饋和建議。如果您有任何問題、建議或合作意向，請隨時與我聯繫：',
        'contactEmail': '電子郵件：sun055676@gmail.com',
        'socialMedia': '關注社群平台，獲取最新動態：',
    },
    'en': {
        // Common
        'langBtn': '中文',
        'privacy': 'Privacy Policy',
        'about': 'About This Project',
        'copyright': 'Sun Hsieh © 2025',
        'returnHome': 'Return to Home',
        'reportIssue': 'Report an Issue',
        'backToTop': 'Back to Top',
        'issueMsg': 'Thank you for your feedback! Please send your issue description to sun055676@gmail.com',

        // Home page
        'appTitle': 'AutoFormAI - Automatic Form Filling Tool',
        'appTagline': 'AI-powered Form Auto-filling Tool',
        'helpLink': 'Help',
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
        'footer': 'Sun Hsieh © 2025 | Easily complete forms with AI',

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
        'copyright': 'AutoFormAI © 2025',

        // 樣本資料
        'sampleData': `Name: John\nGender: Male\nPhone: 0912345678\nBirth: {"year": 1999,"month": 8,"day": 19}\nEmail: xxxx@gmail.com\nAddress: New York\nHobbies: Drawing, Gaming`,

        // Privacy Policy Page
        'privacyTitle': 'Privacy Policy - AutoFormAI',
        'privacyTagline': 'Privacy Policy',
        'privacyPolicy': 'Privacy Policy',
        'lastUpdated': 'Last updated: May 17, 2025',
        'overview': 'Overview',
        'welcomeText': 'Welcome to AutoFormAI. Protecting your privacy is an important principle of this service. This Privacy Policy is designed to explain how we collect, use, share, and protect your personal data when you use our website and services.',
        'agreementText': 'By using this website, you agree to the practices described in this Privacy Policy. If you do not agree to any part of this policy, please stop using our website and services.',
        'dataCollected': 'Data Collected',
        'dataTypesIntro': 'This service may collect the following types of data:',
        'personalData': '<strong>Personal identification data</strong>: When you use this service, you may be asked to provide certain identifiable data, including but not limited to your name, email address, and form-filling related data.',
        'usageData': '<strong>Usage data</strong>: The system automatically collects data about your interaction with the website, such as the pages you visit, your IP address, browser type, access time, and links you click.',
        'formData': '<strong>Form data</strong>: When you use the automatic form filling feature, you may provide data used to fill out forms.',
        'apiKeyData': '<strong>API key data</strong>: You may provide API keys for third-party services (such as Google Gemini API).',
        'dataUsage': 'How Data is Used',
        'dataUsageIntro': 'Collected data is used for the following purposes:',
        'dataUsage1': 'Providing, maintaining, and improving services',
        'dataUsage2': 'Processing and fulfilling your requests',
        'dataUsage3': 'Sending you notifications about services',
        'dataUsage4': 'Monitoring website usage',
        'dataUsage5': 'Detecting, preventing, and resolving technical issues',
        'dataUsage6': 'As required by applicable laws',
        'cookiesTitle': 'Cookies and Tracking Technologies',
        'cookiesText1': 'This website uses cookies and similar tracking technologies to track website activity and save certain data. Cookies are files containing small amounts of data, which may include an anonymous unique identifier. Cookies are sent from the website to your browser and stored on your device.',
        'cookiesText2': 'The following types of cookies are used:',
        'essentialCookies': '<strong>Essential cookies</strong>: These are necessary for the operation of the website and cannot be turned off in the system.',
        'analyticsCookies': '<strong>Analytics cookies</strong>: These help understand how visitors interact with the website, used to improve user experience.',
        'advertisingCookies': '<strong>Advertising cookies</strong>: These are used to show you relevant advertisements.',
        'cookiesText3': 'You can instruct your browser to refuse all cookies or to notify you when a cookie is being sent by modifying your browser settings. However, if you do not accept cookies, you may not be able to use some parts of the website.',
        'thirdPartyTitle': 'Third-Party Services',
        'thirdPartyText': 'This service may use third-party services to help operate. These third-party services include:',
        'googleAnalytics': '<strong>Google Analytics</strong>: Used to analyze website traffic and usage.',
        'googleAdSense': '<strong>Google AdSense</strong>: Used to display advertisements on the website.',
        'googleGemini': '<strong>Google Gemini API</strong>: Used to process and analyze form data.',
        'thirdPartyPolicy': 'These third-party service providers have their own privacy policies, and it is recommended that you review these policies to better understand how they handle your personal data.',
        'dataSecurity': 'Data Security',
        'dataSecurityText': 'This service takes reasonable security measures to protect your personal data from loss, misuse, unauthorized access, disclosure, alteration, and destruction. However, please note that data transmission or electronic storage over the Internet is not 100% secure. While efforts are made to protect your personal data, absolute security cannot be guaranteed.',
        'dataRetention': 'Data Retention',
        'dataRetentionText': 'This service will only retain your personal data for as long as necessary to fulfill the purposes listed in this Privacy Policy, unless a longer retention period is required or permitted by law.',
        'childrenPrivacy': 'Children\'s Privacy',
        'childrenPrivacyText': 'This service is not targeted at children under 18 years of age. Personal data of children under 18 years of age will not be knowingly collected. If it is discovered that personal data of children under 18 years of age has been collected, steps will be taken immediately to delete such data.',
        'yourRights': 'Your Rights',
        'yourRightsText': 'Depending on your region\'s privacy laws, you may have the following rights:',
        'accessData': 'Access your personal data',
        'correctData': 'Correct inaccurate or incomplete data',
        'deleteData': 'Delete your personal data',
        'restrictData': 'Restrict or object to the processing of your personal data',
        'portabilityData': 'Data portability',
        'withdrawConsent': 'Withdraw consent',
        'exerciseRights': 'If you wish to exercise any of these rights, please contact me using the contact information below.',
        'policyChanges': 'Changes to This Privacy Policy',
        'policyChangesText': 'This Privacy Policy may be updated from time to time. Any changes will be posted on this page, and you will be notified via email or website notification in case of significant changes. You are encouraged to regularly review this Privacy Policy to stay informed of any changes.',
        'contactUs': 'Contact Information',
        'contactUsText': 'If you have any questions or concerns about this Privacy Policy, please contact me via:',
        'contactEmail': 'Email: sun055676@gmail.com',

        // About Page
        'aboutTitle': 'About AutoFormAI - Developed by Sun Hsieh',
        'aboutTagline': 'About This Project',
        'projectBackground': 'Project Background',
        'projectOrigin': 'AutoFormAI was born in 2025, stemming from a simple idea: to make form filling smart and efficient. In an era of information explosion, everyone faces the need to fill out various forms daily — from work surveys to government applications, from appointment registrations to membership sign-ups.',
        'developerInsight': 'As a developer passionate about artificial intelligence and user experience, I observed that most people waste a lot of time filling out repetitive forms and are prone to errors. This prompted me to think: "How much time could be saved for users if AI technology could automate this process?"',
        'projectLaunch': 'After months of research and testing, AutoFormAI was officially launched, aiming to use advanced AI technologies like Google Gemini to automate the form filling process and save valuable time for users.',
        'designPrinciples': 'Design Principles',
        'savingTime': 'Save Time',
        'savingTimeDesc': 'Committed to saving users several hours per week by automating repetitive tasks.',
        'privacyProtection': 'Protect Privacy',
        'privacyProtectionDesc': 'Designed with privacy at the center, ensuring user data is secure and not misused.',
        'accessibleTech': 'Accessible Technology',
        'accessibleTechDesc': 'Aiming to make AI technology accessible to everyone by lowering technical barriers.',
        'techArchitecture': 'Technical Architecture',
        'techIntro': 'AutoFormAI is built on several innovative technologies:',
        'techGemini': '<strong>Google Gemini AI</strong>: Utilizing the most advanced natural language processing models to understand form content and user input.',
        'techFormEngine': '<strong>Form Analysis Engine</strong>: Capable of automatically detecting and analyzing the structure of various Google Forms.',
        'techClientProcess': '<strong>Client-side Processing</strong>: All data processing is done in the user\'s browser, eliminating the need to transmit sensitive information to servers.',
        'techAdaptiveLearning': '<strong>Adaptive Learning</strong>: The system continuously optimizes to improve its ability to handle various form types.',
        'futureProspects': 'Future Prospects',
        'futureIntro': 'Looking ahead, there are plans to expand AutoFormAI\'s features:',
        'futureSupport': 'Support more types of form platforms, such as Microsoft Forms, TypeForm, etc.',
        'futureTemplate': 'Develop a form template library allowing users to reuse previously filled information.',
        'futureBatch': 'Provide batch processing capabilities for organizations to manage form filling tasks more efficiently.',
        'futureAI': 'Explore more AI application scenarios, such as intelligent data summarization and analysis functions.',
        'contactInfo': 'Contact Information',
        'contactIntro': 'User feedback and suggestions are highly valued. If you have any questions, suggestions, or cooperation intentions, please feel free to contact me:',
        'contactEmail': 'Email: sun055676@gmail.com',
        'socialMedia': 'Follow social platforms for the latest updates:',
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