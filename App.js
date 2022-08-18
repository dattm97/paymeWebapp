import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDownloadModule} from './src/services/useDownloadModule';
import {moduleList} from './src/DUMMY';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/scrreens/Home';
import {Module} from './src/scrreens/Module';

const App = () => {
  useDownloadModule({moduleList});
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Module'} component={Module} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
