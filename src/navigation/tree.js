import { createStackNavigator } from '@react-navigation/stack';


import BottomTabsNavigator from "./ButtonNavigation"
import ReadManga from '../screens/ReadMangas';
import SignUp from '../screens/signUp';

const Stack = createStackNavigator();


export default function NavigateStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabsNavigator} />
      <Stack.Screen name="readmangas" component={ReadManga} />
      <Stack.Screen name="signup" component={SignUp} />
    </Stack.Navigator>
  );
}

