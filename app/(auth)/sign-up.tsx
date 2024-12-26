import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SocialButton } from '@/components/auth/SocialButton';
import { InputField } from '@/components/auth/InputField';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
          Create Account
        </Text>
        <View className="w-8" />
      </View>

      <View className="mt-8 leading-none text-center capitalize text-zinc-800">
        <Text className='font-semibold text-xl'>Join Us</Text>
      </View>

      <View className="mt-3 text-sm text-zinc-800">
        <Text>Create an account to get started.</Text>
      </View>

      <View className="mt-12 w-full px-3">
        <InputField
          label="Full Name"
          placeholder="John Doe"
          value={fullName}
          onChange={setFullName}
        />
      </View>

      <View className="mt-6 w-full px-3">
        <InputField
          label="Email"
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
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/13285f79c2e5469bd9d24ad4d83e18b35ef3a72fe73ba4ec91694a47b93e3011?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
        />
      </View>

      <View className="mt-6 w-full px-3">
        <InputField
          label="Confirm Password"
          placeholder="●●●●●●●●"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/13285f79c2e5469bd9d24ad4d83e18b35ef3a72fe73ba4ec91694a47b93e3011?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
        />
      </View>

      <TouchableOpacity className="self-center px-12 py-2.5 mt-8 max-w-full text-xl font-semibold leading-none text-center text-red-400 capitalize bg-red-300 rounded-2xl">
        <Text>Sign Up</Text>
      </TouchableOpacity>

      <View className="self-center mt-16 text-sm font-light leading-none text-center text-zinc-800">
        <Text>or sign up with</Text>
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

      <TouchableOpacity 
        className="self-center mt-7"
        onPress={() => router.push("/sign-in")}
      >
        <Text className="text-sm font-light leading-none text-center text-red-400">
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignUp