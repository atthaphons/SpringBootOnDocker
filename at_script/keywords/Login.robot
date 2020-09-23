*** Setting ***
Library    SeleniumLibrary

***Keywords***
Open Login screen 
    Open Browser    ${URL}    ${BROWSER}    options=add_argument("--no-sandbox"); add_argument("--disable-dev-shm-usage"); add_argument("--ignore-certificate-errors"); add_argument("--incognito") 
    Run Keyword If    '${BROWSER}'=='chrome'    Set Window Size    1920    1080    ELSE    Set Window Size    1920    1080
    Set Window Position    0    0
Login With
    [Arguments]    ${userName}    ${password}
    Enter Username    ${userName}
    Enter Password    ${password}
    Click Login
Enter Username
    [Arguments]    ${value}
    Input Text    jquery:#loginForm [name="username"]    ${value}
Enter Password
    [Arguments]    ${value}
    Input Password    jquery:#loginForm [name="password"]    ${value}
Click Login
    Click Element    xpath://*[@id="loginButton"]
Check Login by user
    [Arguments]    ${username}
    Element Should Contain    jquery:.userinfo     ${username}
    Capture Page Screenshot