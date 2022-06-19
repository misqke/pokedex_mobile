import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const TypeBubble = ({ type, ...props }) => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: "#bbbb",
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 4,
        margin: 4,
        ...props,
      }}
    >
      <Text style={{ color: COLORS.white }}>{type}</Text>
    </View>
  );
};

export default TypeBubble;
