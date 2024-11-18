interface RNBluetoothCacheManagerInterface {
    /**
     * Refresh the GATT cache for a given device ID.
     * @param deviceId - The Bluetooth device ID.
     * @param callback - Callback with error or success.
     */
    refreshCache(deviceId: string, callback: (error: string | null, success: boolean) => void): void;
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
}
declare const RNBluetoothCacheManager: RNBluetoothCacheManagerInterface;
/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves `true` if the cache was refreshed successfully, otherwise `false`.
 */
export declare const refreshGattCache: (deviceId: string) => Promise<boolean>;
/**
 * Clear the Bluetooth Legacy app cache.
 * @returns {Promise<boolean>} Resolves `true` if the cache was cleared successfully.
 */
export declare const clearLegacyCache: () => Promise<boolean>;
/**
 * Open the Bluetooth Legacy app settings.
 * @returns {Promise<boolean>} Resolves `true` if the settings were opened successfully.
 */
export declare const openBluetoothLegacySettings: () => Promise<boolean>;
export default RNBluetoothCacheManager;
