import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import useStaticServer from './useStaticServer';

export const LocalBrowser = ({moduleName}) => {
  const [url] = useStaticServer({moduleName});
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        domStorageEnabled
        allowFileAccess
        originWhitelist={['*']}
        source={{uri: url}}
        style={{flex: 1}}
        onNavigationStateChange={state => console.log(state)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
