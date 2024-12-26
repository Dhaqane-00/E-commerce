import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SocialButton } from '@/components/auth/SocialButton';
import { InputField } from '@/components/auth/InputField';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const socialButtons = [
    {
      icon: "logo-google",
      onPress: () => {},
    },
    {
      icon: "logo-apple",
      onPress: () => {},
    },
  ];
  return (
    <SafeAreaView className="flex flex-col items-start px-4 w-full bg-white min-h-screen">
      <View className="w-full flex flex-row items-center mb-6 mt-2">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="p-2"
        >
          <Ionicons name="arrow-back-outline" size={24} />
        </TouchableOpacity>
        <Text className="flex-1 text-xl font-semibold text-center text-zinc-800">
          Log In
        </Text>
        <View className="w-8" />
      </View>

      <View className="mt-8 leading-none text-center capitalize text-zinc-800">
        <Text className='font-semibold text-xl'>Welcome</Text>
      </View>

      <View className="mt-3 text-sm text-zinc-800">
        <Text>Please enter your details to proceed.</Text>
      </View>

      <View className="mt-12 w-full px-3">
        <InputField
          label="Username or email"
          placeholder="example@example.com"
          value={email}
          onChange={setEmail}
        />
      </View>

      <View className="mt-6 w-full px-3">
        <InputField
          label="Password"
          placeholder="●●●●●●●●"
          type="password"
          value={password}
          onChange={setPassword}
          icon="eye-off"
        />
      </View>

      <TouchableOpacity className="self-center px-28 py-2.5 mt-8 max-w-full text-xl font-semibold leading-none text-center text-red-400 capitalize bg-red-300 rounded-2xl">
        <Text>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity className="self-center mt-5">
        <Text className="text-sm font-semibold text-center text-zinc-800">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View className="self-center mt-52">
        <Text className="text-sm font-light leading-none text-center text-zinc-800">
          or sign up with
        </Text>
      </View>

      <View className="flex flex-row gap-5 self-center mt-5">
        {socialButtons.map((button, index) => (
          <SocialButton 
            key={index}
            icon={button.icon as "logo-google" | "logo-apple"} 
            onPress={button.onPress}
          />
        ))}
      </View>

      <TouchableOpacity className="self-center mt-7">
        <Text className="text-sm font-light leading-none text-center text-red-400">
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignIn