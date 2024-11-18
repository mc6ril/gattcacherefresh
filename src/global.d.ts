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
     * Clear the cache for the Bluetooth Legacy app.
     * @returns A promise that resolves to `true` if the cache was cleared successfully, otherwise rejects with an error.
     */
    clearLegacyBluetoothCache(): Promise<boolean>;

    /**
     * Open the settings for the Bluetooth Legacy app.
     * @returns A promise that resolves to `true` if the settings were opened successfully, otherwise rejects with an error.
     */
    openBluetoothLegacySettings(): Promise<boolean>;

    /**
     * Open the app settings for any specified package.
     * @param packageName - The name of the package.
     * @returns A promise that resolves to `true` if the settings were opened successfully, otherwise rejects with an error.
     */
    openAppSettings(packageName: string): Promise<boolean>;
  }

  /**
   * The native module instance exported by the package.
   */
  const BluetoothCacheManager: BluetoothCacheManager;

  /**
   * Refresh the GATT cache for a given Bluetooth device.
   * @param deviceId - The ID of the Bluetooth device.
   * @returns A promise that resolves to `true` if the cache was refreshed successfully, otherwise rejects with an error.
   */
  export const refreshGattCache: (deviceId: string) => Promise<boolean>;

  /**
   * Clear the Bluetooth Legacy app cache.
   * @returns A promise that resolves to `true` if the cache was cleared successfully, otherwise rejects with an error.
   */
  export const clearLegacyCache: () => Promise<boolean>;

  /**
   * Open the settings for the Bluetooth Legacy app.
   * @returns A promise that resolves to `true` if the settings were opened successfully, otherwise rejects with an error.
   */
  export const openBluetoothLegacySettings: () => Promise<boolean>;

  /**
   * Open the app settings for any specified package.
   * @param packageName - The name of the package.
   * @returns A promise that resolves to `true` if the settings were opened successfully, otherwise rejects with an error.
   */
  export const openAppSettings: (packageName: string) => Promise<boolean>;

  export default BluetoothCacheManager;
}
