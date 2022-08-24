/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {useState} from 'react';
import {Alert} from 'react-native';
// import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import {registerClient} from '../action/registerClient';
import {accountInit} from '../action/accountInit';
import {encryptConnectToken} from '../helper';
import {createOpenWalletURL} from '../action/openWallet';
import {Config} from '../config/account.config';
import {useDownloadModule} from '../services/useDownloadModule';
import {moduleList} from '../DUMMY';
import {ActivityIndicator} from 'react-native';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native';

export const Home = () => {
  const navigation = useNavigation();

  const [userId] = useState('0795550300');
  const [phone] = useState('0795550300');
  const [config, setConfig] = useState(Config);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [process, enable] = useDownloadModule({moduleList});

  useEffect(() => {
    if (userId && phone) {
      init();
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      onOpenWallet();
    }
  }, [isLoggedIn]);

  // const onLogin = () => {
  //   if (userId && phone) {
  //     init();
  //   } else {
  //     Alert.alert('Vui lòng nhập đủ thông tin');
  //   }
  // };

  const init = async () => {
    Keyboard.dismiss();
    const connectToken = encryptConnectToken(
      JSON.stringify({
        userId,
        timestamp: Date.now(),
        phone,
      }),
      Config.keyEncrypt,
    );

    const responseRegisterClient = await registerClient();

    if (responseRegisterClient.status) {
      if (responseRegisterClient?.response?.Client?.Register?.succeeded) {
        const responseAccountInit = await accountInit({
          appToken: Config.appToken,
          connectToken,
          clientId:
            responseRegisterClient?.response?.Client?.Register?.clientId,
        });

        if (responseAccountInit.status) {
          const accessToken =
            responseAccountInit.response?.OpenEWallet?.Init?.accessToken ?? '';
          const updateToken =
            responseAccountInit.response?.OpenEWallet?.Init?.updateToken;

          if (responseAccountInit.response?.OpenEWallet?.Init?.succeeded) {
            setConfig({
              ...config,
              ...responseAccountInit.response?.OpenEWallet?.Init,
              connectToken,
              phone: phone
                ? phone
                : responseAccountInit.response?.OpenEWallet?.Init?.phone ?? '',
              clientId:
                responseRegisterClient.response?.Client?.Register?.clientId,
            });
            setIsLoggedIn(true);
          } else if (!accessToken && updateToken) {
            setConfig({
              ...config,
              ...responseAccountInit.response?.OpenEWallet?.Init,
              connectToken,
              phone: phone
                ? phone
                : responseAccountInit.response?.OpenEWallet?.Init?.phone ?? '',
              clientId:
                responseRegisterClient.response?.Client?.Register?.clientId,
            });
            setIsLoggedIn(true);
          } else {
            Alert.alert(
              responseAccountInit.response?.OpenEWallet?.Init?.message,
            );
          }
        } else {
          if (responseAccountInit.response[0]?.extensions?.code === 401) {
            Alert.alert(responseAccountInit.response[0]?.message);
          } else {
            Alert.alert(responseAccountInit?.response?.message);
          }
        }
      } else {
        if (responseRegisterClient.response[0]?.extensions?.code === 401) {
          Alert.alert(responseRegisterClient.response[0]?.message);
        } else {
          Alert.alert(responseRegisterClient?.response?.message);
        }
      }
    }
  };

  const onOpenWallet = () => {
    navigation.navigate('Module', {
      name: 'sdkWebapp3-main',
      suffix: createOpenWalletURL({config: config}),
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.login}>
              <View style={styles.groupInput}>
                <Text style={styles.text}>UserId</Text>
                <TextInput
                  placeholder="Nhập UserId"
                  placeholderTextColor="grey"
                  value={userId}
                  style={styles.input}
                  onChangeText={onChangeUserId}
                />
              </View>

              <View style={styles.groupInput}>
                <Text style={styles.text}>Phone</Text>
                <TextInput
                  placeholder="Nhập SĐT"
                  placeholderTextColor="grey"
                  value={phone}
                  style={styles.input}
                  onChangeText={onChangePhone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            <Button title="Login" onPress={onLogin} />

            {isLoggedIn && (
              <View style={styles.functionGroup}>
                {!enable && <Text>{process}</Text>}
                <TouchableOpacity
                  onPress={enable ? onOpenWallet : () => {}}
                  style={[
                    styles.button,
                    {backgroundColor: enable ? 'blue' : 'grey'},
                  ]}>
                  <Text style={styles.titleButton}>Open Wallet</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback> */}
      <View style={styles.container}>
        {!enable && <Text>{`Downloaded: ${process}`}</Text>}
        {!isLoggedIn && <ActivityIndicator size="large" />}
        {isLoggedIn && (
          <TouchableOpacity
            onPress={enable ? onOpenWallet : () => {}}
            style={[
              styles.button,
              {backgroundColor: enable ? 'blue' : 'grey', marginTop: 16},
            ]}>
            <Text style={styles.titleButton}>Open Wallet</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    padding: 16,
    flex: 1,
  },
  button: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  titleButton: {
    color: 'white',
  },
  functionGroup: {
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 8,
  },
  login: {
    flexDirection: 'column',
  },
  groupInput: {
    marginBottom: 16,
  },
  text: {
    marginBottom: 16,
  },
  spacer: {
    width: 32,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
