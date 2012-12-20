# Optimize versions
cd app/
node joshfire-framework/scripts/optimize.js ios app.phone
node joshfire-framework/scripts/optimize.js android app.phone
node joshfire-framework/scripts/optimize.js tv app.tv
node joshfire-framework/scripts/optimize.js samsungtv app.tv.samsung
node joshfire-framework/scripts/optimize.js ios app.tablet
node joshfire-framework/scripts/optimize.js android app.tablet
node joshfire-framework/scripts/optimize.js ios app.desktop

# Pack Samsung Version
cd ..
mkdir samsung_export
cp -r app/css samsung_export
cp -r app/images samsung_export/
cp -r app/ui samsung_export/
cp -r app/vendor samsung_export/
cp -r app/lang samsung_export/
cp app/index.samsung.optimized.html samsung_export/index.html
cp app/app.tv.samsung.samsungtv.optimized.js samsung_export/
cp app/todate.js samsung_export/
cp app/prettystatus.js samsung_export/
cp config.xml samsung_export/config.xml
rm tasks/server/public/sleek.zip
out="../tasks/server/public/sleek.zip"
cd samsung_export
zip -r $out ./*
cd ..
rm -rf samsung_export

echo "Finished at $(date +"%T")"
