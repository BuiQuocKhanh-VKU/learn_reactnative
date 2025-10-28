import AboutScreen from "@/components/review/about";
import DetailScreen from "@/components/review/detail";
import HomeScreen from "@/components/review/home";
import { OPENSAN_REGULAR } from "@/utils/const";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {
   const [loaded, error] = useFonts({
      [OPENSAN_REGULAR]: require("../../assets/fonts/OpenSans-Regular.ttf"),
   });
   useEffect(() => {
      if (loaded || error) {
         SplashScreen.hideAsync();
      }
   }, [loaded, error]);
   if (!loaded && !error) {
      return null;
   }
   return (
      <View>
         <HomeScreen />
         <AboutScreen />
         <DetailScreen />
      </View>
   );
};

export default App;
