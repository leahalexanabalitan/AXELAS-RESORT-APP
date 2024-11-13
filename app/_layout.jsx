import { Text, View } from 'react-native'
import React from 'react'
import{SplashScreen, Stack} from 'expo-router'
import{useFonts} from 'expo-font'
import{useEffect} from 'react'

SplashScreen.preventAutoHideAsync();


const MainLayout = () => {const [fontsLoaded, error] = useFonts({
  
 
});

useEffect(() => {
  if (error) throw error;

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded, error]);

if (!fontsLoaded && !error) {
  return null;
}

  return (
 <Stack>
<Stack.Screen 
name="index"
options={{
    headerShown:false
}}
/>
 </Stack>



//    <>
//    header
//    <Slot></Slot>
//    footer 
//    </>
  )
}

export default MainLayout