import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from './AppStack';
import { APP_STACK } from './screens';


const Navigation = () => {

    const RootStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{ headerShown: false }}>
                <RootStack.Screen
                    name={APP_STACK}
                    component={AppStack} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
