import * as React from 'react';
import { RootStackParamList } from "./types";
import { USER, USER_DETAIL } from './screens';
import User from '../containers/User';
import { useColorScheme } from 'react-native';
import UserDetail from '../containers/UserDetail';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Stack.Navigator initialRouteName={USER} screenOptions={{
      headerShadowVisible: false,
      headerTintColor: isDarkMode ? Colors.white : Colors.darker,
      headerStyle: {
        backgroundColor: isDarkMode ? Colors.darker : Colors.white
      }
    }}>
      <Stack.Screen name={USER} component={User} options={{ title: "User's List" }} />
      <Stack.Screen name={USER_DETAIL} component={UserDetail} options={{ title: 'User Detail' }} />
    </Stack.Navigator>
  );
};

export default AppStack;