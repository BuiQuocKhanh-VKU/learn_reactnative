import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../review/about";
import DetailScreen from "../review/detail";
import HomeScreen from "../review/home";

const HomeLayout = () => {
   const Stack = createNativeStackNavigator<RootStackParamList>();

   return (
      <Stack.Navigator>
         <Stack.Screen name="home" component={HomeScreen} options={{ title: "Overview" }} />
         <Stack.Screen name="detail" component={DetailScreen} options={{ title: "Chi tiet" }} />
      </Stack.Navigator>
   );
};
const AppNavigation = () => {
   const Drawer = createDrawerNavigator();

   return (
      <Drawer.Navigator>
         <Drawer.Screen name="home" component={HomeLayout} options={{ title: "Trang chu" }} />
         <Drawer.Screen name="about" component={AboutScreen} />
      </Drawer.Navigator>
   );
};
export default AppNavigation;
