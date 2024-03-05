# STK-CodeceptJS_Demo
CodeceptJS Demo for Share the Knowledge 2024 

Download `apk` to test from:
https://github.com/webdriverio/native-demo-app/releases/tag/v1.0.8
and copy to folder `/apk/`

***Requirements:***
- npm / Node
- Android Studio with Android SDK and emulator
- Java Virtual Machine
- Create Virtual Device in Android Emulator
- Appium Server GUI
- Appium Inspector
- Environment Variables and PATH

***Steps to run***
1. Run `npm install`
2. Download `apk` to test from: https://github.com/webdriverio/native-demo-app/releases/tag/v1.0.8
3. Create `/apk/` folder 
4. Copy the `apk` to the folder `/apk/` folder
5. Rename the `apk` file to `test_apk.apk`
6. Start Android Emulator
7. Start Appium server
  - Host: 0.0.0.0
  - Port: 4723
8. OPTIONAL - Run Appium Inspector
  - Remote Path: /wd/hub
  - Capabilities: platformName -> Android
9. Execute tests `npx codeceptjs run --steps`  


