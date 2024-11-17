package com.reactlibrary;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import com.facebook.react.bridge.Promise;

public class RNBluetoothLegacyCacheManager {

    private static final String LEGACY_BLUETOOTH_PACKAGE = "com.android.bluetoothlegacy";

    public static void clearLegacyCache(Context context, Promise promise) {
        try {
            PackageManager pm = context.getPackageManager();
    
            // Check if the Bluetooth Legacy package exists
            try {
                ApplicationInfo appInfo = pm.getApplicationInfo(LEGACY_BLUETOOTH_PACKAGE, 0);
            } catch (PackageManager.NameNotFoundException e) {
                promise.reject("PACKAGE_NOT_FOUND", "Bluetooth Legacy package not found on this device.");
                return;
            }
    
            // Attempt to clear cache
            pm.deleteApplicationCacheFiles(LEGACY_BLUETOOTH_PACKAGE, (result) -> {
                if (result) {
                    promise.resolve(true);
                } else {
                    promise.reject("ERROR", "Failed to clear Bluetooth Legacy cache");
                }
            });
        } catch (SecurityException e) {
            // Restricted operation fallback
            promise.reject("PERMISSION_DENIED", "Unable to clear cache programmatically. Please clear it manually.");
        } catch (Exception e) {
            promise.reject("ERROR", "Unable to clear cache: " + e.getMessage());
        }
    }
    
}
