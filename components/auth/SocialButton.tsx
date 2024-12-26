import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SocialButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="w-[33px] h-[33px] items-center justify-center"
    >
      <Ionicons name={icon as any} size={24} />
    </TouchableOpacity>
  );
};
