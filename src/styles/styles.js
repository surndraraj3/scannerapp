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
  },
  bgSafeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bodyText: {
    alignItems: "center",
    fontSize: 20
  },
  bodyView: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    paddingTop: 30
  },
  rightArrow: {
    position: "absolute",
    right: 10,
    bottom: 10
  },
  iosButtonTouchOpacity: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#42d396",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  iosTextForButton: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default appStyleSheets;
