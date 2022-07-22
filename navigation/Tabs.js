import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from "react-native";
import { COLOR_DARK, COLOR_ORANGE, COLOR_PINK, COLOR_RED, COLOR_TANGER } from "../colors";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? COLOR_DARK : "white",
        },
        tabBarActiveTintColor: isDark ? COLOR_ORANGE : COLOR_RED,
        tabBarInactiveTintColor: isDark ? COLOR_TANGER : COLOR_PINK,
        headerStyle: {
          backgroundColor: isDark ? COLOR_DARK : "white",
        },
        headerTitleStyle: {
          color: isDark ? COLOR_ORANGE : COLOR_RED,
        },
        tabBarLabelStyle:{
          marginTop: -5,
          fontSize : 12,
          fontWeight: "500",
        },
      }}
      initialRouteName="Movies"
    >
      <Tab.Screen name="TV" component={Tv} options={{
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="tv-outline" size= {size} color={color} />
        )
      }} />
      <Tab.Screen name="Movies" component={Movies} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"film-outline"} color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),}}/>
    </Tab.Navigator>
  );
};

export default Tabs;
