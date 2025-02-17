#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'http://gdut_yy.gitee.io/doc-ydkjs/' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@gitee.com:gdut_yy/doc-ydkjs.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:chanwingwah/You-Dont-Know-JS-zh.git master:gh-pages
# https://chanwingwah.github.io/You-Dont-Know-JS-zh
cd -