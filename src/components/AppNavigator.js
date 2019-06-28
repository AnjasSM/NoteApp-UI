import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeNote from '../screen/HomeNote';
import AddNote from '../screen/AddNote';
import EditNote from '../screen/EditNote';
import AppSideBar from './AppSideBar';
import { Drawer } from 'native-base';

const AppNavigator = createDrawerNavigator({
    HomeNote: {
        screen: HomeNote
    },
    AddNote: {
        screen: AddNote
    },
    EditNote: {
        screen: EditNote
    }
}, {
    contentComponent: AppSideBar,
    drawerWidth: 235
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;


