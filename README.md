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

3. Start the webpack watcher (it builds the `index.ios.js` file expected by React Native)
4. Open `ReactNativeEs6Reflux.xcodeproj` in XCode and run the project - it should look like this:

    <img alt="iOS Simulator running this boilerplate" src="http://i.imgur.com/OKELxXP.png" height="50%" width="50%">

## Javascript file structure

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

## Included in the example:

- A simple top-level `App` component with example styles (in `src/styles.js`)
- An example interaction using `TouchableOpacity`, and an example Reflux action (defined in `src/actions.js`)
- An example `AppMessageStore` Reflux store, which handles setting the random message when the React logo is tapped.

## Author

This boilerplate was created by [Filipe Dobreira](https://github.com/filp). It includes auto-generated code (through `react-native init`), and code by [Roman Liutikov](https://github.com/roman01la) (namely the webpack configuration).
