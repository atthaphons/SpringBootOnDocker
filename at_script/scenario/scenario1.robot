*** Settings ***
Library    SeleniumLibrary
Suite Teardown    Close Browser

*** Test Cases ***
เข้าหน้าเว็บ
    1. เปิดเว็บ Springboot
    2. กรอก Username/Password    admin    1234
    3. กด login
    4. ตรวจสอบว่ามี username    admin

*** Keywords ***
1. เปิดเว็บ Springboot
    Open Browser    http://localhost:8084/pages/login/login.html    chrome
    Capture Page Screenshot
2. กรอก Username/Password
    [Arguments]    ${username}    ${password}
    Input Text    username    ${username}
    Input Text    password    ${password}
    Capture Page Screenshot
3. กด login
    Click Element    jquery:#loginButton
4. ตรวจสอบว่ามี username
    [Arguments]    ${username}
    Element Should Contain    jquery:.userinfo     ${username}
    Capture Page Screenshot