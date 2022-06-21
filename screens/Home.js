import {
  StatusBar,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  useWindowDimensions,
  Text,
  TouchableOpacity,
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
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const { width, height } = useWindowDimensions();
  const searchPos = useSharedValue(1);
  const scrollerRef = useRef();
  const btnRef = useRef();
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

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > 500) {
      btnRef.current.setNativeProps({
        style: {
          display: "flex",
        },
      });
    } else {
      btnRef.current.setNativeProps({
        style: {
          display: "none",
        },
      });
    }
  };

  const handleUpdateParams = (name, value) => {
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetParams = () => {
    setSearchParams({
      search: "",
      minNum: "1",
      maxNum: "898",
      types: [],
    });
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
    setLoading(true);
    const { data } = await axios.post("search", searchParams);
    setShowSearch(false);
    setPage(1);
    setPages(data.pages);
    setPokemon(data.data);
    setLoading(false);
  };

  const loadMore = async () => {
    if (page < pages) {
      setLoading(true);
      const { data } = await axios.post(
        `search/?page=${page + 1}`,
        searchParams
      );
      setLoading(false);
      setPokemon((prev) => [...prev, ...data.data]);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const { data } = await axios.post("search", {});
      setPokemon(data.data);
      setPages(data.pages);
      setPage(1);
      setLoading(false);
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
        ref={scrollerRef}
        data={pokemon}
        key={pokemon.number}
        numColumns={width > 800 ? 4 : width > 500 ? 3 : 2}
        extraData={width}
        ListEmptyComponent={
          loading ? (
            ActivityIndicator
          ) : (
            <Text style={{ color: "white", fontSize: 20 }}>
              No results found.
            </Text>
          )
        }
        renderItem={({ item }) => <PokeCard pokemon={item} />}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.listCol}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.2}
        removeClippedSubviews={true}
        onScroll={(e) => handleScroll(e)}
        scrollEventThrottle={20}
      />
      <TouchableOpacity
        ref={btnRef}
        style={styles.topBtn}
        onPress={() => scrollerRef.current.scrollToOffset(0, true)}
      >
        <Text style={styles.topBtnText}>To Top</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.searchContainer, animatedSearch]}>
        <Search
          submit={handleSubmitSearch}
          params={searchParams}
          updateInput={handleUpdateParams}
          updateTypes={handleTypePress}
          reset={handleResetParams}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
