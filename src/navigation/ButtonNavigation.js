import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from  '../screens/index'
import singUp from '../screens/signUp'
import Mangas from '../screens/Mangas';
import ReadMangas from '../screens/ReadMangas'
import profile from '../screens/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  const token =AsyncStorage.getItem('token')
  return (
    <Tab.Navigator 
    screenOptions={{ headerShown: false }}>
    <Tab.Screen  name="Home" component={Home} />
    <Tab.Screen  name="mangas" component={Mangas} /> 
   <Tab.Screen  name="profile" component={profile} />



  </Tab.Navigator>
  );
}
export default BottomNavigator