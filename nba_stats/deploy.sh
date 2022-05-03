#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ jahenner@hennerteach.com:/var/www/hennerteach.com/
echo "Deployment complete"