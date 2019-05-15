import { StyleSheet, Dimensions } from "react-native";

const deviceDimensions = Dimensions.get("window");
const themeColor = "#66ffcc";

const appStyleSheets = StyleSheet.create({
  headerBackgroundImg: {
    width: deviceDimensions.width,
    height: deviceDimensions.height / 3
  },
  btnScanForDevice: {
    position: "absolute",
    bottom: 80,
    width: "100%"
  },
  buttonBgColor: {
    backgroundColor: themeColor
  }
});

export default appStyleSheets;
