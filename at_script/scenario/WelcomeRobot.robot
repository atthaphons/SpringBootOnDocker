*** Settings ***
Library    SeleniumLibrary
*** Test Cases ***
เข้าหน้าเว็บ
    1. เปิดเว็บ Google
    2. ค้นหาคำว่า    Iphone
    3. กดค้นหา
    4. ต้องเจอคำว่า    iPhone 12 Pro.
*** Keywords ***
1. เปิดเว็บ Google
    Open Browser    https://www.google.com/    chrome
    Capture Page Screenshot
2. ค้นหาคำว่า
    [Arguments]    ${parameter}
    Input Text    q    ${parameter}
3. กดค้นหา
    Press Keys    q    ENTER
4. ต้องเจอคำว่า
    [Arguments]    ${parameter}
    Page Should Contain    ${parameter}