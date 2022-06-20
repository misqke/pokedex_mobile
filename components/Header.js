import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = ({ press }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "700", color: "#fff" }}>
        Pokedex
      </Text>
      <TouchableOpacity onPress={() => press()}>
        <Image
          source={require("../assets/search.png")}
          style={{ width: 35, height: 35 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
