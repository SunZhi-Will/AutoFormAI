document.addEventListener('DOMContentLoaded', function () {
    // 載入語言翻譯
    const i18n = window.i18n;

    // 常數定義
    const SECTION_TYPE_ZH = ["簡答", "詳答", "選擇題", "下拉式選單", "核取方塊", "線性刻度", "標題", "單選方格/核取方格", "區段", "日期", "時間", "圖片", "12", "檔案"];
    const SECTION_TYPE_EN = ["Short answer", "Paragraph", "Multiple choice", "Dropdown", "Checkboxes", "Linear scale", "Title", "Radio/Checkbox grid", "Section", "Date", "Time", "Image", "12", "File"];

    const REQUIRED_TYPE_ZH = ["非必填", "必填"];
    const REQUIRED_TYPE_EN = ["Optional", "Required"];

    const SELECTION_TYPE_ZH = ["單選方格", "核取方格"];
    const SELECTION_TYPE_EN = ["Radio grid", "Checkbox grid"];

    // 根據當前語言獲取正確的字符串
    const getSectionType = (index) => {
        return i18n.getCurrentLang() === 'zh-TW' ? SECTION_TYPE_ZH[index] : SECTION_TYPE_EN[index];
    };

    const getRequiredType = (index) => {
        return i18n.getCurrentLang() === 'zh-TW' ? REQUIRED_TYPE_ZH[index] : REQUIRED_TYPE_EN[index];
    };

    const getSelectionType = (index) => {
        return i18n.getCurrentLang() === 'zh-TW' ? SELECTION_TYPE_ZH[index] : SELECTION_TYPE_EN[index];
    };

    // 獲取DOM元素
    const form = document.getElementById('autoFormSettings');
    const apiKeyInput = document.getElementById('apiKey');
    const formUrlInput = document.getElementById('formUrl');
    const userInputTextarea = document.getElementById('userInput');
    const formDataContainer = document.getElementById('formDataContainer');
    const formDataDisplay = document.getElementById('formDataDisplay');
    const resultContainer = document.getElementById('resultContainer');
    const formFillLink = document.getElementById('formFillLink');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const generateBtn = document.getElementById('generateBtn');

    // 將檢測到的表單結構設為全局變數，以便在語言切換時使用
    window.detectedFormData = null;

    // 初始化樣本資料
    userInputTextarea.value = i18n.getText('sampleData');

    // 監聽語言切換後的表單結構更新事件
    document.addEventListener('updateFormDisplay', function () {
        if (window.detectedFormData && formDataDisplay) {
            formDataDisplay.textContent = objectsToString(window.detectedFormData);
            // 如果表單結構容器是隱藏的，則顯示它
            if (formDataContainer.classList.contains('hidden')) {
                formDataContainer.classList.remove('hidden');
            }
        }
    });

    // 用於存儲已檢測到的表單結構
    let detectedFormData = null;
    let detectedFormUrl = '';

    // 自動檢測表單結構 (change 事件)
    formUrlInput.addEventListener('change', detectFormStructure);

    // 監聽貼上事件
    formUrlInput.addEventListener('paste', function (e) {
        // 等待瀏覽器完成貼上
        setTimeout(detectFormStructure, 100);
    });

    // 監聽按鍵事件，當用戶按下 Enter 時觸發檢測
    formUrlInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // 防止表單提交
            detectFormStructure();
        }
    });

    // 檢測表單結構函數
    async function detectFormStructure() {
        const url = formUrlInput.value.trim();
        if (!url || url === '') return;

        // 如果已經有檢測的結果且 URL 沒變，則跳過
        if (detectedFormUrl === url && detectedFormData) {
            return;
        }

        // 重置之前的檢測結果
        detectedFormData = null;
        detectedFormUrl = '';
        generateBtn.disabled = true;

        // 移除之前的提示信息
        const previousMessages = document.querySelectorAll('.success-message, .error-message, .detection-indicator');
        previousMessages.forEach(msg => msg.remove());

        // 顯示載入動畫
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'detection-indicator';
        loadingIndicator.innerHTML = `<div class="mini-spinner"></div><div class="detection-message">${i18n.getText('detecting')}</div>`;
        formUrlInput.parentNode.appendChild(loadingIndicator);

        try {
            // 嘗試獲取表單結構
            detectedFormData = await getGoogleFormFromUrl(url);
            detectedFormUrl = url;

            // 同時更新全局變數
            window.detectedFormData = detectedFormData;

            // 移除載入指示器
            loadingIndicator.remove();

            // 在 URL 輸入框下方顯示成功訊息
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = i18n.getText('detectSuccess');
            formUrlInput.parentNode.appendChild(successMessage);

            // 顯示表單結構
            formDataDisplay.textContent = objectsToString(detectedFormData);
            formDataContainer.classList.remove('hidden');

            // 啟用生成按鈕
            generateBtn.disabled = false;

            // 自動滾動到表單結構區域
            formDataContainer.scrollIntoView({ behavior: 'smooth' });

            // 設定 5 秒後移除成功訊息
            setTimeout(() => {
                if (successMessage.parentNode) {
                    successMessage.remove();
                }
            }, 5000);

        } catch (error) {
            console.error('檢測表單結構失敗:', error);

            // 移除載入指示器
            loadingIndicator.remove();

            // 顯示錯誤訊息
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = `${i18n.getText('detectError')}${error.message}`;
            formUrlInput.parentNode.appendChild(errorMessage);

            // 設定 10 秒後移除錯誤訊息
            setTimeout(() => {
                if (errorMessage.parentNode) {
                    errorMessage.remove();
                }
            }, 10000);
        }
    }

    // 表單提交處理
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // 如果沒有檢測到有效表單結構，阻止提交
        if (!detectedFormData) {
            alert(i18n.getText('detectFirst'));
            return;
        }

        // 顯示載入動畫
        loadingIndicator.classList.remove('hidden');
        resultContainer.classList.add('hidden');

        // 如果表單結構已經顯示，不要隱藏它
        if (!formDataContainer.classList.contains('hidden')) {
            formDataContainer.classList.remove('hidden');
        }

        // 獲取 API 金鑰和用戶輸入
        const apiKey = apiKeyInput.value;
        const userInput = userInputTextarea.value;

        try {
            // 使用已檢測到的表單結構
            const formData = detectedFormData;
            const formUrl = detectedFormUrl;

            // 準備提示詞
            const formString = objectsToString(formData);
            const promptParts = generatePromptParts(userInput, formString);

            // 呼叫 Gemini API
            const aiAnswers = await callGeminiApi(apiKey, promptParts);

            // 設定答案到表單結構
            setAnswers(formData, aiAnswers);

            // 生成填寫連結
            const fillUrl = objectsToResultStrings(formUrl, formData);

            // 顯示結果
            formFillLink.href = fillUrl;
            formFillLink.textContent = fillUrl;
            resultContainer.classList.remove('hidden');

        } catch (error) {
            console.error('錯誤:', error);
            alert(`${i18n.getText('error')}${error.message}`);
        } finally {
            // 隱藏載入動畫
            loadingIndicator.classList.add('hidden');
        }
    });

    // 複製連結按鈕功能
    copyLinkBtn.addEventListener('click', function () {
        const linkText = formFillLink.href;

        // 使用現代 Clipboard API
        if (navigator.clipboard) {
            navigator.clipboard.writeText(linkText)
                .then(() => {
                    // 臨時變更按鈕文字表示成功
                    const originalText = copyLinkBtn.textContent;
                    copyLinkBtn.textContent = i18n.getText('copied');
                    setTimeout(() => {
                        copyLinkBtn.textContent = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('複製失敗:', err);
                    alert(i18n.getText('copyFail'));
                });
        } else {
            // 備用方法 (較舊的瀏覽器)
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = linkText;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            const originalText = copyLinkBtn.textContent;
            copyLinkBtn.textContent = i18n.getText('copied');
            setTimeout(() => {
                copyLinkBtn.textContent = originalText;
            }, 2000);
        }
    });

    /**
     * 從 URL 獲取 Google Form 結構
     * @param {string} url - Google Form URL
     * @returns {Promise<Array>} - 表單結構
     */
    async function getGoogleFormFromUrl(url) {
        try {
            // 使用瀏覽器原生 fetch 先嘗試，這在本地開發時可能不起作用但值得一試
            try {
                const directResponse = await fetch(url, {
                    mode: 'no-cors',
                    credentials: 'omit',
                    cache: 'no-cache'
                });
                if (directResponse.type !== 'opaque') {
                    const html = await directResponse.text();
                    if (html && html.includes('FB_PUBLIC_LOAD_DATA_')) {
                        return parseGoogleFormHtml(html);
                    }
                }
            } catch (directError) {
                console.warn(i18n.getText('directFetchFail', [directError]));
            }

            // 嘗試幾個不同的 CORS Proxy
            const corsProxies = [
                'https://api.allorigins.win/raw?url=',
                'https://corsproxy.io/?',
                'https://thingproxy.freeboard.io/fetch/',
                'https://api.codetabs.com/v1/proxy?quest='
            ];

            let html = null;
            let lastError = null;

            // 逐一嘗試不同的 proxy
            for (const proxy of corsProxies) {
                try {
                    let requestUrl = proxy;

                    // 對於不同的代理可能需要不同的 URL 編碼方式
                    if (proxy.includes('?url=') || proxy.includes('?quest=')) {
                        requestUrl += encodeURIComponent(url);
                    } else {
                        requestUrl += url;
                    }

                    console.log(`嘗試使用代理: ${proxy} 獲取表單...`);
                    const response = await fetch(requestUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/html',
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        cache: 'no-cache'
                    });

                    if (response.ok) {
                        html = await response.text();
                        if (html && html.includes('FB_PUBLIC_LOAD_DATA_')) {
                            console.log(i18n.getText('proxySuccess', [proxy]));
                            break; // 成功獲取，跳出循環
                        } else {
                            console.warn(i18n.getText('proxyNoForm', [proxy]));
                            lastError = new Error(i18n.getText('proxyNoForm', [proxy]));
                        }
                    } else {
                        lastError = new Error(i18n.getText('proxyError', [response.status]));
                        console.warn(i18n.getText('proxyFailed', [proxy, response.status]));
                    }
                } catch (proxyError) {
                    console.warn(i18n.getText('proxyException', [proxy, proxyError.message]));
                    lastError = proxyError;
                }
            }

            // 如果所有代理都失敗
            if (!html || !html.includes('FB_PUBLIC_LOAD_DATA_')) {
                throw new Error(i18n.getText('noFormStructure'));
            }

            return parseGoogleFormHtml(html);

        } catch (error) {
            console.error('獲取表單結構失敗:', error);
            throw new Error(i18n.getText('cantGetForm') + error.message);
        }
    }

    /**
     * 解析 Google Form HTML
     * @param {string} html - 表單 HTML 文本
     * @returns {Array} - 表單結構
     */
    function parseGoogleFormHtml(html) {
        // 使用正則表達式提取 JS 常量
        const jsConstantsMatch = html.match(/FB_PUBLIC_LOAD_DATA_.*?=(.*?);<\/script>/s);

        if (!jsConstantsMatch || !jsConstantsMatch[1]) {
            throw new Error(i18n.getText('invalidFormUrl'));
        }

        const formData = JSON.parse(jsConstantsMatch[1]);
        return stringToObjectList(formData);
    }

    /**
     * 字串轉題目列表
     * @param {Array} array - Google Form 數據
     * @returns {Array} - 結構化的題目列表
     */
    function stringToObjectList(array) {
        const objects = [];

        // 確保正確的結構
        if (!array || !array[1] || !array[1][1]) {
            throw new Error(i18n.getText('invalidFormStructure'));
        }

        for (const section of array[1][1]) {
            if (section[4]) {
                const type = section[3];
                const object = {
                    'title': section[1],
                    'type': type,
                    'questions': []
                };

                for (const tmpe_section of section[4]) {
                    const question = {
                        'entry_id': tmpe_section[0],
                        'required': tmpe_section[2]
                    };

                    if (type === 2 || type === 3 || type === 4) {
                        question['options'] = tmpe_section[1].map(item => item[0]);
                    } else if (type === 5) {
                        question['options'] = tmpe_section[1].map(item => item[0]);
                        question['min'] = tmpe_section[3][0];
                        question['max'] = tmpe_section[3][1];
                    } else if (type === 7) {
                        question['selection_type'] = tmpe_section[11][0];
                        question['columns'] = tmpe_section[3][0];
                        question['options'] = tmpe_section[1].map(item => item[0]);
                    }

                    object.questions.push(question);
                }

                objects.push(object);
            }
        }

        return objects;
    }

    /**
     * 生成 AI 提示詞
     * @param {string} userInput - 使用者輸入的文本
     * @param {string} formString - 表單問題字串
     * @returns {Array} - 提示詞陣列
     */
    function generatePromptParts(userInput, formString) {
        // 將用戶輸入文本分割成行並作為提示詞
        const userInputLines = userInput.split('\n').filter(line => line.trim() !== '');

        // 添加默認的指示詞
        const instructionPrompts = [
            "JSON不用展開",
            "回答從選項中，選擇答案，如果沒有則回答\"\"",
            "回答順序必須跟問題順序一樣",
            "回答不出來或不知道則回答None",
            "回答所有題目",
            "從選項中回答我答案就好，如果沒有則無",
            "按照順序回答",
            "陣列範例格式 [\"\", \"\", \"\"]",
            "對我的規範，根據您提供的內容：只回答問題中提供的選項...",
            "日期用這個格式 {\"year\": ,\"month\": ,\"day\": }"
        ];

        const promptParts = [...userInputLines, ...instructionPrompts];

        // 添加表單問題和回答格式指示
        promptParts.push(formString + "\n用陣列JSON格式回答所有問題");

        return promptParts;
    }

    /**
     * 呼叫 Gemini API
     * @param {string} apiKey - Gemini API 金鑰
     * @param {Array} promptParts - 提示詞陣列
     * @returns {Promise<Array>} - AI 生成的答案
     */
    async function callGeminiApi(apiKey, promptParts) {
        try {
            // 直接使用 Fetch API 請求 Gemini API
            const MODEL_ID = "gemini-2.5-flash-preview-04-17"; // 可以根據需要更改為其他模型如 gemini-2.5-flash-preview-04-17 等
            const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${apiKey}`;

            // 構建請求payload
            const requestPayload = {
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: promptParts.join('\n')
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.9,
                    topP: 1,
                    topK: 1,
                    maxOutputTokens: 2048,
                    responseMimeType: "application/json"
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            };

            // 發送請求
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestPayload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(i18n.getText('apiRequestFail', [errorData.error?.message || response.statusText]));
            }

            const data = await response.json();

            // 提取生成的文本
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
                throw new Error(i18n.getText('apiResponseInvalid'));
            }

            const generatedText = data.candidates[0].content.parts[0].text;

            // 解析 JSON 回答
            return JSON.parse(generatedText);

        } catch (error) {
            console.error('Gemini API 呼叫失敗:', error);
            throw new Error(i18n.getText('apiCallFailed', [error.message]));
        }
    }

    /**
     * 將 objects 列表轉換為字符串顯示
     * @param {Array} list - 表單結構對象列表
     * @returns {string} - 格式化後的字符串
     */
    function objectsToString(list) {
        let result = '';
        const currentLang = i18n.getCurrentLang();
        const questionText = i18n.getText('question');
        const typeText = i18n.getText('type');
        const requiredText = i18n.getText('required');
        const titleText = i18n.getText('title');
        const optionTypeText = i18n.getText('optionType');
        const optionsText = i18n.getText('options');
        const minText = i18n.getText('min');
        const maxText = i18n.getText('max');

        for (let i = 0; i < list.length; i++) {
            const ob = list[i];
            const type = ob.type;

            for (const question of ob.questions) {
                let text = `${questionText}:${ob.title}`;
                text += `\n${typeText}:${getSectionType(ob.type)}`;
                text += `\n${requiredText}:${getRequiredType(question.required)}`;

                if (type === 2 || type === 3 || type === 4) {
                    text += `\n${optionsText}:${JSON.stringify(question.options)}`;
                } else if (type === 5) {
                    text += `\n${optionsText}:${JSON.stringify(question.options)}`;
                    text += `\n${minText}:${question.min}`;
                    text += `\n${maxText}:${question.max}`;
                } else if (type === 7) {
                    text += `\n${titleText}:${question.columns}`;
                    text += `\n${optionTypeText}:${getSelectionType(question.selection_type)}`;
                    text += `\n${optionsText}:${JSON.stringify(question.options)}`;
                }

                result += `${text}\n\n`;
            }
        }

        return result;
    }

    /**
     * 設定答案到表單結構
     * @param {Array} topicList - 表單結構
     * @param {Array} answerList - 答案列表
     */
    function setAnswers(topicList, answerList) {
        let answerIndex = 0;

        for (const ob of topicList) {
            for (const question of ob.questions) {
                if (answerIndex < answerList.length) {
                    question.value = answerList[answerIndex];
                    answerIndex++;
                }
            }
        }
    }

    /**
     * 題目列表轉作答參數
     * @param {string} url - 表單 URL
     * @param {Array} objects - 表單結構
     * @returns {string} - 含答案的表單 URL
     */
    function objectsToResultStrings(url, objects) {
        const resultStrings = [];

        for (const ob of objects) {
            for (const question of ob.questions) {
                if (ob.type === 9) { // 日期題型
                    const valueObject = question.value;
                    if (valueObject && typeof valueObject === 'object') {
                        if ('year' in valueObject && valueObject.year) {
                            resultStrings.push(`entry.${question.entry_id}_year=${valueObject.year}`);
                        }
                        if ('month' in valueObject && valueObject.month) {
                            resultStrings.push(`entry.${question.entry_id}_month=${valueObject.month}`);
                        }
                        if ('day' in valueObject && valueObject.day) {
                            resultStrings.push(`entry.${question.entry_id}_day=${valueObject.day}`);
                        }
                    }
                } else if (ob.type === 10) { // 時間題型
                    const valueObject = question.value;
                    if (valueObject && typeof valueObject === 'object') {
                        if ('hour' in valueObject && valueObject.hour) {
                            resultStrings.push(`entry.${question.entry_id}_hour=${valueObject.hour}`);
                        }
                        if ('minute' in valueObject && valueObject.minute) {
                            resultStrings.push(`entry.${question.entry_id}_minute=${valueObject.minute}`);
                        }
                    }
                } else { // 其他一般題型
                    if ('value' in question && question.value) {
                        if (Array.isArray(question.value)) {
                            for (const value of question.value) {
                                if (value) {
                                    resultStrings.push(`entry.${question.entry_id}=${encodeURIComponent(value)}`);
                                }
                            }
                        } else if (question.value) {
                            resultStrings.push(`entry.${question.entry_id}=${encodeURIComponent(question.value)}`);
                        }
                    }
                }
            }
        }

        // 組合 URL
        const queryString = resultStrings.join('&');
        return url + (url.includes('?') ? '&' : '?') + queryString;
    }
}); 