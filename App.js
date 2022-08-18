import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import useStaticServer from './src/services/StaticServer'; // add this line

const App = () => {
  const [url] = useStaticServer(); // add this line
  const [isOpen, setIsOpen] = useState(false); // add this line

  console.log('===url', url);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title={isOpen ? 'Tắt' : 'Bấm'}
        onPress={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <WebView
          domStorageEnabled
          allowFileAccess
          originWhitelist={['*']}
          source={{uri: url}}
          style={{flex: 1}}
          onNavigationStateChange={state => console.log(state)}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
