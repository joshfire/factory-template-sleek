echo "Sleek builder"
echo "-----"
echo "Start time: $(date +"%T")"
echo ""

echo "Compile CSS styles..."
cd tasks/
./node_modules/.bin/jake compile:less
cd ..
echo "Compile CSS styles... done"

echo "Build and optimize JavaScript files..."
cd app/
node joshfire-framework/scripts/optimize.js ios app.phone
node joshfire-framework/scripts/optimize.js android app.phone
node joshfire-framework/scripts/optimize.js tv app.tv
node joshfire-framework/scripts/optimize.js samsungtv app.tv.samsung
node joshfire-framework/scripts/optimize.js ios app.tablet
node joshfire-framework/scripts/optimize.js android app.tablet
node joshfire-framework/scripts/optimize.js ios app.desktop
cd ..
echo "Build and optimize JavaScript files... done"

# Build folder
echo "Create build folder..."
rm -fr build
mkdir build/
echo "Create build folder... done"

echo "Prepare phone version..."
mkdir -p build/phone
mkdir -p build/phone/css
mkdir -p build/phone/images
mkdir -p build/phone/vendor
cp app/css/phone.* build/phone/css
cp app/images/error.gif build/phone/images
cp app/images/icons.png build/phone/images
cp app/images/icons2x.png build/phone/images
cp app/images/image-spinner* build/phone/images
cp app/images/phone-* build/phone/images
cp app/images/spinner.gif build/phone/images
cp app/images/noimage.png build/phone/images
cp -r app/lang build/phone/
cp app/vendor/moment.js build/phone/vendor
cp app/vendor/sidjs-0.1.js build/phone/vendor
cp app/index.phone.optimized.html build/phone/index.html
cp app/index.phone.ios.optimized.html build/phone/index.ios.html
cp app/app.phone.android.optimized.js build/phone/app.android.js
cp app/app.phone.ios.optimized.js build/phone/app.ios.js
cp app/todate.js build/phone/
cp app/prettystatus.js build/phone/
rm app/app.phone.android.optimized.js
rm app/app.phone.ios.optimized.js
echo "Prepare phone version... done"

echo "Prepare tablet version..."
mkdir -p build/tablet
mkdir -p build/tablet/css
mkdir -p build/tablet/images
mkdir -p build/tablet/vendor
cp app/css/tablet.* build/tablet/css
cp app/images/error.gif build/tablet/images
cp app/images/icons.png build/tablet/images
cp app/images/icons2x.png build/tablet/images
cp app/images/image-spinner* build/tablet/images
cp app/images/phone-* build/tablet/images
cp app/images/spinner.gif build/tablet/images
cp app/images/noimage.png build/tablet/images
cp -r app/lang build/tablet/
cp app/vendor/moment.js build/tablet/vendor
cp app/vendor/sidjs-0.1.js build/tablet/vendor
cp app/index.tablet.optimized.html build/tablet/index.html
cp app/app.tablet.android.optimized.js build/tablet/app.android.js
cp app/app.tablet.ios.optimized.js build/tablet/app.ios.js
cp app/todate.js build/tablet/
cp app/prettystatus.js build/tablet/
rm app/app.tablet.android.optimized.js
rm app/app.tablet.ios.optimized.js
echo "Prepare tablet version... done"

echo "Prepare desktop version..."
mkdir -p build/desktop
mkdir -p build/desktop/css
mkdir -p build/desktop/images
mkdir -p build/desktop/vendor
cp app/css/desktop.* build/desktop/css
cp app/images/error.gif build/desktop/images
cp app/images/icons.png build/desktop/images
cp app/images/icons2x.png build/desktop/images
cp app/images/image-spinner* build/desktop/images
cp app/images/phone-* build/desktop/images
cp app/images/spinner.gif build/desktop/images
cp app/images/noimage.png build/desktop/images
cp -r app/lang build/desktop/
cp app/vendor/moment.js build/desktop/vendor
cp app/vendor/sidjs-0.1.js build/desktop/vendor
cp app/index.desktop.optimized.html build/desktop/index.html
cp app/app.desktop.ios.optimized.js build/desktop/app.js
cp app/todate.js build/desktop/
cp app/prettystatus.js build/desktop/
rm app/app.desktop.ios.optimized.js
echo "Prepare desktop version... done"

echo "Prepare tv version..."
mkdir -p build/tv
mkdir -p build/tv/css
mkdir -p build/tv/images
mkdir -p build/tv/vendor
cp app/css/tv.* build/tv/css
cp app/images/error.gif build/tv/images
cp app/images/icons.png build/tv/images
cp app/images/icons2x.png build/tv/images
cp app/images/image-spinner* build/tv/images
cp app/images/tv* build/tv/images
cp app/images/spinner.gif build/tv/images
cp app/images/noimage.png build/tv/images
cp -r app/lang build/tv/
cp app/vendor/moment.js build/tv/vendor
cp app/vendor/sidjs-0.1.js build/tv/vendor
cp app/index.tv.optimized.html build/tv/index.html
cp app/app.tv.tv.optimized.js build/tv/app.js
cp app/todate.js build/tv/
cp app/prettystatus.js build/tv/
rm app/app.tv.tv.optimized.js
echo "Prepare tv version... done"

echo "Prepare Samsung Smart TV version..."
mkdir -p build/samsungtv
mkdir -p build/samsungtv/css
mkdir -p build/samsungtv/images
mkdir -p build/samsungtv/vendor
cp app/css/samsung.* build/samsungtv/css
cp app/images/image-spinner* build/samsungtv/images
cp app/images/samsung-* build/samsungtv/images
cp app/images/tv-* build/samsungtv/images
cp app/images/spinner.gif build/samsungtv/images
cp app/images/noimage.png build/samsungtv/images
cp app/images/navhelper_* build/samsungtv/images
cp -r app/lang build/samsungtv/
cp app/vendor/json2.js build/samsungtv/vendor
cp app/vendor/moment.js build/samsungtv/vendor
cp app/vendor/sidjs-0.1.js build/samsungtv/vendor
cp app/index.samsung.optimized.html build/samsungtv/index.html
cp app/app.tv.samsung.samsungtv.optimized.js build/samsungtv/app.js
cp app/todate.js build/samsungtv/
cp app/prettystatus.js build/samsungtv/
rm app/app.tv.samsung.samsungtv.optimized.js
echo "Prepare Samsung Smart TV version... done"

echo "Pack Samsung Smart TV version..."
cp config.xml build/samsungtv/config.xml
rm tasks/server/public/sleek.zip
cd build/samsungtv
zip -r ../../tasks/server/public/sleek.zip ./*
cd ../..
rm build/samsungtv/config.xml
echo "Pack Samsung Smart TV version... done"

echo "End time: $(date +"%T")"
echo "All done"