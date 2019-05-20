import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Platform
} from "react-native";
import { Speech } from "expo";
import appStyleSheets from "../../styles/styles";
import { DeviceURL } from "../common/base-scanner-ip";

class ScanDevice extends Component {
  state = {
    speechText: "Turn on scanner. Wait for light to blink ? "
  };
  componentDidMount() {
    // console.log('C', device_ip)
    console.log("DeviceURL Scan Device", DeviceURL);
    this.onLoadSpeech();
  }
  onLoadSpeech = () => {
    //Turn on scanner. Wait for light to blink ? Scan for device
    Speech.speak(this.state.speechText, {
      language: "en",
      pitch: 1,
      rate: 0.75
    });
  };

  render() {
    return (
      <SafeAreaView style={appStyleSheets.bgSafeArea}>
        <Image
          style={appStyleSheets.headerBackgroundImg}
          source={require("../../../assets/bgheader.jpg")}
        />
        <View style={appStyleSheets.bodyView}>
          <Text style={appStyleSheets.bodyText}>Turn on scanner.</Text>
          <Text style={appStyleSheets.bodyText}>Wait for light to blink ?</Text>
          <Text style={appStyleSheets.bodyText}>Scan for device</Text>
        </View>
        <View style={appStyleSheets.btnScanForDevice}>
          {Platform.OS === "ios" ? (
            <TouchableOpacity
              style={appStyleSheets.iosButtonTouchOpacity}
              onPress={() => this.props.navigation.navigate("FirstScan")}
            >
              <Text style={appStyleSheets.iosTextForButton}>
                SCAN FOR DEVICE
              </Text>
            </TouchableOpacity>
          ) : (
            <Button
              onPress={() => this.props.navigation.navigate("FirstScan")}
              title="SCAN FOR DEVICE"
              color="#42d396"
            />
          )}
        </View>
        <View style={appStyleSheets.rightArrow}>
          <Image source={require("../../../assets/arrowright.png")} />
        </View>
      </SafeAreaView>
    );
  }
}

export default ScanDevice;
