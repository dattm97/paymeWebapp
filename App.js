import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {moduleList} from './src/DUMMY';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home';
import {Module} from './src/screens/Module';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Module'} component={Module} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
