Current blockers:

- How can I chain login() and getUser() function? getting errors with promises and async/await
- How can I refactor/segment out my login page & functionality? (SEE LOGIN PG at bottom)

Quick fixes:

- how do I set auto-formatting (e.g. with indentation on save)? Prettier already installed.

Questions:

- should my latitude and longitude properties be 'null' provisionally? (in /register)
- not sure that my current 'dual' logout system is optimal?
- can you use hooks in React Native?
- can / should I use buttons for navigation? clickthrough. Or should this be all links?
- when saving in server file other than server.js getting an app crash since 5000 is already in use - not the case when I save from within server.js

Next to implement:

- convert addresses to lat/long
- write regex file: Password strength checker, lat/long
- extract getUser method into util
- Forgot password function

LoginPage

- how to extract the hooks into a new file? and other repeated code

BackButton

- does this have to be a separate button from the Button.js? basically I couldn't find out how to pass the history.goBack into the handleClick function
- tiny-warning.esm.js:11 Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.
- getting an incorrect use of Hooks error in UseHistoryBackButton.js. duplicate reacts? npm ls react https://github.com/facebook/react/issues/13991#issuecomment-435587809 ?
