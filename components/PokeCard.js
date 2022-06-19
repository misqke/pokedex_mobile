import { View, Text, Image, Pressable } from "react-native";
import { COLORS } from "../constants";
import styles from "../styles/PokeCard";
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
