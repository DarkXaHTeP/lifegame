#!/usr/bin/env bash
set -o errexit #abort if any command fails

REPO=https://DarkXaHTeP:$GH_TOKEN@github.com/DarkXaHTeP/lifegame.git
cd public
git init
git config user.name "travis CI deploy"
git config user.email "travis"
echo "Configured repo for deploy"
git add .
git commit -m "Deployed to github pages"
git push --force --quiet $REPO master:gh-pages
echo "Successfully pushed changes to GitHub Pages"