declare module "react-native-gatt-cache-refresh" {
    /**
     * Native module for GATT cache refresh.
     */
    interface RNGattCacheRefresh {
      /**
       * Refresh the GATT cache for a given device ID.
       * @param deviceId - The Bluetooth device ID.
       * @param callback - Callback with error or success.
       */
      refreshCache(
        deviceId: string,
        callback: (error: string | null, result: boolean | null) => void
      ): void;
    }
  
    /**
     * The native module instance.
     */
    const RNGattCacheRefresh: RNGattCacheRefresh;
  
    /**
     * Refresh the GATT cache for a given device ID.
     * @param deviceId - The Bluetooth device ID.
     * @returns A promise that resolves to `true` if the cache was refreshed successfully, otherwise `false`.
     */
    export const refreshGattCache: (deviceId: string) => Promise<boolean>;
  
    export default RNGattCacheRefresh;
  }
  