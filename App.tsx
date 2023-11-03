import React, { FunctionComponent } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainerLightTheme, NavigationContainerColorTheme } from './constants/Themes';

import Home from './screens/Home';
import Favourites from './screens/Favourites';
import Suggestions from './screens/Suggestions';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

type TabComponentType = {
  component: FunctionComponent,
  label: string,
  iconName: string
};

const Components: {[id: string] : TabComponentType} = {};

// Add bottom navigation tab components to Components dictionary
Components["Home"] = { component: Home, label: "Home", iconName: "home-sharp"};
Components["Suggestions"] = { component: Suggestions, label: "Suggestions", iconName: "bulb-sharp"};;
Components["Favourites"] = { component: Favourites, label: "Favourites", iconName: "heart-sharp"};;
Components["Profile"] = { component: Profile, label: "Profile", iconName: "person-sharp"};;

const Screens: JSX.Element [] = [];

for (let cname in Components) {
  Screens.push(
    <Tab.Screen 
      key={cname} 
      name={cname} 
      component={Components[cname].component} 
      options={{
        tabBarLabel: Components[cname].label,
        tabBarIcon: ({color, size}) => (
          <Ionicons name={Components[cname].iconName} color={color} size={size} />
        )
      }}
    />)
}


const App = () => {
  const scheme = useColorScheme();
  const currentTheme = (scheme === "dark") ? DarkTheme : NavigationContainerColorTheme;
  console.log(currentTheme);

  return (
    <NavigationContainer theme={currentTheme}>
      <Tab.Navigator>
        {Screens}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;