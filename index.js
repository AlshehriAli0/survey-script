import puppeteer from "puppeteer";

// here you input your own credentials
const id = "your_id_here"
const password = "your_password_here"

// initialize
const browser = await puppeteer.launch({ headless: false }); 
const page = await browser.newPage();
const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));



await page.goto('https://estibana.iau.edu.sa/', { waitUntil: 'load' });

//  sign in flow
await page.type('#userNameInput', id )
await page.type('#passwordInput', password )
await page.click('#submitButton')

await page.waitForNavigation()

console.log("Sign in successful")

// subject
while (true) {

try{
    await delay(2000)
    await page.click("#cphMainContent_gvCesSurveysToFill_lbnCourseName_0")
    await page.waitForNavigation()

    for (let i = 1; i <12 ; i++ ){

        let inputNum
        if (i <10) {
            inputNum = "0" + i
        } else {
            inputNum = i
        }

        // Here you choose input value
        await page.type(`input[name="ctl00$cphMainContent$txtLikert_${inputNum}"]`, "3") // here you can change the rating
        
    }

    await page.click("#a_next")
    await delay(1000);


    for (let i = 12; i <17 ; i++ ){
        console.log(i)
        // Here you choose input value
        await page.type(`input[name="ctl00$cphMainContent$txtLikert_${i}"]`, "3") // here you can change the rating
        
    }

    // page 2
    await page.type('textarea[name="ctl00$cphMainContent$commentsLike"]', "Nothing") // here you can write any feedback
    await page.type('textarea[name="ctl00$cphMainContent$commentsDislike"]', "Nothing")
    await page.type('textarea[name="ctl00$cphMainContent$commentsSuggest"]', "Nothing")

    await page.click("#cphMainContent_lbnSubmitCES")
    await page.waitForNavigation()

    console.log("submit successful") 


}   catch (err){
    console.log("no subjects to rate going to instructers")
    break;
    }

}

// teacher rating
while (true) {

try{
    await delay(2000)
    await page.click("#cphMainContent_gvSSLSSurveysToFill_lbnTeacher_0")
    await page.waitForNavigation()

    for (let i = 1; i <12 ; i++ ){

        let inputNum
        if (i <10) {
            inputNum = "0" + i
        } else {
            inputNum = i
        }

        // Here you choose input value
        await page.type(`input[name="ctl00$cphMainContent$txtLikert_${inputNum}"]`, "3") // here you choose the rating
        
    }

    await page.click("#a_next")
    await delay(1000);

    for (let i = 11; i <15 ; i++ ){
        console.log(i)
        // Here you choose input value
        await page.type(`input[name="ctl00$cphMainContent$txtLikert_${i}"]`, "3") // here you choose the rating
        
    }

    // page 2
    await page.type('textarea[name="ctl00$cphMainContent$commentsLike"]', "Nothing") // here you can write any feedback
    await page.type('textarea[name="ctl00$cphMainContent$commentsDislike"]', "Nothing")
    await page.type('textarea[name="ctl00$cphMainContent$commentsSuggest"]', "Nothing")

    await page.click("#cphMainContent_lbnSubmitSSLS")
    await page.waitForNavigation()

    console.log("submit successful") 



}catch (err){
    console.log("No more teachers to rate")
    break;
}

}

console.log("All surveys complete")
