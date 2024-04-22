import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '~/navigators/Navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ms, s } from 'react-native-size-matters'
import Txt from '~/atoms/Txt'
import Box from '~/atoms/Box'

const Hello = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View>
      <Text>Hello</Text>
      <Button
        title='AuthNavigator'
        onPress={() => {
          navigation.navigate('AuthNavigator', { id: 2 })
        }}
      />
      <Text style={{ fontSize: ms(15) }}>skdjbs skdjbs</Text>
      <View style={{ width: 200 }}>
        <Txt text='slkdjslksdj' numberOfLines={1} />
      </View>
      <Box bg='red' width={300} height={300} row p={20} radius={20}>
        <Box width={50} height={50} bg='blue' borderWidth={10} borderColor='green' radius={5} />
        <Box width={50} height={50} bg='yellow' />
      </Box>
    </View>
  )
}

export default Hello