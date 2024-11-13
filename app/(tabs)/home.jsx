import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Resort = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dailySpecials = [
    {
      id: 1,
      name: 'THE VIEW',
      image: { uri: 'https://media.licdn.com/dms/image/v2/C5612AQGrOcSGSj-jrg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1597817150284?e=2147483647&v=beta&t=w8q-BaGi_SCY3sRTag2TEQ-ZNSIuHOLFlAuxpzezqmU' },
    },
    {
      id: 2,
      name: 'EVENTS',
      image: { uri: 'https://i.pinimg.com/564x/ac/6c/e1/ac6ce10d2e8d48bf8a06b9c4071913ca.jpg' },
    },
    {
      id: 3,
      name: 'ROOMS',
      image: { uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQAZl8ta6SPNcz8IQR5_rA1UuTOShUFLy4SEMqyLkcRRMbGisen' },
    },
    {
      id: 4,
      name: 'ACTIVITIES',
      image: { uri: 'https://i.pinimg.com/564x/5c/bf/7e/5cbf7eaefcfe684d934e813ca0d42988.jpg' },
    },
  ];

  const filteredSpecials = dailySpecials.filter((special) =>
    special.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/f2/9f/36/f29f36cb8e9486a3069fdb34180cdc07.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#6B4D4D" style={styles.icon} />
          <TextInput
            placeholder="Search for your favorite experience..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            style={styles.searchInput}
          />
        </View>

        <ScrollView>
          {filteredSpecials.map((special) => (
            <View key={special.id} style={styles.specialContainer}>
              <ImageBackground
                source={special.image}
                style={styles.specialImage}
                imageStyle={styles.imageBorder}
              >
                <View style={styles.textOverlay}>
                  <Text style={styles.specialText}>
                    {special.name}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000073',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  specialContainer: {
    marginBottom: 16,
  },
  specialImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
  },
  imageBorder: {
    borderRadius: 12,
  },
  textOverlay: {
    backgroundColor: '#00000073',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  specialText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Resort;
