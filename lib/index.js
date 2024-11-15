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
exports.refreshGattCache = void 0;
const react_native_1 = require("react-native");
const { RNGattCacheRefresh } = react_native_1.NativeModules;
/**
 * Refresh the GATT cache for a given device ID.
 * @param {string} deviceId - The Bluetooth device ID.
 * @returns {Promise<boolean>} Resolves to `true` if the cache was refreshed successfully, otherwise `false`.
 */
const refreshGattCache = (deviceId) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        if (!RNGattCacheRefresh) {
            console.error('RNGattCacheRefresh module is not linked properly.');
            reject(new Error('RNGattCacheRefresh module is not available.'));
            return;
        }
        RNGattCacheRefresh.refreshCache(deviceId, (error, success) => {
            if (error) {
                console.error(`Error refreshing GATT cache: ${error}`);
                reject(error);
            }
            else {
                resolve(success);
            }
        });
    });
});
exports.refreshGattCache = refreshGattCache;
exports.default = RNGattCacheRefresh;
