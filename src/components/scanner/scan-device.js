import React, { Component } from "react";
import { Text, View, Image, Button, SafeAreaView } from "react-native";
import { Speech } from "expo";
import appStyleSheets from "../../styles/styles";
import {DeviceURL} from '../common/base-scanner-ip';

class ScanDevice extends Component {
  state = {
    speechText: "Turn on scanner. Wait for light to blink ? Scan for device"
  };
  componentDidMount() {
    // console.log('C', device_ip)
    console.log('DeviceURL Scan Device', DeviceURL)
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
        <View style={{flex:1, margin: 10,alignItems: 'center', paddingTop: 30}}>
          <Text style={{fontSize: 20}}>Turn on scanner.</Text>
          <Text style={{fontSize: 20}}>Wait for light to blink ?</Text>
          <Text style={{fontSize: 20}}>Scan for device</Text>
        </View>
        <View
          style={appStyleSheets.btnScanForDevice}
        >
          <Button onPress={() => this.props.navigation.navigate("FirstScan")} title="SCAN FOR DEVICE" color="#66ffcc" />
        </View>
        <View>
        <Image
          style={{ position: "absolute", right:10, bottom:10}}
          source={require("../../../assets/arrowright.png")}
        />
        </View>
      </SafeAreaView>
    );
  }
}

export default ScanDevice;
