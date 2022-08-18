import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {moduleList} from '../DUMMY';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      {moduleList.map(item => (
        <TouchableOpacity
          key={item.name}
          onPress={() => navigation.navigate('Module', {name: item.name})}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

