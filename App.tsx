import { OPENSAN_REGULAR } from "@/utils/const";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import AppNavigation from "./components/navigation/app.navigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
   const [loaded, error] = useFonts({
      [OPENSAN_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
   });

   useEffect(() => {
      if (loaded || error) SplashScreen.hideAsync();
   }, [loaded, error]);

   if (!loaded && !error) return null;

   return (
      <NavigationContainer>
         <AppNavigation />
      </NavigationContainer>
   );
}
