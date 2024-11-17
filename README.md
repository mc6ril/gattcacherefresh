# React Native Gatt Cache Refresh

Easily refresh the GATT cache for Bluetooth devices in your React Native application. This package simplifies invoking the GATT refresh functionality on Android devices.

---

## Installation

Install the package using npm or yarn:

```bash
npm install react-native-bluetooth-cache-manager
```

or

```bash
yarn add react-native-bluetooth-cache-manager
```

### Autolinking Support

This package supports **autolinking** for React Native 0.60 and above. No manual linking is required for most configurations.

---

## Usage

### Import the Module

You can use the module in your React Native project as follows:

```javascript
import RNGattCacheRefresh from 'react-native-bluetooth-cache-manager';

// Example usage
RNGattCacheRefresh.refreshCache(deviceId, (error, result) => {
  if (error) {
    console.error('Failed to refresh GATT cache:', error);
  } else {
    console.log('GATT cache refreshed successfully:', result);
  }
});
```

### Parameters for `refreshCache`

- **deviceId**: The unique identifier (MAC address) of the Bluetooth device.
- **Callback**: Function to handle success or failure of the GATT cache refresh.

---

## Requirements

- **React Native**: Version 0.60 and above
- **Android**: API Level 31 (Android 12) and above
- **Permissions**: Ensure the `BLUETOOTH_CONNECT` permission is granted in your app.

---

## Contributing

Contributions are welcome! If you encounter any issues or have ideas for improvements, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Notes

- This package only supports **Android**. It does not have iOS compatibility.
