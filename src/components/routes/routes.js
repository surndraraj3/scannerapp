import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ScanDevice from "../scanner/scan-device";
import FirstScan from '../scanner/first-scan';
import FormulatingResponse from '../scanner/formulating-response';

const Routes = createStackNavigator(
  {
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
    initialRouteName: "ScanDevice"
  }
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;
