import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import Box from '~/atoms/Box'
import Press from '~/atoms/Press'
import Txt from '~/atoms/Txt'

const Hello = () => {
  return (
    <View style={{ flex: 1 }}>
      <Press
        onPress={() => console.log('abc')}
        bg={'blue'}
        h={60}
        m={20}
        p={10}
        ai='center'
        jc='center'
        radius={10}
        position='absolute'
        style={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Txt size={20} color={'white'}>ok</Txt>
      </Press>
      <Pressable
        onPress={() => console.log('abc')}
        style={{ backgroundColor: 'red', height: 60, flex: undefined }}
      >
        <Text>ok</Text>
      </Pressable>

      <Box w={200} h={200} bg='red' styles={{backgroundColor: 'blue'}}>
        <Box w={50} h={50} bg='yellow' />
        <Box w={50} h={50} bg='green' position='absolute' bottom={20} />
      </Box>
      <TouchableOpacity>
        <Txt>abc</Txt>
      </TouchableOpacity>
    </View>
  )
}

export default Hello