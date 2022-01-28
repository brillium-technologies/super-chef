import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.superchef.mobile.app',
  appName: 'Super Chef',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};
export default config;
