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
- Homepage design
- Static about page
- SASS styling in seperated components
- Conditional rendering on form and update state

### Issues

- Create-react-app startup: error involving my webpack, which I couldnt resolve following the instructions outlined in the terminal. I eventually realised this was down to my node_modules being globally installed on my laptop. It was a great learning curve as I was able to understand the effect and importance of global node_modules!

- Error code (415) when trying to post form via frontend - no issues when using Insomnia. As a potential solution, I attached the content header, which removed the 415 code, but resulted in different errors.

- Home carousel: useEffect continous loop. Doesnt seem to be unmounting despite the attempted use of an empty array at the end of the hook ([]) as well as the array containing the data ([data]). - Given more time, I would attempt to try and put the 'cleanup'/unmounting (which the error referred to) in a separate useEffect. Some other solutions suggest creating a function that cancels the promise once the data has been mounted through a conditional statement. Once the data has been loaded, I would be able to map through the array of objects returned to allocate the carousel image, title and subtitle.

      	```
      	{data.map((results, i) => {
      		return <Carousel key={i} results={results]/>
      	})}

      	```

      	This could allow me to pass the results as props e.g. <img src={results[0].image} />

      	** A rough pseudocode as may differ depending on the data structure **

### Key learning points

- Start on the parts that are more complex, e.g. useEffect and the form submission - having done these in the past, and not having had encountered these errors, I thought these would take less time. If I were to do this challenge again, I would start on these elements!
- Styling without a framework (such as Bulma) - I havent done this in a while, so it allowed me to really focus on the basics of css/sass.

### What I would add

- Increase the responsiveness of the site via use of the variables I defined (for all breakpoints as opposed to just mobile)
- Continue to organise SASS files and style the website to accuratley represent the invision
### Overall

Time taken: 5hours

In the time allocated, I found this a challenging exercise, however, I did enjoy having to workout the best ways to replicate an existing website. It illustrated the importance of planning ahead and prioritizing. As a developer, I need to make sure I focus on functionality first, which this has definitley showed me. I will continue to work on this project as I would particularly like to further explore the issues surrounding useEffect, as its such a key feature within React.
