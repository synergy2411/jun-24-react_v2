# BReak Timing

- Tea Break : 11:00 (15 minutes)
- Lunch : 01:00 (45 minutes)
- Tea Break : 03:30 (15 minutes)

# JavaScript (ES6+ features)

- Arrow functions
- Destructuring
- Rest / Spread
- Module System
- Object Assign

# Data Types

- Primitive Types : String, Number, Boolean, Symbol
- Reference Types : Array, Functions, Object, Dates

# JavaScript Libraries / Framework

- React : Small library, to render the UI quickly and efficiently
  > MVC : React creates the View
- \*NextJS: Server Side Framework for React
- \*Angular: Super-heroic framework
- Vue : Virtual DOM; Features from both React and Angular
- Backbone : Client side MVC
- Knockout : MVVM Pattern; Two way data binding
- \*Ember : Frequent changes
- jQuery : DOM manipulation library
- Polymer : dynamic rich web component
- Stencil : Component based apps
- Electron : Desktop Apps

# Atomic Design Principle in Web Designing

- Atom : small unit. eg. A Button, An input field
- Molecules : combo of Atoms. eg. Searchbar -> one input field + one button
- Organism : combo of Molecules. eg. Navigation Bar -> various links + searchbar
- Template : combo of Organism. eg. Form
- Page : Complete Page

# Thinking in React way - if code is reusable, make it a Component

# http://semver.org

# Create React Project

- npx create-react-app react-basics
- cd react-basics
- npm start

# Bootstrapping React App Process

- npm start
- starts development server
- devServer loads the index.html on browser
- index.js connects the App Component on div#root
- App.js return JSX Code

- npm install bootstrap

- When the state variable changes, the self component and the child components will re-render
- the parent component and sublings will not have any effect on state change

- Optimization

  > useMemo()
  > useCallback()
  > Memo()

- PureComponent

# React : to render the UI quickly and efficiently

# Side-effect

- XHR calls
- State changing

# Controlled Component

- Registration Form : username/email
- Immediate Feedback

# Uncontrolled Component

- Login Form : email, password
- Simply grab the value from the DOM
- Usages : Third Party Widgets
- forceUpdate()

# useEffect

- useEffect(cb) :cb will execute on every rendering cycle
- useEffect(cb, []) (componentDidMount): cb will execute only at the initial rendering

- useEffect(cb, [Dependencies]) (componentDidUpdate)

  > cb will execute at initial rendering
  > cb will also execute whenever the mentioned dependency will change

- useEffect(cb => cleanUpFn, [Dependencies]) (componentWillUnmount)

  > cb will execute at initial rendering
  > Dependencies will change
  > CleanUpFn will execute
  > cb will execute
  > CleanUpFn will also execute when the component is about to unmount

- hooks
- SPA
- Redux
- Testing

---

React Introduction
React Internals - VDOM, Diffing Algorithm, Reconciliation Process
Expenses : Add, Delete
Class based component : mounting, updating, unmounting
Uncontrolled / controlled elements
Hooks- useState, useRef, useEffect, useReducer,

- useContext: consumes Context API
- useCallback : memoized value for callback / function
- useMemo : memoized value for javascript reference type
- useTransition : Priortise the state update to achieve the concurrency performance in a single function call
- useDeferredValue : used when there is no access of state
- useLayoutEffect : executes before the component layout is created
- useImperativeHandle : Sending the ref to the child component
- useSyncExternalStore : receives data sync from external store
- useForm (react-hook-form)

# SPA

- npm install react-router-dom

# Why Context API?

- prevents prop-drilling
- Theme

# Component Composition

Card (title, description, subheadingText)

- CardHeader
- CardBody
  - SubHeading (prop - subheadingText)

# State MAnagement in React

- useState
- useReducer
- Context API : Component branch level state, user preferences, JWT token; No Real time data, Complex,
- Redux Pattern : Centralized place to keep state which change frequently

<ThemeProvider>
  <UserPrefProvider>
    <TokenProvider>
    <App />
    </TokenProvider>
  </UserPrefProvider>
</ThemeProvider>

---

# React SPA

- Create BrowserRouter / HashRouter
- Configure the Components/Pages with Path/Routes

- json-server --watch --port=3030 db.json

---

# Vite Project

- npm create vite@latest
  - React
  - JavaScript
- cd react-redux-app
- npm install
- npm run dev
- npm install @reduxjs/toolkit react-redux bootstrap
