#!/bin/bash

# backup our customized files before we destroy the boilerplate
mkdir -p TEMP/ios/testing
cp -rv example/ios/testing.xcodeproj TEMP/ios/
cp example/ios/testing/testing.entitlements TEMP/ios/testing/
cp example/ios/testing/Info.plist TEMP/ios/testing/
cp example/metro.config.js TEMP/  # This helps javascript reference the parent directory
cp example/index.* TEMP/
cp example/app.* TEMP/
cp example/classVersion.js TEMP/
cp -rv example/images TEMP/
cp example/README.md TEMP/


# Delete the old example and create the new one (for historic reasons it is named "testing", but in "example" directory)
\rm -fr example
npx react-native init testing
mv testing example

# FIXME need to change name in package.json and app.json as well

# Everything else we do will be in the context of the example app
cd example

# Add our dependencies
yarn add react-native-get-random-values uuid

# Patch in our preferred example run scripts
    # "build:clean": "rimraf ios/build",
    # "start": "yarn react-native start --reset-cache",
    # "run:ios13": "yarn react-native run-ios --simulator=\"iPhone 11 ios13\""
# Here is an example from react-native-device-info
#npx json -I -f package.json -e "this.scripts.appium='appium'; this.scripts['test:windows']='yarn jest --config=./jest.windows.config.js'; this.scripts.windows='react-native run-windows'; this.jest.setupFiles=['./jest.setup.js'];"


# Do we need to now move the android classes to a new package? I think not


# Get android to reference the parent directory for our module

# in android/settings.gradle concatenated to end of file
#include ':reactnativeappleauth'
#project(':reactnativeappleauth').projectDir = new File(rootProject.projectDir, '../../android')

# in android/app/build.gradle after dependencies {
#    implementation project(':reactnativeappleauth')

# in android/app/src/main/java/com/testing/MainApplication.java above "return packages;"
#          packages.add(new AppleAuthenticationAndroidPackage());

# This is just a speed optimization, very optional, but asks xcodebuild to use clang and clang++ without the fully-qualified path
# That means that you can then make a symlink in your path with clang or clang++ and have it use a different binary
# In that way you can install ccache or buildcache and get much faster compiles...
sed -i -e $'s/react_native_post_install(installer)/react_native_post_install(installer)\\\n    \\\n    installer.pods_project.targets.each do |target|\\\n      target.build_configurations.each do |config|\\\n        config.build_settings["CC"] = "clang"\\\n        config.build_settings["LD"] = "clang"\\\n        config.build_settings["CXX"] = "clang++"\\\n        config.build_settings["LDPLUSPLUS"] = "clang++"\\\n      end\\\n    end/' ios/Podfile
rm -f ios/Podfile??

# Instead of copying Info.plist we might just slice these in?
# -       <key>CFBundleURLTypes</key>
# -       <array>
# -               <dict>
# -                       <key>CFBundleTypeRole</key>
# -                       <string>Editor</string>
# -                       <key>CFBundleURLName</key>
# -                       <string>com.invertase.testing</string>
# -                       <key>CFBundleURLSchemes</key>
# -                       <array>
# -                               <string>invertase</string>
# -                       </array>
# -               </dict>
# -               <dict/>
# -       </array>


# Copy the important files back in
popd
echo "Copying example files into refreshed example..."
cp -frv TEMP/* example/

# Clean up after ourselves
\rm -fr TEMP
