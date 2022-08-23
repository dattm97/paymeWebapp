import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import useStaticServer from './useStaticServer';

export const LocalBrowser = ({moduleName, suffix}) => {
  const navigation = useNavigation();
  const [url] = useStaticServer({moduleName, suffix});
  const webview = useRef();

  if (!url) {
    return null;
  }
  const onMessage = event => {
    const data = JSON.parse(event.nativeEvent.data);

    if (data?.type === 'onClose') {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        ref={webview}
        javaScriptEnabled
        onMessage={onMessage}
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
