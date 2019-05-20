import React, { Component } from "react";
import { Image, TouchableHighlight, SafeAreaView, View } from "react-native";
import { Speech } from "expo";
import appStyleSheets from "../../styles/styles";

class ConnectScanner extends Component {
  state = {
    txtScanner: "Connect Scanner"
  };

  componentDidMount() {
    this.onLoadSpeech();
  }
  // Load Speech on a function call
  onLoadSpeech = () => {
    Speech.speak(this.state.txtScanner, {
      language: "en",
      pitch: 1,
      rate: 0.75
    });
  };
  loadAnotherScreen = () => {
    console.log("Image clic");
    this.props.navigation.navigate("FirstScan");
  };
  render() {
    return (
      <SafeAreaView style={appStyleSheets.bgSafeArea}>
        <Image
          style={appStyleSheets.headerBackgroundImg}
          source={require("../../../assets/bgheader.jpg")}
        />
        <View style={appStyleSheets.bodyView}>
          <Image
            source={require("../../../assets/connect_scanner.png")}
            style={{ alignItems: "center" }}
          />
        </View>
        <View style={appStyleSheets.rightArrow}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("ScanDevice")}
          >
            <Image source={require("../../../assets/arrowright.png")} />
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

export default ConnectScanner;
