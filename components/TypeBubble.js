import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const TypeBubble = ({ type, fontSize = 14, ...props }) => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: COLORS.dark,
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderColor: COLORS[type],

        margin: 4,
        ...props,
      }}
    >
      <Text style={{ color: COLORS[type], fontWeight: "500", fontSize }}>
        {type}
      </Text>
    </View>
  );
};

export default TypeBubble;
