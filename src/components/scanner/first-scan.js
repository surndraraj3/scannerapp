import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableHighlight
} from "react-native";
import appStyleSheets from "../../styles/styles";
import { Speech } from "expo";

class FirstScan extends Component {
  state = {
    speechText: "First Scan"
  };
  componentDidMount() {
    this.onLoadSpeech();
  }
  onLoadSpeech = () => {
    Speech.speak(this.state.speechText, {
      language: "en",
      pitch: 1,
      rate: 0.75
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Image
          style={appStyleSheets.headerBackgroundImg}
          source={require("../../../assets/bgheader.jpg")}
        />
        <View
          style={{ flex: 1, margin: 10, alignItems: "center", paddingTop: 30 }}
        >
          <Text style={{ fontSize: 20 }}>First Scan.</Text>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate("FormulatingResponse")
            }
          >
            <Image
              source={require("../../../assets/scannow.png")}
              style={{ alignItems: "center" }}
            />
          </TouchableHighlight>
        </View>

        <View>
          <Image
            style={{ position: "absolute", right: 10, bottom: 10 }}
            source={require("../../../assets/arrowright.png")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default FirstScan;
