# React Native Apple Authentication - Testing Project

> TODO: Running example app & testing

---

<p>
  <img align="left" width="75px" src="https://static.invertase.io/assets/invertase-logo-small.png"> 
  <p align="left">  
    Built and maintained with 💛 by <a href="https://invertase.io">Invertase</a>.
  </p>
  <p align="left">  
    <a href="https://invertase.io/hire-us">💼 Hire Us</a> | 
    <a href="https://opencollective.com/react-native-firebase">☕️ Sponsor Us</a> | 
    <a href="https://opencollective.com/jobs">‍💻 Work With Us</a>
  </p>
</p>

---

# Gotchas

## Mismatch of React Native versions

If this error occurs on app startup, clean and rebuild using the following steps...

1. Uninstall the app from the simulator.
2. reset any local changes
3. cd ios
4. pod install
5. cd ../example
6. yarn
7. yarn start
8. yarn:build:clean
9. yarn run:ios
