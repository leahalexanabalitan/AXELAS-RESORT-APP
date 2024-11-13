import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const Homepage = () => {
  // Use the router hook from expo-router
  const router = useRouter();

  // Function to handle navigation
  const navigateToPage = (page) => {
    router.push(page);
  };

  const handleLogout = () => {
    // Navigate to the index page on logout
    router.push('/');
  };

  return (
    <LinearGradient 
      colors={['#FFB6C1', '#FF69B4']} // Define gradient colors
      style={styles.container}
    >
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsItem} onPress={() => navigateToPage('/account')}>
          <Text style={styles.settingsText}>FQA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => navigateToPage('/notifications')}>
          <Text style={styles.settingsText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => navigateToPage('/privacy')}>
          <Text style={styles.settingsText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => navigateToPage('/theme')}>
          <Text style={styles.settingsText}>Theme</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      
      
      
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', // Aligns content to the bottom
    paddingHorizontal: 20,
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingsItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Homepage;
