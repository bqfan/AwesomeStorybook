import React from "react";
import { Pressable, Text, Alert, Platform } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  const handlePress = () => {
    if (Platform.OS === "web") {
      window.alert(`You pressed the "${text}"`);
    } else {
      Alert.alert("Button Pressed", `You pressed the "${text}"`);
    }
    onPress();
  };

  return (
    <Pressable
      className="self-center px-8 py-2 bg-teal-700 rounded-lg web:hover:bg-teal-600 native:active:bg-teal-600"
      onPress={handlePress}
    >
      <Text className="text-white text-lg font-bold">{text}</Text>
    </Pressable>
  );
};