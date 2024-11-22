import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UserListScreen from "./src/screens/UserListScreen";
import UserDetail from "./src/screens/UserDetail";

const navigator = createStackNavigator(
  {

    UserListScreen: {
      screen: UserListScreen,
      navigationOptions: {
        title: "User List",
        headerStyle: {
          backgroundColor: "#3a4ca1",
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
        },
      },
    },
    UserDetail: {
      screen: UserDetail,
      navigationOptions: {
        title: "User Detail",
        headerStyle: {
          backgroundColor: "#3a4ca1",
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
        },
      },
    },
  },
  {
    initialRouteName: "UserListScreen",
  }
);

export default createAppContainer(navigator);
