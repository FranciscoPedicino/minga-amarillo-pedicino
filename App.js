
import { NavigationContainer } from '@react-navigation/native'
import ButtomNavigator from './src/navigation/tree'
import store from './src/store/store'
import { Provider } from 'react-redux'
export default function App() {
  return (
   <>
<Provider store ={store}>
  <NavigationContainer>
      <ButtomNavigator/>
  </NavigationContainer>
  </Provider>

 </>
  )
}

