import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TextInput, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import {registerClient} from '../action/registerClient';
import {accountInit} from '../action/accountInit';
import {encryptConnectToken} from '../helper';
import {ACCOUNT_STATUS} from '../constant/account.constant';
import {createOpenWalletURL} from '../action/openWallet';
import {Config} from '../config/account.config';

export const Home = () => {
  const navigation = useNavigation();

  const [userId, onChangeUserId] = useState('');
  const [phone, onChangePhone] = useState('');
  const [config, setConfig] = useState(Config);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    if (userId && phone) {
      init();
    } else {
      Alert.alert('Vui lòng nhập đủ thông tin');
    }
  };

  const init = async () => {
    Keyboard.dismiss();
    const connectToken = encryptConnectToken(
      JSON.stringify({
        userId,
        timestamp: Date.now(),
        phone,
      }),
      'b5d8cf6c30d9cb4a861036bdde44c137',
    );

    const responseRegisterClient = await registerClient();

    if (responseRegisterClient.status) {
      if (responseRegisterClient?.response?.Client?.Register?.succeeded) {
        const responseAccountInit = await accountInit({
          appToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6OTUsImlhdCI6MTY1MTczMjM0Nn0.TFsg9wizgtWa7EbGzrjC2Gn55TScsJzKGjfeN78bhlg',
          connectToken,
          clientId:
            responseRegisterClient?.response?.Client?.Register?.clientId,
        });

        if (responseAccountInit.status) {
          const accessToken =
            responseAccountInit.response?.OpenEWallet?.Init?.accessToken ?? '';
          const updateToken =
            responseAccountInit.response?.OpenEWallet?.Init?.updateToken;
          let accountStatus = ACCOUNT_STATUS.NOT_ACTIVATED;

          if (responseAccountInit.response?.OpenEWallet?.Init?.succeeded) {
            if (
              responseAccountInit.response?.OpenEWallet?.Init?.kyc &&
              responseAccountInit.response?.OpenEWallet?.Init?.kyc?.kycId
            ) {
              if (
                responseAccountInit.response?.OpenEWallet?.Init?.kyc?.state ===
                'APPROVED'
              ) {
                accountStatus = ACCOUNT_STATUS.KYC_APPROVED;
              } else if (
                responseAccountInit.response?.OpenEWallet?.Init?.kyc?.state ===
                'PENDING'
              ) {
                accountStatus = ACCOUNT_STATUS.KYC_REVIEW;
              } else {
                accountStatus = ACCOUNT_STATUS.KYC_REJECTED;
              }
            } else {
              accountStatus = ACCOUNT_STATUS.NOT_KYC;
            }

            setConfig({
              ...config,
              ...responseAccountInit.response?.OpenEWallet?.Init,
              connectToken,
              accountStatus,
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
              accountStatus,
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
          console.log('==responseAccountInit', responseAccountInit);
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
      name: 'sdkWebapp-main',
      suffix: createOpenWalletURL({config: config}),
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                <TouchableOpacity onPress={onOpenWallet} style={styles.button}>
                  <Text style={styles.titleButton}>Open Wallet</Text>
                </TouchableOpacity>
                <Text>{`Đã login: ${JSON.stringify(config)}`}</Text>
              </View>
            )}
            {/* {moduleList.map(item => (
          <TouchableOpacity
            key={item.name}
            onPress={() =>
              navigation.navigate('Module', {
                name: item.name,
              })
            }>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))} */}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
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
    backgroundColor: 'blue',
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
