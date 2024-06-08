describe('Assertions in Web DriverIO', () => {
    
    it('First Drop down', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await browser.getTitle());
        await $("#username").setValue("rahulshettyacademy");
        await $('#password').setValue("learning");

        // var radioButton = await $$('.customradio');
        // await radioButton[1].$("input[id='usertype']").click();
        // const popup = $(".modal-content")
        // await popup.waitForDisplayed();
        // (await $("button[id='cancelBtn']")).click();
        // const Dropdown = await $("select.form-control");
        // await Dropdown.selectByAttribute('value', 'consult');
        // await browser.pause('4000');
    });

    
})
