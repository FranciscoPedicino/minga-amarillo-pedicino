import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from  '../screens/index'
import singUp from '../screens/signUp'
import Mangas from '../screens/Mangas';
import ReadMangas from '../screens/ReadMangas';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{ headerShown: false }}>
    <Tab.Screen  name="Home" component={Home} />
    <Tab.Screen name="singUp" component={singUp} options={{ tabBarVisible: false }}/>
    <Tab.Screen  name="mangas" component={Mangas} />
    <Tab.Screen  name="readmangas" component={ReadMangas} />


  </Tab.Navigator>
  );
}
export default BottomNavigator