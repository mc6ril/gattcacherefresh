package com.reactlibrary;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.provider.Settings;

import com.facebook.react.bridge.Promise;

public class RNBluetoothLegacyCacheManager {

    private static final String[] POSSIBLE_BLUETOOTH_PACKAGES = {
        "com.android.bluetoothlegacy",
        "com.android.bluetooth",
        "com.google.android.bluetooth"
    };

    public static void clearCacheOrOpenSettings(Context context, Promise promise) {
        try {
            PackageManager pm = context.getPackageManager();
            String targetPackage = null;

            // Loop through possible Bluetooth package names to find the installed one
            for (String pkg : POSSIBLE_BLUETOOTH_PACKAGES) {
                try {
                    ApplicationInfo appInfo = pm.getApplicationInfo(pkg, 0);
                    targetPackage = pkg;
                    break;
                } catch (PackageManager.NameNotFoundException ignored) {
                    // Skip if the package is not found
                }
            }

            if (targetPackage == null) {
                promise.reject("PACKAGE_NOT_FOUND", "No Bluetooth package found on this device.");
                return;
            }

            openAppSettings(context, targetPackage, promise);
        } catch (Exception e) {
            promise.reject("ERROR", "Failed to perform the operation: " + e.getMessage());
        }
    }

    public static void openAppSettings(Context context, String packageName, Promise promise) {
        try {
            Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
            intent.setData(Uri.parse("package:" + packageName));
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

            // Check if the intent can resolve to an activity before starting it
            if (intent.resolveActivity(context.getPackageManager()) != null) {
                context.startActivity(intent);
                promise.resolve("Settings opened for package: " + packageName);
            } else {
                promise.reject("ERROR", "Unable to resolve settings for package: " + packageName);
            }
        } catch (Exception e) {
            promise.reject("ERROR", "Failed to open settings: " + e.getMessage());
        }
    }
}
