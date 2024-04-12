import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/store'
import { Users } from '../redux/reducer'

const Home = () => {
    const { users }: { users: Users[] } = useAppSelector((state) => state.dummy)
    // console.log(users)
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <View style={{ width: '100%', height: 200, backgroundColor: 'white', borderBottomLeftRadius: 500 }}></View>
            <Text style={{ paddingLeft: 10, fontSize: 35, fontWeight: 'bold', textAlign: 'justify', paddingTop: 10 }}>Welcome to see user</Text>
            <View style={{ width: '100%', height: 520, backgroundColor: 'white', borderTopRightRadius: 250 }}>
                <FlatList
                    data={users}
                    keyExtractor={(u: Users) => u.id.toString()}
                    contentContainerStyle={{ alignItems: 'center' }}
                    renderItem={({ item: u }) => (
                        <View className='w-[250px] rounded-xl h-[300px] py-8 px-5 border mt-28 '>
                            <Text className='text-black mt-4 text-justify'> Email : {u?.email}</Text>
                            <Text className='text-black mt-4 text-justify'> Name : {u?.name}</Text>
                            <Text className='text-black mt-4 text-justify'> Body : {u?.body}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default Home