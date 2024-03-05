Feature('home');

Scenario('Sign up new user',  ({ I }) => {
    I.wait(5);
    I.see('Demo app for the appium-boilerplate')
    I.tap('//android.view.View[@content-desc="Login"]')
    I.wait(5);
    I.saveScreenshot('LoginScreen.png')
    I.fillField('//android.widget.EditText[@content-desc="input-email"]','user123@mail.com')
    I.fillField('//android.widget.EditText[@content-desc="input-password"]','password')
    I.tap('//android.view.ViewGroup[@content-desc="button-LOGIN"]')
    I.wait(5);
    I.saveScreenshot('SuccessLoggedIn.png')
});
