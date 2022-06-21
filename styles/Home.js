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
    top: 80,
    zIndex: 4,

    backgroundColor: COLORS.black,
  },
  topBtn: {
    position: "absolute",
    bottom: 10,
    padding: 6,
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333a",
    borderRadius: "25%",
    display: "none",
  },
  topBtnText: {
    fontSize: 18,
    color: COLORS.white,
  },
  topBtnShown: {
    display: "flex",
  },
});

export default styles;
