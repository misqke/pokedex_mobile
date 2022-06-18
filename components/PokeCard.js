import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { COLORS } from "../constants";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import blendColors from "../util/colorBlender";
import TypeBubble from "./TypeBubble";

const PokeCard = ({ pokemon }) => {
  const navigation = useNavigation();

  const backgroundColor =
    pokemon.type.length === 1
      ? COLORS[pokemon.type[0]]
      : blendColors(COLORS[pokemon.type[0]], COLORS[pokemon.type[1]]);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("pokemon", pokemon)}
      >
        <Text style={styles.title}>{pokemon.name}</Text>
        <View style={[styles.typeBox]}>
          {pokemon.type.map((pokiType) => (
            <TypeBubble type={pokiType} key={pokiType} />
          ))}
        </View>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{ uri: pokemon.img.small }}
            resizeMode="contain"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  container: {
    width: "45%",
    position: "relative",
    height: 125,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  btn: {
    width: "100%",
    height: "100%",
  },
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    transform: [{ skewX: "51deg" }],
  },
  bgTop: {
    left: "-49%",
  },
  bgBot: {
    left: "49%",
    right: 0,
  },
  title: {
    color: COLORS.white,
    padding: 8,
    fontWeight: "700",
    fontSize: 16,
  },
  typeBox: {
    paddingHorizontal: 8,
  },

  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  pushed: {
    position: "static",
  },
});
