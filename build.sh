cd tasks/

jake compile:less

cd ../app/

# Optimize versions
node joshfire-framework/scripts/optimize.js ios app.phone
node joshfire-framework/scripts/optimize.js android app.phone
node joshfire-framework/scripts/optimize.js tv app.tv
node joshfire-framework/scripts/optimize.js googletv app.tv.google
node joshfire-framework/scripts/optimize.js samsungtv app.tv.samsung
node joshfire-framework/scripts/optimize.js ios app.tablet
node joshfire-framework/scripts/optimize.js android app.tablet
node joshfire-framework/scripts/optimize.js ios app.desktop

cd ..

# Build folder
rm -fr build
mkdir -p build/app/

echo "Moving files around..."

# Copy resources to the build folder
cp -r app/{index.*.optimized.html,css,images,ui,vendor,lang} build/app/
cp app/todate.js build/app/
cp app/prettystatus.js build/app/
# cp config.xml build/config.xml
cp package.json build/

# Copy optimized js files
cp app/app.*.optimized.js build/app/

# Copy marketing images
cp -r marketing/ build/marketing/

# Pack Samsung Version
mkdir samsung_export
cp -r build/app/{css,images,ui,vendor,lang} samsung_export
cp build/app/index.samsung.optimized.html samsung_export/index.html
cp build/app/app.tv.samsung.samsungtv.optimized.js samsung_export/
cp app/todate.js samsung_export/
cp app/prettystatus.js samsung_export/
cp config.xml samsung_export/config.xml
rm tasks/server/public/sleek.zip
out="../tasks/server/public/sleek.zip"
cd samsung_export

echo "Archiving samsung_export..."
zip -r $out ./*
cd ..
rm -rf samsung_export

echo "Finished at $(date +"%T")"