import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { TypeBubble } from "../components";
import { COLORS } from "../constants";
import blendColors from "../util/colorBlender";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const CardHeader = ({ active }) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable
        style={active === "info" ? styles.headerBtnActive : styles.headerBtn}
      >
        <Text style={styles.headerText}>Info</Text>
      </Pressable>
      <Pressable
        style={active === "stats" ? styles.headerBtnActive : styles.headerBtn}
      >
        <Text style={styles.headerText}>Stats</Text>
      </Pressable>
      <Pressable
        style={
          active === "evolutions" ? styles.headerBtnActive : styles.headerBtn
        }
      >
        <Text style={styles.headerText}>Evolutions</Text>
      </Pressable>
    </View>
  );
};

const Pokemon = ({ route, navigation }) => {
  const pokemon = route.params;
  const [active, setActive] = useState("info");
  console.log(pokemon);
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

  const backgroundColor =
    pokemon.type.length === 1
      ? COLORS[pokemon.type[0]]
      : blendColors(COLORS[pokemon.type[0]], COLORS[pokemon.type[1]]);

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

  useEffect(() => {
    topValue.value = 125;
    scaleValue.value = 2.5;
    cardTop.value = 0;
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle="light-content" />
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
          <TypeBubble type={typ} key={typ} />
        ))}
      </View>
      <Animated.View
        style={[styles.card, animatedCard, { height: cardHeight }]}
      >
        <CardHeader active={active} />
        <ScrollView
          style={styles.scroller}
          contentContainerStyle={styles.scrollerContent}
          horizontal={true}
          pagingEnabled={true}
          onScroll={(e) => handleScroll(e)}
          scrollEventThrottle={40}
        >
          <View style={[styles.cardContent]}></View>
          <View style={[styles.cardContent]}></View>
          <View style={[styles.cardContent]}></View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    left: "50%",
    zIndex: 2,
  },
  card: {
    backgroundColor: COLORS.white,
    position: "absolute",
    left: 0,
    right: 0,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingTop: 20,
  },
  scroller: {
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerBtn: {
    padding: 6,
  },
  headerBtnActive: {
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
