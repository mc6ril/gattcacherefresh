interface RNBluetoothCacheManagerInterface {
    /**
     * Refresh the GATT cache for a given device ID.
     * @param deviceId - The Bluetooth device ID.
     * @param callback - Callback with error or success.
     */
    refreshCache(deviceId: string, callback: (error: string | null, success: boolean) => void): void;
    /**
     * Open the Bluetooth Legacy app settings.
     * @returns A promise that resolves to `true` if successful.
     */
    openBluetoothLegacySettings(): Promise<boolean>;
}
declare const RNBluetoothCacheManager: RNBluetoothCacheManagerInterface;
/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves `true` if the cache was refreshed successfully.
 */
export declare const refreshGattCache: (deviceId: string) => Promise<boolean>;
/**
 * Open Bluetooth Legacy settings.
 * @returns {Promise<boolean>} Resolves `true` if successful.
 */
export declare const openBluetoothLegacySettings: () => Promise<boolean>;
export default RNBluetoothCacheManager;
