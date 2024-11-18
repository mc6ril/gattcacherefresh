declare module "react-native-bluetooth-cache-manager" {
  /**
   * Interface for managing Bluetooth cache functionality.
   */
  interface BluetoothCacheManager {
    /**
     * Refresh the GATT cache for a given Bluetooth device.
     * @param deviceId - The ID of the Bluetooth device.
     * @param callback - A callback that returns either an error or success.
     */
    refreshCache(
      deviceId: string,
      callback: (error: string | null, success: boolean) => void
    ): void;

    /**
     * Open Bluetooth Legacy settings.
     * @returns A promise that resolves to `true` if the operation was successful, otherwise rejects with an error.
     */
    openBluetoothLegacySettings(): Promise<boolean>;
  }

  /**
   * The native module instance exported by the package.
   */
  const BluetoothCacheManager: BluetoothCacheManager;

  /**
   * Refresh the GATT cache for a given Bluetooth device.
   * @param deviceId - The ID of the Bluetooth device.
   * @returns {Promise<boolean>} Resolves `true` if the cache was refreshed successfully, otherwise rejects with an error.
   */
  export const refreshGattCache: (deviceId: string) => Promise<boolean>;

  /**
   * Open Bluetooth Legacy settings.
   * @returns {Promise<boolean>} Resolves `true` if the operation was successful, otherwise rejects with an error.
   */
  export const openBluetoothLegacySettings: () => Promise<boolean>;

  export default BluetoothCacheManager;
}