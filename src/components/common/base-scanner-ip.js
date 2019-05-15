// import React from "react";
import { Constants } from "expo";


// Get base url from expo constants and extract ip address from it
let base_scanner_ip = Constants.linkingUri;

base_scanner_ip = base_scanner_ip.replace(/[a-zA-Z/]/g, "");

base_scanner_ip = base_scanner_ip.split(":");

export const DeviceURL = base_scanner_ip[1];
