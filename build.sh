#!/bin/bash

cd css
cleancss -o index.css src/index.css

cd ../js
uglifyjs src/index.js > index.js
