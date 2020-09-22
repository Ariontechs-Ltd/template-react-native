
(cd ./src/pages && cp TemplatePage.js $1Page.js && sed -i.bak "s/Template/$1/g" $1Page.js && rm *.bak)
(cd ./src/pages/styles && cp TemplatePageStyles.js $1PageStyles.js )
(cd ./src/hooks && cp useTemplate.js use$1.js && sed -i.bak "s/Template/$1/g" use$1.js && rm *.bak)
(cd ./src/contexts && cp TemplateContext.js $1Context.js && sed -i.bak "s/Template/$1/g" $1Context.js && rm *.bak)
(cd ./src/reducers && cp TemplateReducer.js $1Reducer.js)