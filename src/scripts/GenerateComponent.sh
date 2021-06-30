
(cd ./src/components && cp Template.js $1.js && sed -i.bak "s/Template/$1/g" $1.js && rm *.bak)
(cd ./src/components/styles && cp TemplateStyles.js $1Styles.js )