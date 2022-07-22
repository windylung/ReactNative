import AppLoading from "expo-app-loading";
import React, { useState } from 'react';
import { Text, Image } from "react-native";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs'
import { View } from "react-native-web";



const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font));
const loadImages = (images) => images.map(image =>
  {
    if(typeof image === "string")
      return Image.prefetch(image);
    else
      return Asset.loadAsync(image);
  });

export default function App() {
  const [ready, setReady] = useState("false");
  const onFinish = () => {
    setReady("true");
  };
  const startLoading = async () => {
    //await 해햐 하는 모든 로딩을 담은 곳 
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages(["./logo.jpeg"]);
    await Promise.all(...fonts, ...images);
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }
  
  //navigator를 렌더링 하려면 NativeScreenNavigationContainer 먼저 
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}
