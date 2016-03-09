# PockeTable

Personal pocket timetable for frequently used Tube stations in London, showing live departures from London TfL feeds.

Written in **React Native for Android**. Uses Redux as a data layer library.

## DEMO

![Demo](demo.gif)

## TODO
- [ ] Add error handling
- [ ] Improve API data loading handling
- [ ] Test components (mock native components)
- [ ] Use Flow
- [ ] Use async keyword instead of promises
- [ ] Add an icon
- [ ] Add project details to `package.json`
- [ ] Integrate with Travis CI
- [ ] Add some cool badges (e.g. code coverage)

## Available NPM tasks

| Task | Description | Comment |
| ---- | ----------- | ------- |
| `npm start` | Starts React Native packager. | Requires native device emulator (e.g. Genymotion) to be running. See [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for more information. |
| `npm test` | Runs unit tests. | Uses Mocha (test framework), Chai (assertions library) and Enzyme (React test utilities). See `test/support/test-env.js` to see testing environment setup. |
