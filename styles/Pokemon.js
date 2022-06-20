import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "50%",
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
    backgroundColor: COLORS.black,
    position: "absolute",
    left: 0,
    right: 0,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderColor: COLORS.gray,
    borderBottomWidth: 0,
    borderWidth: 1,
    zIndex: 2,
  },
  scroller: {
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerText: {
    color: COLORS.white,
  },
  headerBtn: {
    padding: 15,
    flex: 1,
    alignItems: "center",
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    borderStyle: "solid",
    zIndex: 3,
  },
  headerBtnActive: {
    borderBottomColor: "blue",
    borderBottomWidth: 1,
    borderStyle: "solid",
    padding: 15,
    flex: 1,
    alignItems: "center",
  },
  cardContent: {
    alignItems: "center",
    padding: 10,
    justifyContent: "space-evenly",
  },
  text: {
    paddingLeft: 4,
    color: COLORS.white,
  },
  descBox: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.dark,
  },
  descText: {
    fontStyle: "italic",
    padding: 10,
    color: COLORS.white,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  colBox: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.white,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 3,
    borderRadius: 8,
  },
  underline: {
    textDecorationLine: "underline",
    margin: 4,
    fontSize: 16,
    color: COLORS.white,
  },
  weaknesses: {
    width: "100%",
    alignItems: "center",
  },
  weaknessList: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  evoContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  evoImage: {
    width: 100,
    height: 100,
  },
  pokeball: {
    position: "absolute",
    top: "10%",
    left: "50%",
    width: 200,
    height: 200,
    // transform: [{ translateX: -100 }, { translateY: -100 }],
    opacity: 0.25,
  },
  statsTable: {
    width: "95%",
    height: "90%",
    justifyContent: "space-evenly",
  },
  statRow: {
    width: "100%",
    flexDirection: "row",
    height: 25,
    alignItems: "center",
  },
  statTextBox: {
    height: "100%",
    width: 60,
    justifyContent: "center",
  },
  statText: {
    color: COLORS.gray,
  },
  statOutter: {
    flex: 2,
    backgroundColor: COLORS.dark,
    height: "100%",
    borderRadius: "25%",
    justifyContent: "center",
  },
  statInner: {
    backgroundColor: COLORS.gray,
    borderRadius: "25%",
    height: "100%",
  },
});

export default styles;
