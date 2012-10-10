SPT-PhoneGap-AndroidClient
===========

SpeedTracks - die Mobilfunk Landkarte zum Mitmachen!

Website: [http://speedtracks.org/](http://speedtracks.org/)  
Bugs/Suggestions: [https://github.com/SpeedTracks/SPT-PhoneGap-AndroidClient/issues](https://github.com/SpeedTracks/SPT-PhoneGap-AndroidClient/issues)  
Discussions: [http://gplus.to/speedTrack](http://gplus.to/speedTrack)

We use maven to handle our dependencies and the [Android maven plugin](http://code.google.com/p/maven-android-plugin/) to compile the apk.
Requirements:
-----------
* Git 1.5.3+
* Java JDK 1.6+
* Android SDK (r17 or later, latest is best supported)
* Maven 3.0.3+ [http://maven.apache.org/download.html]((http://maven.apache.org/download.html))
	
Checkout
-----------
When you work with git >= 1.6.5 you can clone the [SPT-PhoneGap-AndroidClient](https://github.com/SpeedTracks/SPT-PhoneGap-AndroidClient.git) repository with  
`git clone https://github.com/SpeedTracks/SPT-PhoneGap-AndroidClient.git --recursive`

When you're below git 1.6.5 or run into trouble with the above command try a normal checkout and initialize afterwards (from top level of your local repo) the git submodule with  
`git clone https://github.com/SpeedTracks/SPT-PhoneGap-AndroidClient.git`  
`git submodule update --init --recursive`

Preparation
-----------
* Set environment variable ANDROID_HOME to the path of your installed Android SDK
* Add $ANDROID_HOME/tools and $ANDROID_HOME/platform-tools to your PATH

e.g. `sudo vi /etc/bash.bashrc`  
add the following exports at the end of the file  
```
export ANDROID_HOME=/path/to/android-sdk  
export PATH=$ANDROID_HOME/tools:$PATH  
export PATH=$ANDROID_HOME/platform-tools:$PATH
```

Afterwards you have to install the phonegap/cordova libraray (which is located under the libs folder) to your local maven repository.  
```
mvn install:install-file -Dfile=phonegap-1.3.0.jar -DgroupId=org.apache.cordova -DartifactId=cordova  
-Dversion=1.3.0 -Dclassifier=android -Dpackaging=jar
```

**Attention:** You **_have to care_** about the **_filename_** and the **_version number_** of the attached library, so replace  
`-Dfile=phonegap-1.3.0.jar` with the execat filename and `-Dversion=1.3.0` with the version of the library.  

Compilation
-----------
Run `mvn clean install` for building the apk file  
Run `mvn android:deploy` for deploying the application to a connected device  