import { NativeModules } from 'react-native';

const { RNGattCacheRefresh } = NativeModules;

/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves to `true` if the cache was refreshed successfully, otherwise `false`.
 */
export const refreshGattCache = async (deviceId: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (!RNGattCacheRefresh) {
      console.error('RNGattCacheRefresh module is not linked properly.');
      reject(new Error('RNGattCacheRefresh module is not available.'));
      return;
    }

    RNGattCacheRefresh.refreshCache(deviceId, (error: string | null, success: boolean) => {
      if (error) {
        console.error(`Error refreshing GATT cache: ${error}`);
        reject(error);
      } else {
        resolve(success);
      }
    });
  });
};

export default RNGattCacheRefresh;
