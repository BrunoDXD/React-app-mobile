import {createDrawerNavigator} from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons';
import TabRoutes from './tab routes';

const Drawer = createDrawerNavigator();
export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title:''}}>
            <Drawer.Screen name='home' component={TabRoutes}
            options={{drawerIcon:({color, size})=><Feather name="home" 
            color={color} size={size}/>,
            drawerLabel:'Início'}}
            />
            <Drawer.Screen name='Novo' component={TabRoutes}
            options={{drawerIcon:({color, size})=><Feather name="plus" 
            color={color} size={size}/>,
            drawerLabel:'Novo'}}
            />
            <Drawer.Screen name='Perfil' component={TabRoutes}
            options={{drawerIcon:({color, size})=><Feather name="user" 
            color={color} size={size}/>,
            drawerLabel:'Perfil'}}
            />
        </Drawer.Navigator>
    );
}