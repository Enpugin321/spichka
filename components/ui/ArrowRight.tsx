import React from "react";
import { View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export const ArrowRight = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
      }}
    >
      <AntDesign name="right" size={20} color="#000" />
    </View>
  );
};
