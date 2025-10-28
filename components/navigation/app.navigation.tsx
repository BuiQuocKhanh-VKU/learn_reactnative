import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../review/about";
import DetailScreen from "../review/detail";
import HomeScreen from "../review/home";
import AppHeader from "./app.header";

const HomeLayout = () => {
   const Stack = createNativeStackNavigator<RootStackParamList>();

   return (
      <Stack.Navigator
      //   screenOptions={{headerShown: false}}
      >
         <Stack.Screen name="home" component={HomeScreen} options={{ header: () => <AppHeader /> }} />
         <Stack.Screen name="detail" component={DetailScreen} options={{ title: "Chi tiet" }} />
      </Stack.Navigator>
   );
};
const AppNavigation = () => {
   const Drawer = createDrawerNavigator();

   return (
      <Drawer.Navigator
   //   screenOptions={{ headerShown: false }}
      >
         <Drawer.Screen name="home" component={HomeLayout} options={{ title: "Trang chu" , header: () => <></>}} />
         <Drawer.Screen name="about" component={AboutScreen} options={{ header: () => <AppHeader /> }}/>
      </Drawer.Navigator>
   );
};
export default AppNavigation;
