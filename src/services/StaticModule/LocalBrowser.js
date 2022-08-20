import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import WebView from 'react-native-webview';
import useStaticServer from './useStaticServer';

export const LocalBrowser = ({moduleName, suffix}) => {
  const [url] = useStaticServer({moduleName, suffix});
  console.log('===url', url);
  if (!url) {
    return null;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        startInLoadingState
        javaScriptEnabled
        originWhitelist={['*']}
        source={{uri: url}}
        style={{flex: 1}}
        onNavigationStateChange={state => console.log(state)}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.log('====nativeEvent', nativeEvent);
          console.warn(
            'WebView received error status code: ',
            nativeEvent.statusCode,
          );
        }}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        renderError={errorName => <Text>{errorName}</Text>}
      />
    </SafeAreaView>
  );
};
