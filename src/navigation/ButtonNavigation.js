import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from  '../screens/index'
import singUp from '../screens/signUp'

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{ headerShown: false }}>
    <Tab.Screen  name="Home" component={Home} />
    <Tab.Screen name="singUp" component={singUp} options={{ tabBarVisible: false }}
      />
  </Tab.Navigator>
  );
}
export default BottomNavigator