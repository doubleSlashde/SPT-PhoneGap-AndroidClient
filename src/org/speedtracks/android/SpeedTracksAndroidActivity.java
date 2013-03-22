package org.speedtracks.android;

import org.apache.cordova.*;
import android.os.Bundle;

public class SpeedTracksAndroidActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/client/index.html");
    }
}
