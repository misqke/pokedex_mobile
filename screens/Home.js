import {
  StatusBar,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { PokeCard, Header, Search } from "../components";
import styles from "../styles/Home";
import axios from "axios";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

axios.defaults.baseURL = "https://misqke-pokemon-api.herokuapp.com/api/";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const { width, height } = useWindowDimensions();
  const searchPos = useSharedValue(1);
  const [searchParams, setSearchParams] = useState({
    search: "",
    minNum: "1",
    maxNum: "898",
    types: [],
  });

  const animatedSearch = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(searchPos.value * width, { duration: 300 }) },
      ],
    };
  });

  const handleUpdateParams = (name, value) => {
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypePress = (type) => {
    if (searchParams.types.includes(type)) {
      const newTypes = searchParams.types.filter((item) => item !== type);
      setSearchParams((prev) => ({ ...prev, types: newTypes }));
    } else {
      setSearchParams((prev) => ({ ...prev, types: [...prev.types, type] }));
    }
  };

  const handleShowSearchPress = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSubmitSearch = async () => {
    const { data } = await axios.post("search", searchParams);
    setPage(1);
    setPages(data.pages);
    setPokemon(data.data);
    setShowSearch(false);
  };

  const loadMore = async () => {
    if (page < pages) {
      const { data } = await axios.post(
        `search/?page=${page + 1}`,
        searchParams
      );
      setPokemon((prev) => [...prev, ...data.data]);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadPokemon = async () => {
      const { data } = await axios.post("search", {});
      setPokemon(data.data);
      setPages(data.pages);
      setPage(1);
    };
    loadPokemon();
  }, []);

  useEffect(() => {
    if (showSearch) {
      searchPos.value = 0;
    } else {
      searchPos.value = 1;
    }
  }, [showSearch]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header press={handleShowSearchPress} />
      <FlatList
        data={pokemon}
        key={pokemon.number}
        numColumns={2}
        ListEmptyComponent={ActivityIndicator}
        renderItem={({ item }) => <PokeCard pokemon={item} />}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.listCol}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.2}
        removeClippedSubviews={true}
      />
      <Animated.View style={[styles.searchContainer, animatedSearch]}>
        <Search
          submit={handleSubmitSearch}
          params={searchParams}
          updateInput={handleUpdateParams}
          updateTypes={handleTypePress}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
