import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { InputField } from "./InputField";
import { SocialButton } from "./SocialButton";

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const socialButtons = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3cefd805e302c7a37fefe7d428814695a770f1e42462016b02d7bb22adef5142?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
      onPress: () => {},
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/01fc4330e4a275b2715641958ebed75769b7b00cc505b7bba11eee6f3324e642?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
      onPress: () => {},
    },
  ];

  return (
    <View className="flex overflow-hidden flex-col items-start px-6 py-16 mx-auto w-full bg-white rounded-3xl max-w-[480px]">
      <View className="flex gap-5 justify-between max-w-full text-xl font-semibold leading-none text-center text-red-300 capitalize w-[201px]">
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/acd685f420f3ec631bc6bd32ec600de5eddeee69b9d6516a0d0389205a01f03f?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be",
          }}
          className="object-contain shrink-0 self-start aspect-[1.1] w-[21px]"
        />
        <View>
          <Text>Log In</Text>
        </View>
      </View>

      <View className="mt-12 text-xl font-semibold leading-none text-center capitalize text-zinc-800">
        <Text>Welcome</Text>
      </View>

      <View className="mt-3 text-sm text-zinc-800">
        <Text>Please enter your details to proceed.</Text>
      </View>

      <View className="mt-16 w-full">
        <InputField
          label="Username or email"
          placeholder="example@example.com"
          value={email}
          onChange={setEmail}
        />
      </View>

      <View className="mt-6 w-full">
        <InputField
          label="Password"
          placeholder="●●●●●●●●"
          type="password"
          value={password}
          onChange={setPassword}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/13285f79c2e5469bd9d24ad4d83e18b35ef3a72fe73ba4ec91694a47b93e3011?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
        />
      </View>

      <TouchableOpacity className="self-center px-16 py-2.5 mt-12 max-w-full text-xl font-semibold leading-none text-center text-red-400 capitalize bg-red-300 rounded-2xl w-[186px]">
        <Text>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity className="self-center mt-5">
        <Text className="text-sm font-semibold text-center text-zinc-800">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <View className="self-center mt-36 text-sm font-light leading-none text-center text-zinc-800">
        <Text>or sign up with</Text>
      </View>

      <View className="flex flex-row gap-5 self-center mt-5">
        {socialButtons.map((button, index) => (
          <SocialButton key={index} {...button} />
        ))}
      </View>

      <TouchableOpacity className="self-center mt-7">
        <Text className="text-sm font-light leading-none text-center text-red-400">
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};
