import { test } from '../../fixtures/pages';

test.describe('OrangeHRM Home Dashboard - Test Suite', () => {

    test('Test - Verify Profile Logout', async ({ loginPage, homePage }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();           
        await homePage.step_profileOption("Logout");
    });

    test("Test - Verify Given Menu Search Selection", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });

    //----

    test("Test - Verify Given Menu Search Selection 1", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });

    test("Test - Verify Given Menu Search Selection 2", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });

    test("Test - Verify Given Menu Search Selection 3", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });
     test("Test - Verify Given Menu Search Selection 4", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });
     test("Test - Verify Given Menu Search Selection 5", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });
     test("Test - Verify Given Menu Search Selection 6", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });
     test("Test - Verify Given Menu Search Selection 7", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });
     test("Test - Verify Given Menu Search Selection 8", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });
     test("Test - Verify Given Menu Search Selection 9", async ({ loginPage, homePage, sidePanel }) => {
        await loginPage.goto();
        await loginPage.step_enterUsername("Admin");
        await loginPage.step_enterPassword("admin123");
        await loginPage.step_clickLogin();
        await sidePanel.step_searchOption();        
        await homePage.step_profileOption("Logout");
    });

    
});