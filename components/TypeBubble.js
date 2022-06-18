import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const TypeBubble = ({ type }) => {
  return (
    <View
      style={{
        borderRadius: 8,
        backgroundColor: "#bbbb",
        alignSelf: "flex-start",
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginVertical: 4,
      }}
    >
      <Text style={{ color: COLORS.white }}>{type}</Text>
    </View>
  );
};

export default TypeBubble;
