import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ConnectScanner from '../scanner/connect-scanner';
import ScanDevice from "../scanner/scan-device";
import FirstScan from '../scanner/first-scan';
import FormulatingResponse from '../scanner/formulating-response';

const Routes = createStackNavigator(
  {
    ConnectScanner: {
      screen: ConnectScanner,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    ScanDevice: {
      screen: ScanDevice,
      navigationOptions: {
        headerLeft: null,
        header: null
      }
    },
    FirstScan:{
      screen: FirstScan,
      navigationOptions: {
        headerLeft: null,
        header: null
      }
    },
    FormulatingResponse: {
      screen: FormulatingResponse,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "ConnectScanner"
  }
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;
