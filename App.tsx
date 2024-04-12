import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Otp from './screens/otp';
import Login from './screens/login';
import Home from './screens/home';
import { useEffect } from 'react';
import { store, useAppDispatch } from './redux/store';
import { getDataApi } from './redux/action';
import { Provider } from 'react-redux';
import Main from './main';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
