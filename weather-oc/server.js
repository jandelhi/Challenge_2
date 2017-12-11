import React from 'react';
import {renderToString} from 'react-dom/server';
import Weather from "./src/components/Weather";

export const data = (context, callback) => {
  const {name} = context.params;
  const {staticPath} = context;

  const renderedApp = renderToString(<Weather/>);

  callback(null, {
    staticPath,
    name,
    app: renderedApp
  });

};
