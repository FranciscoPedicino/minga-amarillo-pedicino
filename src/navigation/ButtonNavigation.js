import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Home from  '../screens/index';
import signin from '../screens/signIn'
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen  name="Home" component={Home} />
    <Tab.Screen name="signin" component={signin} options={{ tabBarVisible: false }}
      />
  </Tab.Navigator>
  );
}
export default BottomNavigator