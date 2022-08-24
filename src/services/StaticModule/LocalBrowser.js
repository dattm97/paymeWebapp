import React, {useEffect, useRef} from 'react';
import {BackHandler, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import useStaticServer from './useStaticServer';

export const LocalBrowser = ({moduleName, suffix}) => {
  const [url] = useStaticServer({moduleName, suffix});
  const webview = useRef();

  useEffect(() => {
    const backAction = () => {
      webview.current?.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () =>
      backHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  if (!url) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        ref={webview}
        bounces={false}
        javaScriptEnabled
        allowsBackForwardNavigationGestures
        scalesPageToFit
        scrollEnabled={false}
        onMessage={e => {}}
        originWhitelist={['*']}
        source={{uri: url}}
        injectedJavaScriptBeforeContentLoaded={`(function() {
          window.localStorage.setItem('staticWebviewToken', '${suffix}');
          void(0);
        })()`}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};
