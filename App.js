import React from 'react';
import WebView from 'react-native-webview';
import useStaticServer from './src/services/StaticServer'; // add this line

const App = () => {
  const [url] = useStaticServer(); // add this line

  console.log('===url', url);

  return <WebView source={{uri: url}} />;
};

export default App;
