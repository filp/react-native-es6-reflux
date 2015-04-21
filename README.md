# react-native, es6 & reflux boilerplate

As the very long repo title indicates, this is a boilerplate repository that
includes the following:

- ES6-to-ES5 transpilation using [Babel](https://github.com/babel/babel)
- Uni-directional data-flow architecture using [Reflux](https://github.com/spoike/refluxjs)

## Getting started

1. Clone this project
2. Install dependencies:

    ```shell
    $ npm install
    ```

3. Open `ReactNativeEs6Reflux.xcodeproj` in XCode and run the project

## Javascript structure

```
  - src/
    stores/ -  Reflux stores
      color_store.js - Example store implementation
    components/ - React components
      app.jsx - Top-level app component

    action.js - Reflux action definitions
    styles.js - StyleSheet definition(s)
    main.js   - Application bootstrap with react-native, transpiler entry-point
```
