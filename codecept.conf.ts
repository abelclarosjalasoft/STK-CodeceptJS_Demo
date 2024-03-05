import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
const directoryName = __dirname;
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      app: directoryName + '\\apk\\test_app.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'CodeceptJS-SK_Demo'
}