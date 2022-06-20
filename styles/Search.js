import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    width: "100%",
  },
  searchInput: {
    width: "80%",
    fontSize: 18,
    color: COLORS.dark,
    backgroundColor: COLORS.white,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  numInputBox: {
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 10,
  },
  numText: {
    color: COLORS.white,
    marginBottom: 8,
  },
  numInput: {
    width: "100%",
    backgroundColor: COLORS.white,
    padding: 4,
    textAlign: "center",
    fontSize: 18,
  },
  typesContainer: {
    width: "90%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  typesTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.white,
    marginVertical: 5,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
  },
  typesInnerBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
  },
  typeBox: {
    width: "33%",
    alignItems: "center",
    borderColor: COLORS.white,
    borderWidth: 1,
    borderType: "solid",
    paddingVertical: 12,
  },
  typeText: { fontSize: 20 },
  submitBtn: {
    width: 300,
    padding: 10,
    backgroundColor: COLORS.gray,
    alignItems: "center",
    borderRadius: 8,
    opacity: 0.8,
  },
  submitText: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.white,
  },
});

export default styles;
