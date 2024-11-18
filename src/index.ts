import { NativeModules } from "react-native";

interface RNBluetoothCacheManagerInterface {
  /**
   * Refresh the GATT cache for a given device ID.
   * @param deviceId - The Bluetooth device ID.
   * @param callback - Callback with error or success.
   */
  refreshCache(
    deviceId: string,
    callback: (error: string | null, success: boolean) => void
  ): void;

  /**
   * Clear the Bluetooth Legacy app cache.
   * @returns A promise that resolves to `true` if successful.
   */
  clearLegacyBluetoothCache(): Promise<boolean>;

  /**
   * Open the Bluetooth Legacy app settings.
   * @returns A promise that resolves to `true` if the settings were opened successfully.
   */
  openBluetoothLegacySettings(): Promise<boolean>;

  /**
   * Open the app settings for any specified package.
   * @param packageName - The name of the package.
   * @returns A promise that resolves to `true` if the settings were opened successfully.
   */
  openAppSettings(packageName: string): Promise<boolean>;
}

const { RNBluetoothCacheManager } = NativeModules as {
  RNBluetoothCacheManager: RNBluetoothCacheManagerInterface;
};

/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves `true` if the cache was refreshed successfully, otherwise `false`.
 */
export const refreshGattCache = async (deviceId: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!RNBluetoothCacheManager) {
      reject(new Error("RNBluetoothCacheManager module is not available."));
      return;
    }

    RNBluetoothCacheManager.refreshCache(
      deviceId,
      (error: string | null, success: boolean) => {
        if (error) {
          reject(error);
        } else {
          resolve(success);
        }
      }
    );
  });
};

/**
 * Clear the Bluetooth Legacy app cache.
 * @returns {Promise<boolean>} Resolves `true` if the cache was cleared successfully.
 */
export const clearLegacyCache = async (): Promise<boolean> => {
  if (!RNBluetoothCacheManager) {
    throw new Error("RNBluetoothCacheManager module is not available.");
  }
  return RNBluetoothCacheManager.clearLegacyBluetoothCache();
};

/**
 * Open the Bluetooth Legacy app settings.
 * @returns {Promise<boolean>} Resolves `true` if the settings were opened successfully.
 */
export const openBluetoothLegacySettings = async (): Promise<boolean> => {
  if (!RNBluetoothCacheManager) {
    throw new Error("RNBluetoothCacheManager module is not available.");
  }
  return RNBluetoothCacheManager.openBluetoothLegacySettings();
};

/**
 * Open the app settings for any specified package.
 * @param {string} packageName - The package name to open settings for.
 * @returns {Promise<boolean>} Resolves `true` if the settings were opened successfully.
 */
export const openAppSettings = async (packageName: string): Promise<boolean> => {
  if (!RNBluetoothCacheManager) {
    throw new Error("RNBluetoothCacheManager module is not available.");
  }
  return RNBluetoothCacheManager.openAppSettings(packageName);
};

export default RNBluetoothCacheManager;
