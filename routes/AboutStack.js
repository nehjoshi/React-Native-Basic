import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'Abour'   
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
            headerTintColor: '#444',
        }
    }
});
export default AboutStack;
