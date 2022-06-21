import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "45%",
    position: "relative",
    height: 125,
    borderRadius: 8,
    marginBottom: 16,
  },
  btn: {
    width: "100%",
    height: "100%",
    shadowColor: COLORS.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
  title: {
    color: COLORS.white,
    padding: 8,
    fontWeight: "700",
    fontSize: 16,
  },
  typeBox: {
    paddingHorizontal: 8,
  },

  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -5,
    right: -5,
  },
  image: {
    width: 100,
    height: 100,
    shadowColor: COLORS.black,
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});

export default styles;
