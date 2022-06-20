import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import styles from "../styles/Pokemon";
import { TypeBubble } from "../components";
import { COLORS } from "../constants";
import blendColors from "../util/colorBlender";
import React, { useEffect, useState, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { RadialGradient } from "react-native-gradients";
import axios from "axios";

const CardHeader = ({ active, press }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        hitSlop={20}
        onPress={() => press("info", 0)}
        style={active === "info" ? styles.headerBtnActive : styles.headerBtn}
      >
        <Text style={styles.headerText}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={20}
        onPress={() => press("stats", 1)}
        style={active === "stats" ? styles.headerBtnActive : styles.headerBtn}
      >
        <Text style={styles.headerText}>Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={20}
        onPress={() => press("evolutions", 2)}
        style={
          active === "evolutions" ? styles.headerBtnActive : styles.headerBtn
        }
      >
        <Text style={styles.headerText}>Evolutions</Text>
      </TouchableOpacity>
    </View>
  );
};

const Pokemon = ({ route, navigation }) => {
  const pokemon = route.params;
  const cardRef = useRef();
  const [active, setActive] = useState("info");
  const { width, height } = useWindowDimensions();
  const cardHeight = height - 255;

  const topValue = useSharedValue(500);
  const scaleValue = useSharedValue(1);
  const cardTop = useSharedValue(-cardHeight);

  let animatedImage = useAnimatedStyle(() => {
    return {
      top: withSpring(topValue.value),
      transform: [
        { scaleX: withSpring(scaleValue.value) },
        { scaleY: withSpring(scaleValue.value) },
        { translateX: -15 },
      ],
    };
  });

  let animatedCard = useAnimatedStyle(() => {
    return {
      bottom: withTiming(cardTop.value, { duration: 750 }),
    };
  });

  // const backgroundColor =
  //   pokemon.type.length === 1
  //     ? COLORS[pokemon.type[0]]
  //     : blendColors(COLORS[pokemon.type[0]], COLORS[pokemon.type[1]]);

  const handleScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    if (x >= width * 2 - width / 3) {
      setActive("evolutions");
    } else if (x >= width - width / 3) {
      setActive("stats");
    } else {
      setActive("info");
    }
  };

  const handleEvoPress = async (num) => {
    const { data } = await axios.get(`search/?num=${num}`);
    navigation.setParams(data.data);
    cardRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const handleTabPress = (tab, i) => {
    setActive(tab);
    cardRef.current.scrollTo({ x: i * width, y: 0, animated: true });
  };

  useEffect(() => {
    topValue.value = 115;
    scaleValue.value = 2.3;
    cardTop.value = 0;
  });

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.gradient}>
        <RadialGradient
          x="50%"
          y="50%"
          rx="50%"
          ry="50%"
          colorList={[
            { offset: "0%", color: COLORS[pokemon.type[0]], opacity: "1" },
            { offset: "30%", color: COLORS[pokemon.type[0]], opacity: ".7" },
            { offset: "95%", color: COLORS.black, opacity: "1" },
          ]}
        />
        <Image
          source={require("../assets/pokeball.png")}
          style={styles.pokeball}
        />
      </View>
      <Animated.Image
        source={{ uri: pokemon.img.small }}
        style={[styles.image, animatedImage]}
      />
      <View style={[styles.header]}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/arrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{pokemon.name}</Text>
        <Text style={styles.title}>{`# ${pokemon.number}`}</Text>
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        {pokemon.type.map((typ) => (
          <TypeBubble type={typ} key={typ} borderWidth={1} />
        ))}
      </View>
      <Animated.View
        style={[styles.card, animatedCard, { height: cardHeight }]}
      >
        <CardHeader active={active} press={handleTabPress} />
        <ScrollView
          ref={cardRef}
          style={styles.scroller}
          contentContainerStyle={styles.scrollerContent}
          horizontal={true}
          pagingEnabled={true}
          onScroll={(e) => handleScroll(e)}
          scrollEventThrottle={40}
        >
          <View style={[styles.cardContent, { width }]}>
            <Text
              style={[styles.text, { fontSize: 18, fontWeight: "600" }]}
            >{`${pokemon.info[3].value} Pokemon`}</Text>

            <View style={styles.row}>
              <View style={styles.colBox}>
                <Text style={styles.underline}>Height</Text>
                <Text style={styles.text}>{pokemon.info[0].value}</Text>
              </View>
              <View style={styles.colBox}>
                <Text style={styles.underline}>Wieght</Text>
                <Text style={styles.text}>{pokemon.info[1].value}</Text>
              </View>
              <View style={styles.colBox}>
                <Text style={styles.underline}>Gender</Text>
                <Text style={styles.text}>
                  {Array.isArray(pokemon.info[2].value)
                    ? pokemon.info[2].value.join(" or ")
                    : pokemon.info[2].value}
                </Text>
              </View>
            </View>
            <View style={styles.weaknesses}>
              <Text style={styles.underline}>Weaknesses</Text>
              <View style={styles.weaknessList}>
                {pokemon.weaknesses.map((weakness) => (
                  <TypeBubble
                    type={weakness}
                    key={weakness}
                    borderWidth={1}
                    fontSize={16}
                  />
                ))}
              </View>
            </View>
            <View style={styles.descBox}>
              <Text style={styles.descText}>{pokemon.desc1}</Text>
              {pokemon.desc1 !== pokemon.desc2 && (
                <Text style={styles.descText}>{pokemon.desc2}</Text>
              )}
            </View>
          </View>
          <View style={[styles.cardContent, { width }]}>
            <View style={styles.statsTable}>
              {pokemon.stats.map((stat) => (
                <View key={stat.name} style={styles.statRow}>
                  <View style={styles.statTextBox}>
                    <Text style={styles.statText}>
                      {stat.name === "Special Defense"
                        ? "Sp Def"
                        : stat.name === "Special Attack"
                        ? "Sp Atk"
                        : stat.name}
                    </Text>
                  </View>
                  <View style={styles.statOutter}>
                    <View
                      style={[
                        styles.statInner,
                        { width: `${Math.floor((stat.value / 15) * 100)}%` },
                      ]}
                    ></View>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={[styles.cardContent, { width }]}>
            {pokemon.evolutions.length === 1 && (
              <Text>This Pokemon does not evolve.</Text>
            )}
            <View style={styles.evoContainer}>
              {pokemon.evolutions.map((poki) => (
                <Pressable
                  style={styles.evoBtn}
                  key={poki.num}
                  onPress={() => handleEvoPress(poki.num)}
                >
                  <Image
                    source={{ uri: poki.img }}
                    style={[styles.evoImage, { zIndex: 2 }]}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Pokemon;
