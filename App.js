import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/Login';
import Registro from './src/views/Register';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      npz<Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Registro" options={{ headerShown: false }} component={Registro} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
