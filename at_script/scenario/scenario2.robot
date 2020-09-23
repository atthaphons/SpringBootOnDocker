*** Settings ***
Library    SeleniumLibrary
Library    DatabaseLibrary
Library    DateTime
Resource    ../keywords/login.robot
Resource    ../keywords/common.robot
*** Test Cases ***
Step 1 เปิดเว็บ Springboot
    login.Open Login screen
    Capture Page Screenshot
Step 2 กรอก Username/Password และกด Login
    login.Login With    admin    1234
    Capture Page Screenshot
Step 3 ตรวจสอบว่ามี username
    Login.Check Login by user    admin
    Capture Page Screenshot