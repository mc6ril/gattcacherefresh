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
   * Open the Bluetooth Legacy app settings.
   * @returns A promise that resolves to `true` if successful.
   */
  openBluetoothLegacySettings(): Promise<boolean>;
}

const { RNBluetoothCacheManager } = NativeModules as {
  RNBluetoothCacheManager: RNBluetoothCacheManagerInterface;
};

/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves `true` if the cache was refreshed successfully.
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
          reject(new Error(error));
        } else {
          resolve(success);
        }
      }
    );
  });
};

/**
 * Open Bluetooth Legacy settings.
 * @returns {Promise<boolean>} Resolves `true` if successful.
 */
export const openBluetoothLegacySettings = async (): Promise<boolean> => {
  if (!RNBluetoothCacheManager) {
    throw new Error("RNBluetoothCacheManager module is not available.");
  }
  return RNBluetoothCacheManager.openBluetoothLegacySettings();
};

export default RNBluetoothCacheManager;
