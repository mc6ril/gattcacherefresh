package com.reactlibrary;

import android.Manifest;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothGatt;
import android.bluetooth.BluetoothGattCallback;
import android.bluetooth.BluetoothProfile;
import android.content.Context;
import android.content.pm.PackageManager;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.lang.reflect.Method;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class RNBluetoothCacheManagerModule extends ReactContextBaseJavaModule {

    private static final String TAG = "BluetoothCacheManager";
    private final ExecutorService commandQueue;

    public RNBluetoothCacheManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.commandQueue = Executors.newSingleThreadExecutor();
    }

    @Override
    public String getName() {
        return "RNBluetoothCacheManager";
    }

    private void enqueue(Runnable command) {
        commandQueue.submit(command);
    }

    private void completedCommand() {
        Log.d(TAG, "Command completed");
    }

    @ReactMethod
    public void refreshCache(String deviceId, Callback callback) {
        enqueue(() -> {
            try {
                BluetoothAdapter adapter = BluetoothAdapter.getDefaultAdapter();
                if (adapter == null || !adapter.isEnabled()) {
                    callback.invoke("Bluetooth is disabled or not available.");
                    return;
                }

                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.S) {
                    Context context = getReactApplicationContext();
                    if (context == null || context.checkSelfPermission(Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
                        callback.invoke("BLUETOOTH_CONNECT permission not granted");
                        return;
                    }
                }

                BluetoothDevice device = adapter.getRemoteDevice(deviceId);
                if (device == null) {
                    callback.invoke("BluetoothDevice not found for deviceId: " + deviceId);
                    return;
                }

                BluetoothGatt gatt = device.connectGatt(getReactApplicationContext(), false, new BluetoothGattCallback() {
                    @Override
                    public void onConnectionStateChange(BluetoothGatt gatt, int status, int newState) {
                        if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                            gatt.close();
                        }
                    }
                });

                if (gatt == null) {
                    callback.invoke("Unable to get BluetoothGatt instance for deviceId: " + deviceId);
                    return;
                }

                Method refreshMethod = gatt.getClass().getMethod("refresh");
                if (refreshMethod != null) {
                    boolean result = (boolean) refreshMethod.invoke(gatt);
                    Log.d(TAG, "GATT cache refreshed: " + result);
                    gatt.disconnect();
                    gatt.close();
                    callback.invoke(null, result);
                } else {
                    gatt.close();
                    callback.invoke("refresh method not found.");
                }
            } catch (Exception e) {
                Log.e(TAG, "An exception occurred while refreshing GATT cache", e);
                callback.invoke(e.getMessage());
            } finally {
                completedCommand();
            }
        });
    }

    @ReactMethod
    public void openBluetoothLegacySettings(Promise promise) {
        RNBluetoothLegacyCacheManager.openBluetoothLegacySettings(getReactApplicationContext(), promise);
    }
}
