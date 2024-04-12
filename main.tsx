import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Otp from './screens/otp';
import Login from './screens/login';
import Home from './screens/home';
import { useEffect } from 'react';
import { store, useAppDispatch } from './redux/store';
import { getDataApi } from './redux/action';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
export default function Main() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDataApi())
    }, [dispatch])
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator initialRouteName='login'>
                    <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="otp" component={Otp} options={{ headerShown: false }} />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>

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
