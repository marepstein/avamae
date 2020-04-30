### To start

1. npm i
2. npm start

## Tasks outlined:

- A home page with some static content, including images and text. The top carousel should load data (image and strapline text) from an external REST endpoint, listed below.

- An about us page, with purely static content.

- A contact-us page consisting of a single form, which on submission should post data to an external REST endpoint. The form should be validated and behave correctly when the API responds.

## Features:

- SPA using create-react-app
- React router
- React hooks
- Swiper.js carousel from REST endpoint
- React-hook-forms with POST functionality
- Homepage design
- Static about page
- SASS styling
- Conditional rendering

### Key learning points

- Use of react-hook-forms: originally I created the form using basic HTML methods and updating state to handleChange and handleSubmit. However, I realised that with the required functionality (adding the option for different phone numbers, adding optional address details and resetting the form), the use of a react framework would be helpful. This was a great learning opportunity as I have never used react-hook-forms before, and although it became tricky at points, such as adding phone numbers, it was really fun to learn and great to see how it minimized the amount of code needed.

🐛 I encountered:
_ CORS error as I attempted to push new phone numbers into an array using react-hook-forms field array. At first, I thought this was the best method for adding phone numbers, however, I soon realised that the API only accepted a string for the 'PhoneNumber' object. Therefore, I created a new object everytime a new phone number was created.
_ Controlled and uncontrolled form fields

- Swiper.js: this was also new to me. I encountered a few difficulties with getting the images and information in the right places, however, after playing around with CSS I managed to get it to work.

🐛 I encountered:
_ Images taking up large amounts of space
_ Text glitching on different slides - fixed with position: absolute

- Start on the parts that are more complex as opposed to styling first.

- Styling without a framework (such as Bulma) - I havent done this in a while, so it allowed me to really focus on the basics of css/sass.

### What I would add with more time

- Increase the responsiveness of the site via use of the variables I defined (for all breakpoints as opposed to just mobile)
- Continue to organise SASS files
- Conditional rendering of the 'success message' on the contact-us page

### What I would like to develop on

- My understanding of best practices in terms of styling
- Mobile-first development
- Continue learning about react-hook-forms

### Overall

I found that this test was a great learning curve for me as I was able to explore new frameworks, which ultimatley led to re-factoring code that I had initially written. Replicating an existing website is challenging and really highlighted the importance of planning ahead and prioritizing.

As a developer, I have learnt that I need to make sure I focus on functionality first, which this task has definitley showed me as this aspect took the most time overall.
