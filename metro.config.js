const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enable CSS support
  isCSSEnabled: true,
});

module.exports = withNativeWind(config, { input: './global.css' });