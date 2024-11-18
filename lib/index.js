"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openBluetoothLegacySettings = exports.clearLegacyCache = exports.refreshGattCache = void 0;
const react_native_1 = require("react-native");
const { RNBluetoothCacheManager } = react_native_1.NativeModules;
/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves `true` if the cache was refreshed successfully, otherwise `false`.
 */
const refreshGattCache = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        if (!RNBluetoothCacheManager) {
            reject(new Error("RNBluetoothCacheManager module is not available."));
            return;
        }
        RNBluetoothCacheManager.refreshCache(deviceId, (error, success) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(success);
            }
        });
    });
});
exports.refreshGattCache = refreshGattCache;
/**
 * Clear the Bluetooth Legacy app cache.
 * @returns {Promise<boolean>} Resolves `true` if the cache was cleared successfully.
 */
const clearLegacyCache = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!RNBluetoothCacheManager) {
        throw new Error("RNBluetoothCacheManager module is not available.");
    }
    return RNBluetoothCacheManager.clearLegacyBluetoothCache();
});
exports.clearLegacyCache = clearLegacyCache;
/**
 * Open the Bluetooth Legacy app settings.
 * @returns {Promise<boolean>} Resolves `true` if the settings were opened successfully.
 */
const openBluetoothLegacySettings = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!RNBluetoothCacheManager) {
        throw new Error("RNBluetoothCacheManager module is not available.");
    }
    return RNBluetoothCacheManager.openBluetoothLegacySettings();
});
exports.openBluetoothLegacySettings = openBluetoothLegacySettings;
exports.default = RNBluetoothCacheManager;
