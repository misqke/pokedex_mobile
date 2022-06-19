import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

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
  cardContent: {
    alignItems: "center",
    padding: 10,
    justifyContent: "space-evenly",
  },
  category: {
    alignSelf: "flex-start",
    paddingLeft: 4,
  },
  descBox: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.gray,
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
    borderColor: COLORS.black,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 3,
    borderRadius: 8,
  },
  underline: { textDecorationLine: "underline", margin: 4, fontSize: 16 },
  weaknesses: {
    width: "100%",
    alignItems: "center",
  },
  weaknessList: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default styles;
