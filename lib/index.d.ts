declare const RNGattCacheRefresh: any;
/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves to `true` if the cache was refreshed successfully, otherwise `false`.
 */
export declare const refreshGattCache: (deviceId: string) => Promise<boolean>;
export default RNGattCacheRefresh;
