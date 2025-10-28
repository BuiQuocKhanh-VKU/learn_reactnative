import HomeScreen from "@/components/review/home";
import { OPENSAN_REGULAR } from "@/utils/const";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import DetailScreen from "./components/review/detail";


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

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
         <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} options={{ title: "Overview" }} />
            <Stack.Screen name="detail" component={DetailScreen} options={{title: "Chi tiet"}} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
