import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfilePage = () => {
  const navigation = useNavigation();

  const userInfo = {
    name: 'alexanabalitan',
    email: 'alexanabalitan@gmail.com',
    contactNumber: '09123456789',
    profileImage: 'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-1/391652058_3542492032686882_866624862633205692_n.jpg?stp=c4.10.941.940a_dst-jpg_s160x160&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEDkoXkjeEBmKe5ZkC5YpjgxwaoehimbLTHBqh6GKZstCotJ372arciAQy2zGjftNogD5_lkwVd8finsbFKOj6E&_nc_ohc=QT67Ixcywn0Q7kNvgE0NR55&_nc_ht=scontent.fceb1-5.fna&_nc_gid=AMKuvnHUYP8BjbI0trC0AO0&oh=00_AYA30DeRc3CDzqIONPagOxeOgeitBTjHTUpRHHz169iSKw&oe=66F71089',
  };

  const userAnalytics = [
    { month: 'Jan', bookings: 2, totalSpent: 3000 },
    { month: 'Feb', bookings: 3, totalSpent: 4500 },
    { month: 'Mar', bookings: 1, totalSpent: 1500 },
    { month: 'Apr', bookings: 4, totalSpent: 6000 },
    { month: 'May', bookings: 2, totalSpent: 3500 },
  ];

  const totalBookings = userAnalytics.reduce((acc, data) => acc + data.bookings, 0);
  const totalAmountSpent = userAnalytics.reduce((acc, data) => acc + data.totalSpent, 0);
  const averageSpend = (totalAmountSpent / totalBookings).toFixed(2);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: userInfo.profileImage }}
          style={styles.profileImage}
          onError={() => console.warn('Image failed to load')}
        />
        <Text style={styles.userName}>{userInfo.name}</Text>
        <Text style={styles.userInfo}>{userInfo.email}</Text>
        <Text style={styles.userInfo}>{userInfo.contactNumber}</Text>
      </View>

      <View style={styles.analyticsContainer}>
        <Text style={styles.analyticsTitle}>User Analytics</Text>
        <Text style={styles.analyticsText}>Total Bookings: {totalBookings}</Text>
        <Text style={styles.analyticsText}>Total Amount Spent: ₱{totalAmountSpent.toFixed(2)}</Text>
        <Text style={styles.analyticsText}>Average Spend per Booking: ₱{averageSpend}</Text>
      </View>

      <View style={styles.recommendationContainer}>
        <Text style={styles.recommendationTitle}>Recommended For You</Text>
        <Text style={styles.recommendationText}>
          Based on your booking history, you might enjoy:
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RoomSuggestions')}
          style={styles.recommendationButton}
        >
          <Icon name="bed-outline" size={20} color="#fff" />
          <Text style={styles.recommendationButtonText}>Explore Room Options</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E1D8',
  },
  contentContainer: {
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B3D3D',
    marginTop: 12,
  },
  userInfo: {
    fontSize: 16,
    color: '#4B3D3D',
    marginVertical: 4,
  },
  analyticsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  analyticsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B3D3D',
    marginBottom: 8,
  },
  analyticsText: {
    fontSize: 16,
    color: '#4B3D3D',
    marginVertical: 4,
  },
  recommendationContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  recommendationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B3D3D',
    marginBottom: 8,
  },
  recommendationText: {
    fontSize: 16,
    color: '#4B3D3D',
    marginBottom: 12,
  },
  recommendationButton: {
    backgroundColor: '#FFAF87',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendationButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});
