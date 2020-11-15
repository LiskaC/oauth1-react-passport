Current blockers:
LoginPage:

- axios / cors issue for post request on signup
- how to extract the hooks into a new file? and other repeated code

BackButton:

- does this have to be a separate button from the Button.js? basically I couldn't find out how to pass the history.goBack into the handleClick function
- Also the BackButton currently only functions as a page of its own linked to in App.js router and not when imported as a component in other files (error cannot read property go back of undefined)

Quick fixes:

- how do I set auto-formatting (e.g. with indentation on save)? Prettier already installed.

Questions:

- can you use hooks in React Native?
- can / should I use buttons for navigation? clickthrough. Or should this be all links?

Next:

- Add history => back button (with react router)
- Separate out Register/Login pages
