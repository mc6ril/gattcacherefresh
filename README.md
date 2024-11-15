
# react-native-react-native-gatt-cache-refresh

## Getting started

`$ npm install react-native-react-native-gatt-cache-refresh --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-gatt-cache-refresh`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeGattCacheRefreshPackage;` to the imports at the top of the file
  - Add `new RNReactNativeGattCacheRefreshPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-gatt-cache-refresh'
  	project(':react-native-react-native-gatt-cache-refresh').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-gatt-cache-refresh/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-gatt-cache-refresh')
  	```

## Usage
```javascript
import RNReactNativeGattCacheRefresh from 'react-native-react-native-gatt-cache-refresh';

// TODO: What to do with the module?
RNReactNativeGattCacheRefresh;
```
  