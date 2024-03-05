Feature('home');

Scenario('Verify Home Page loads',  ({ I }) => {
    I.wait(5);
    I.saveScreenshot('home.png')
    I.see('Demo app for the appium-boilerplate')
});
