import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../constants";
import styles from "../styles/PokeCard";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import TypeBubble from "./TypeBubble";

const PokeCard = ({ pokemon }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS[pokemon.type[0]],
          width: width > 500 ? "22%" : "45%",
        },
      ]}
    >
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("pokemon", pokemon)}
      >
        <View style={styles.row}>
          <Text style={styles.title}>{pokemon.name}</Text>
          <Text style={styles.title}>{`#${pokemon.number}`}</Text>
        </View>
        <View style={[styles.typeBox]}>
          {pokemon.type.map((pokiType) => (
            <TypeBubble type={pokiType} key={pokiType} />
          ))}
        </View>
        <View style={styles.imageBox}>
          <Image
            style={[
              styles.image,
              {
                width: width > 850 ? 125 : 100,
                height: width > 850 ? 125 : 100,
              },
            ]}
            source={{ uri: pokemon.img.small }}
            resizeMode="contain"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PokeCard;
