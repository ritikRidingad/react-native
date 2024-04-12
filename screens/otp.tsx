import { View, Text, StyleSheet, TextInput, Button, ToastAndroid, ScrollView } from 'react-native'
import React, { useRef } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Otp = ({ navigation }: { navigation: NativeStackNavigationProp<{ home: { name: string } }, 'home'> }) => {
  const input1 = useRef<TextInput>(null)
  const input2 = useRef<TextInput>(null)
  const input3 = useRef<TextInput>(null)
  const input4 = useRef<TextInput>(null)
  const input5 = useRef<TextInput>(null)
  const input6 = useRef<TextInput>(null)

  let otp: string[] = []
  const focusOnNextInput = (txt: string, nextInput: React.RefObject<TextInput>, backInput: React.RefObject<TextInput>) => {
    if (txt.length >= 1 && nextInput) {
      otp.push(txt)
      nextInput.current?.focus()
    } else if (!txt.length && backInput) {
      backInput.current?.focus()
    }
  }

  const submitOtp = () => {
    if (otp.length != 6) {
      ToastAndroid.show(`Empty value is not allowed`, ToastAndroid.SHORT);
    } else {
      input1.current?.clear();
      input2.current?.clear();
      input3.current?.clear();
      input4.current?.clear();
      input5.current?.clear();
      input6.current?.clear();
      input1.current?.focus();
      ToastAndroid.show(` ${otp.join('')} Otp submitted! `, ToastAndroid.SHORT);
      navigation.navigate("home", { name: "" })
      otp.length = 0
    }
  }
  return (
    <ScrollView className="w-full h-fit flex flex-col  border bg-red-500 ">
      <View className='w-full h-[200px] bg-white rounded-bl-full'></View>
      <View className='w-[90%] mt-20 mx-auto h-fit flex flex-col  p-4  rounded-lg bg-white  '>
        <Text className='text-[25px] text-center' > Enter Otp any number</Text>

        <View className='flex flex-row pt-10 pb-4 justify-center items-center gap-4'>
          <TextInput keyboardType='numeric' maxLength={1} ref={input1} onChangeText={(txt) => focusOnNextInput(txt, input2, input1)} placeholder='' className='w-[25px] h-[25px] text-center border-b' />
          <TextInput keyboardType='numeric' maxLength={1} ref={input2} onChangeText={(txt) => focusOnNextInput(txt, input3, input1)} placeholder='' className='w-[25px] h-[25px] text-center border-b' />
          <TextInput keyboardType='numeric' maxLength={1} ref={input3} onChangeText={(txt) => focusOnNextInput(txt, input4, input2)} placeholder='' className='w-[25px] h-[25px] text-center border-b' />
          <TextInput keyboardType='numeric' maxLength={1} ref={input4} onChangeText={(txt) => focusOnNextInput(txt, input5, input3)} placeholder='' className='w-[25px] h-[25px] text-center border-b' />
          <TextInput keyboardType='numeric' maxLength={1} ref={input5} onChangeText={(txt) => focusOnNextInput(txt, input6, input4)} placeholder='' className='w-[25px] h-[25px] text-center border-b' />
          <TextInput keyboardType='numeric' maxLength={1} ref={input6} onChangeText={(txt) => focusOnNextInput(txt, input6, input5)} placeholder='' className='w-[25px] h-[25px] text-center border-b' />
        </View>
        <Button
          title="Submit"
          onPress={() => submitOtp()}
        />
      </View>
      <View className='w-full h-[200px] mt-[105px] bg-white rounded-tr-full'></View>
    </ScrollView >
  )
}

export default Otp