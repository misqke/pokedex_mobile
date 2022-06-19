import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    width: "45%",
    position: "relative",
    height: 125,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  btn: {
    width: "100%",
    height: "100%",
  },
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    transform: [{ skewX: "51deg" }],
  },
  bgTop: {
    left: "-49%",
  },
  bgBot: {
    left: "49%",
    right: 0,
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
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  pushed: {
    position: "static",
  },
});

export default styles;
