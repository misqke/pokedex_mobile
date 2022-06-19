import {
  StatusBar,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { PokeCard, Header } from "../components";
import styles from "../styles/Home";
import axios from "axios";

axios.defaults.baseURL = "https://misqke-pokemon-api.herokuapp.com/api/";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const loadPokemon = async () => {
      const { data } = await axios.post("search/?limit=40", {});
      setPokemon(data.data);
    };
    loadPokemon();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <FlatList
        data={pokemon}
        key={pokemon.number}
        numColumns={2}
        ListEmptyComponent={ActivityIndicator}
        renderItem={({ item }) => <PokeCard pokemon={item} />}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.listCol}
        initialNumToRender={12}
      />
    </SafeAreaView>
  );
};

export default Home;
