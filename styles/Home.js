import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    padding: 8,
    window: "100%",
    position: "relative",
    alignItems: "center",
  },
  listCol: {
    justifyContent: "space-evenly",
    width: "100%",
  },
  searchContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 90,
    zIndex: 4,
    backgroundColor: COLORS.black,
  },
});

export default styles;
