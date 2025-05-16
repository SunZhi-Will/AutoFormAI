import os
from dotenv import load_dotenv
import requests
import re
import json
import google.generativeai as genai

# 載入環境變數
load_dotenv()

# 設定Google Form URL
URL = 'https://docs.google.com/forms/d/e/1FAIpQLScuPmKJ0tP8_3bXYRsXbtITNXPJ3rON4RK99u8C9nWCm6-rlA/viewform'

# 設定提示詞
PROMPT_PARTS = [
    "名字: Sun",
    "性別: 男",
    "電話: 0912345678",
    "出生: {\"year\": 1999,\"month\": 8,\"day\": 19}",
    "Email: xxxx@gmail.com", 
    "地址: 高雄市",
    "喜好: 畫畫、遊戲",
    "JSON不用展開",
    "回答從選項中，選擇答案，如果沒有則回答\"\"",
    "回答順序必須跟問題順序一樣",
    "回答不出來或不知道則回答None",
    "回答所有題目",
    "從選項中回答我答案就好，如果沒有則無",
    "按照順序回答",
    "陣列範例格式 [\"\", \"\", \"\"]",
    "對我的規範，根據您提供的內容：只回答問題中提供的選項...", # 原有的完整規範
    "日期用這個格式 {\"year\": ,\"month\": ,\"day\": }"
]

SECTION_TYPE = ["簡答","詳答","選擇題","下拉式選單","核取方塊","線性刻度","標題","單選方格/核取方格","區段","日期","時間","圖片","12","檔案"]
REQUIRED_TYPE = ["非必填","必填"]
SELECTION_TYPE = ["單選方格","核取方格"]

# 字串轉題目列表
def string_to_object_list(js_constant):
    array = json.loads(js_constant)

    objects = []
    for section in array[1][1]:
        if section[4]:
            type = section[3]
            object = {
                'title': section[1],
                'type': type,
            }
            question_list = []
            for tmpe_section in section[4]:
                question = {}
                tmpe_question = tmpe_section
                question['entry_id'] = tmpe_question[0]
                question['required'] = tmpe_question[2]

                if type == 2 or type == 3 or type == 4:
                    question['options'] = [sub_array[0] for sub_array in tmpe_question[1]]
                elif type == 5:
                    question['options'] = [sub_array[0] for sub_array in tmpe_question[1]]
                    question['min'] = tmpe_question[3][0]
                    question['max'] = tmpe_question[3][1]
                elif type == 7:
                    question['selection_type'] = tmpe_question[11][0]
                    question['columns'] = tmpe_question[3][0]
                    question['options'] = [sub_array[0] for sub_array in tmpe_question[1]]
                    
                question_list.append(question)

            object['questions'] = question_list
            objects.append(object)
            
            # print(section)
            # print(object)
            # print()
    return objects

# 題目列表 轉 作答參數
def objects_to_result_strings(url, objects):
    result_strings = []
    for ob in objects:
        for question in ob['questions']:
            if ob['type'] == 9:
                value_object = question['value']
                if 'year' in value_object and value_object['year']:
                    result_strings.append(f"entry.{question['entry_id']}_year={value_object['year']}")
                if 'month' in value_object and value_object['month']:
                    result_strings.append(f"entry.{question['entry_id']}_month={value_object['month']}")
                if 'day' in value_object and value_object['day']:
                    result_strings.append(f"entry.{question['entry_id']}_day={value_object['day']}")
            elif ob['type'] == 10:
                value_object = question['value']
                if 'hour' in value_object and value_object['hour']:
                    result_strings.append(f"entry.{question['entry_id']}_hour={value_object['hour']}")
                if 'minute' in value_object and value_object['minute']:
                    result_strings.append(f"entry.{question['entry_id']}_minute={value_object['minute']}")
            else:
                if 'value' in question and question['value']:
                    if type(question['value']) == list:
                        for value in question['value']:
                            result_strings.append(f"entry.{question['entry_id']}={value}")
                    else:
                        result_strings.append(f"entry.{question['entry_id']}={question['value']}")

    result = "&".join(result_strings)
    result = url + "?"+result
    return result

# 把物件變成文字問題，方便去問AI
def objects_to_string(list):
    string_list = []
    for ob in list:
        type = ob['type']
        for question in ob['questions']:
            text = f"問題:{ob['title']}"
            text += f"\n類型:{SECTION_TYPE[ob['type']]}"
            text += f"\n是否必填:{REQUIRED_TYPE[question['required']]}"

            if type == 2 or type == 3 or type == 4:
                text += f"\n選項:{question['options']}"
            elif type == 5:
                text += f"\選項:{question['options']}"
                text += f"\n最小為:{question['min']}"
                text += f"\n最大為:{question['max']}"
            elif type == 7:
                text += f"\n題目:{question['columns']}"
                text += f"\n選項類型:{SELECTION_TYPE[question['selection_type']]}"
                text += f"\選項:{question['options']}"
            string_list.append(text)
    return "\n\n".join(string_list)
            

# 陣列作答題目
def set_answer(topic_list, answer_list):
    for ob in topic_list:
        for question in ob['questions']:
            answer = answer_list.pop(0)
            question['value'] = answer


# 獲取Google Form
def get_form(url):
    response = requests.get(url)

    # 检查是否成功获取网页内容
    if response.status_code == 200:
        # 使用正则表达式提取JS常量
        js_constants = re.findall(r'FB_PUBLIC_LOAD_DATA_.*?=(.*?);', response.text)

        if js_constants:
            # 输出提取到的JS常量
            for js_constant in js_constants:
                list = string_to_object_list(js_constant)
                return list
        else:
            print("No FB_PUBLIC_LOAD_DATA_ JS constants found on the page.")
    else:
        print("Failed to retrieve the webpage. Status code:", response.status_code)


def main():
    # 從環境變數獲取API金鑰
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key:
        raise ValueError("未設定GEMINI_API_KEY環境變數")

    genai.configure(api_key=api_key)

    # 設定模型配置
    generation_config = {
        "temperature": 0.9,
        "top_p": 1,
        "top_k": 1,
        "max_output_tokens": 2048,
    }

    safety_settings = [
        {
            "category": "HARM_CATEGORY_HARASSMENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_HATE_SPEECH",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
            "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
            "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
    ]

    model = genai.GenerativeModel(
        model_name="gemini-2.5-flash-preview-04-17",
        generation_config=generation_config,
        safety_settings=safety_settings
    )

    form = get_form(URL)
    form_string = objects_to_string(form)
    
    # 將form_string添加到prompt_parts
    prompt_parts = PROMPT_PARTS + [form_string + "\n用陣列JSON格式回答所有問題"]
    
    print("\n" + form_string + "\n")
    response = model.generate_content(prompt_parts)
    print(response.text)
    
    parsed_data = json.loads(response.text)
    set_answer(form, parsed_data)
    print("Google Form自動填寫網址：\n" + objects_to_result_strings(URL, form))

if __name__ == "__main__":
    main()