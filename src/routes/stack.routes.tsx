import {createNativeStackNavigator} from '@react-navigation/native-stack';
import New from '../screens/New';

const Stack = createNativeStackNavigator();
export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{title:''}}>
            <Stack.Screen 
            name='home' 
            component={New}
            />
        </Stack.Navigator>
    );
}