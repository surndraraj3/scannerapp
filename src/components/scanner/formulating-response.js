import React, { Component } from "react";
import { Text, SafeAreaView, View, Button, Image } from "react-native";
import appStyleSheets from "../../styles/styles";

class FormulatingResponse extends Component {  
  render() {
    return (
      <SafeAreaView style={appStyleSheets.bgSafeArea}>
        <Image
          style={appStyleSheets.headerBackgroundImg}
          source={require("../../../assets/bgheader.jpg")}
        />
        <View style={appStyleSheets.bodyView}>
          <Image
            source={require("../../../assets/loading.gif")}
            style={{ alignItems: "center" }}
          />
          <Text style={appStyleSheets.bodyText}>Formulating Your</Text>
          <Text style={appStyleSheets.bodyText}>Responses...</Text>
        </View>
        <View style={appStyleSheets.rightArrow}>
          <Image            
            source={require("../../../assets/arrowright.png")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default FormulatingResponse;
