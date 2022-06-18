import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        width: "100%",
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "700" }}>Pokedex</Text>
    </View>
  );
};

export default Header;
