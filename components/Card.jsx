import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import pic from '../assets/images/pic.png'

const Card = ({image, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <View className='flex-col items-center h-[120px] w-[110px] bg-white rounded-lg shadow-sm m-4 '>
        <Image 
          source={image}
          alt='Image'
          className='h-full w-full rounded-lg'
          resizeMode="cover"
        />
        <View className='absolute mt-24 left-1'>
            <Text className=' text-white'>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card