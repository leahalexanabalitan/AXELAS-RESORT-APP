import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants'; // Make sure icons are defined correctly

const TabIcon = ({ icon, color, focused }) => {
  return (
    <View style={[styles.iconContainer, { tintColor: focused ? color : '#888' }]}>
      <Image source={icon} resizeMode="contain" style={styles.icon} />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.home} color={color} focused={focused} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.user} color={color} focused={focused} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.settings} color={color} focused={focused} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="booking"
          options={{
            title: 'Booking',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.booking} color={color} focused={focused} />
            ),
          }}
        />
        
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default TabLayout;
