package de.doubleSlash.speedTracker.android;

import android.app.Activity;
import com.phonegap.*;
import android.os.Bundle;

public class SpeedTrackerAndroidActivity extends DroidGap {
    /** Called when the activity is first created. */
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
