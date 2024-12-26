import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text className="text-base font-medium capitalize text-zinc-800">
        {label}
      </Text>
      <View className="flex flex-row justify-between items-center px-5 py-3.5 mt-2 max-w-full bg-orange-50 rounded-2xl">
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={type === "password" && !showPassword}
          className="flex-1 text-base leading-none lowercase text-stone-300"
          accessibilityLabel={label}
        />
        {type === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-outline" : "eye-off-outline"} 
              size={24} 
              color="#f87171" 
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
