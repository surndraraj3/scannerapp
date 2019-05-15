import React, { Component } from "react";
import { Text, SafeAreaView, View, Button, Image } from "react-native";
import appStyleSheets from "../../styles/styles";

class FormulatingResponse extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Image
          style={appStyleSheets.headerBackgroundImg}
          source={require("../../../assets/bgheader.jpg")}
        />
      </SafeAreaView>
    );
  }
}

export default FormulatingResponse;
