#!/usr/bin/env bash

mkdir -p tmp

# uk
npm run build-uk
mv build tmp/uk

# ru
npm run build-ru
mv build tmp/ru

npm run build-en
cp -r tmp/. build

rm -rf tmp
