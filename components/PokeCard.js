import {
  View,
  Text,
  Image,
  Pressable,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../constants";
import styles from "../styles/PokeCard";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import TypeBubble from "./TypeBubble";

const PokeCard = ({ pokemon }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    navigation.navigate("pokemon", pokemon);
    setLoading(false);
  };

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
      {loading ? (
        <ActivityIndicator
          color={"#000"}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      ) : (
        <Pressable style={styles.btn} onPress={() => handleClick()}>
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
      )}
    </View>
  );
};

export default PokeCard;
