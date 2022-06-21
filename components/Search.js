import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import styles from "../styles/Search";
import { COLORS } from "../constants";

const allTypes = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

const Search = ({ params, submit, updateInput, updateTypes, reset }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 10,
      }}
      style={styles.searchContainer}
    >
      <TextInput
        style={styles.searchInput}
        placeholder="name or number"
        value={params.search}
        onChangeText={(t) => updateInput("search", t)}
        onSubmitEditing={() => submit()}
      />
      <View style={styles.row}>
        <View style={styles.numInputBox}>
          <Text style={styles.numText}>Min Num</Text>
          <TextInput
            style={styles.numInput}
            keyboardType="number-pad"
            value={params.minNum}
            onChangeText={(t) => updateInput("minNum", t)}
          />
        </View>
        <View style={styles.numInputBox}>
          <Text style={styles.numText}>Max Num</Text>
          <TextInput
            style={styles.numInput}
            keyboardType="number-pad"
            value={params.maxNum}
            onChangeText={(t) => updateInput("maxNum", t)}
          />
        </View>
      </View>
      <View style={styles.typesContainer}>
        <Text style={styles.typesTitle}>Types</Text>
        <View style={styles.typesInnerBox}>
          {allTypes.map((typ) => (
            <Pressable
              key={typ}
              style={[
                styles.typeBox,
                {
                  backgroundColor: params.types.includes(typ)
                    ? COLORS[typ]
                    : COLORS.black,
                },
              ]}
              onPress={() => updateTypes(typ)}
            >
              <Text
                style={[
                  styles.typeText,
                  {
                    color: params.types.includes(typ)
                      ? COLORS.white
                      : COLORS[typ],
                  },
                ]}
              >
                {typ}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <Pressable
        style={[styles.btn, styles.submitBtn]}
        onPress={() => submit()}
      >
        <Text style={styles.submitText}>Search</Text>
      </Pressable>
      <Pressable style={[styles.btn, styles.resetBtn]} onPress={() => reset()}>
        <Text style={styles.submitText}>Reset</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Search;
