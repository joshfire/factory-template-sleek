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
cp app/app.tv.samsung.samsungtv.optimized.js build/samsungtv/
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