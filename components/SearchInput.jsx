import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { SearchBar } from 'react-native-screens'

const SearchInput = ({ value, onChangeText }) => {
  return (
    <View className="flex-row h-16 items-center px-4 py-2 bg-gray-300 rounded-lg mx-4 border border-green-50 ">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Search..."
            onChangeText={onChangeText}
            value={value}
            placeholderTextColor="gray"
        />
    </View>
  )
}

export default SearchInput