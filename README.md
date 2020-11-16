Current blockers:
LoginPage:

- how to extract the hooks into a new file? and other repeated code

BackButton:

- does this have to be a separate button from the Button.js? basically I couldn't find out how to pass the history.goBack into the handleClick function
- tiny-warning.esm.js:11 Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.
- getting an incorrect use of Hooks error in UseHistoryBackButton.js. duplicate reacts? npm ls react https://github.com/facebook/react/issues/13991#issuecomment-435587809 ?

Quick fixes:

- how do I set auto-formatting (e.g. with indentation on save)? Prettier already installed.

Questions:

- can you use hooks in React Native?
- can / should I use buttons for navigation? clickthrough. Or should this be all links?

Next:

- Add history => back button (with react router)
- Separate out Register/Login pages
