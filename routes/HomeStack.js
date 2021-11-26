import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import ReviewBox from '../screens/ReviewBox';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'   ,
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'   
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
            headerTintColor: '#444',
        }
    }
});
export default HomeStack;
