import { View, Text, TextInput, Button, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Login = ({ navigation }: { navigation: NativeStackNavigationProp<{ otp: { name: string } }, 'otp'> }) => {
    const [num, setNum] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const submitLogin = async () => {
        if (num && pass) {
            ToastAndroid.show(`login Successfully`, ToastAndroid.SHORT)
            navigation.navigate('otp', { name: "" })
        } else {
            ToastAndroid.show(`Empty value is not allowed`, ToastAndroid.SHORT)
        }
    }
    return (
        <ScrollView className="w-full flex flex-col h-full border bg-red-500 ">
            <View className='w-full h-[200px] bg-white rounded-bl-full'></View>
            <View className='w-[90%] mt-10  h-fit flex flex-col mx-auto p-4  rounded-lg bg-white  '>
                <Text className='text-[25px] text-center' >Login form</Text>
                <View className='flex flex-col pt-10 pb-4 justify-center items-center gap-4'>
                    <TextInput keyboardType='numeric' value={num} onChangeText={(val) => setNum(val)} placeholder='Enter mobile' className='w-[100%] h-[45px] text-left pl-4 rounded-full border-[0.5px]' />
                    <TextInput   secureTextEntry={true} value={pass} onChangeText={(val) => setPass(val)} placeholder='Enter password' className='w-[100%] h-[45px] text-left pl-4 rounded-full border-[0.5px]' />
                </View>
                <Button

                    title="Login"
                    onPress={() => submitLogin()}
                />
            </View>
            <View className='w-full h-[200px] mt-[55px] bg-white rounded-tr-full'></View>
        </ScrollView>
    )
}

export default Login