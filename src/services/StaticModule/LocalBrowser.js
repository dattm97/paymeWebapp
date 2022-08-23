import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import WebView from 'react-native-webview';
import useStaticServer from './useStaticServer';
import RNFS from 'react-native-fs';

export const LocalBrowser = ({moduleName, suffix}) => {
  const [url] = useStaticServer({moduleName, suffix});
  const webview = useRef();

  if (!url) {
    return null;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        ref={webview}
        startInLoadingState
        javaScriptEnabled
        onMessage={e => {}}
        originWhitelist={['*']}
        source={{uri: url}}
        injectedJavaScriptBeforeContentLoaded={`(function() {
          window.localStorage.setItem('staticWebviewToken', '${suffix}');
          void(0);
        })()`}
        style={{flex: 1}}
        onNavigationStateChange={state => {
          console.log(state);
        }}
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
