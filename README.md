# All time book search page

[![Build Status](https://travis-ci.org/ferzerkerx/lucene-demo-frontend.svg?branch=master)](https://travis-ci.org/ferzerkerx/lucene-demo-frontend)
[![Quality Gate](https://sonarcloud.io/api/badges/gate?key=lucene-demo-frontend)](https://sonarcloud.io/dashboard/index/lucene-demo-frontend)

## Dependencies
- Expects an endpoint on localhost:8080 implemented in this other repository: https://github.com/ferzerkerx/lucene-demo


## Description
 - Auto complete input backed by an endpoint using Lucene
 - Used to search all time books listed here: https://www.goodreads.com/list/show/2681.Time_Magazine_s_All_Time_100_Novels
 - endpoint usage: http://<server>:<port>/books?keyword="[bookTitle|authorName]"


 ![alt](https://github.com/ferzerkerx/lucene-demo-frontend/raw/master/lucene-demo-frontend.png)
 
 ## Usage
 - npm install
 - npm start