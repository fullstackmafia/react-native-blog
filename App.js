import React from 'react';
import { TouchableOpacity } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './context/BlogContext';
// import { Touchable } from 'react-native';
import { Feather, EvilIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30}/>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Edit", { id: route.params.id })}
                >
                  <EvilIcons name="pencil" size={35}/>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}



// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//     Show: ShowScreen,
//     Create: CreateScreen,
//     Edit: EditScreen
//   }, 
//   {
//     initialRouteName: 'Index',
//     defaultNavigationOptions: {
//       title: 'Blogs'
//     }
//   } 
// )

// const App = createAppContainer(navigator);
// // registerRootComponent(App);

// export default () => {
//   return <Provider>
//     <App/>
//   </Provider>
// };