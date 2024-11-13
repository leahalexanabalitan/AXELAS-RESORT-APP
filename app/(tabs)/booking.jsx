import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Calendar } from 'react-native-calendars';
import { differenceInDays } from 'date-fns';

const Homepage = () => {
  const router = useRouter();

  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [roomType, setRoomType] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [roomPrice, setRoomPrice] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [breakfastIncluded, setBreakfastIncluded] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    number: ''
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const availableRooms = {
    family: [
      { id: 1, name: 'Family Room 1', price: 1000, breakfast: true, available: true },
      { id: 2, name: 'Family Room 2', price: 1000, breakfast: true, available: true },
      { id: 3, name: 'Family Room 3', price: 1000, breakfast: true, available: true },
    ],
    solo: [
      { id: 1, name: 'Solo Room 1', price: 600, breakfast: false, available: true },
      { id: 2, name: 'Solo Room 2', price: 600, breakfast: false, available: true },
      { id: 3, name: 'Solo Room 3', price: 600, breakfast: false, available: true },
      { id: 4, name: 'Solo Room 4', price: 600, breakfast: false, available: true },
      { id: 5, name: 'Solo Room 5', price: 600, breakfast: false, available: true },
      { id: 6, name: 'Solo Room 6', price: 600, breakfast: false, available: true },
      { id: 7, name: 'Solo Room 7', price: 600, breakfast: false, available: true },
    ],
    double: [
      { id: 1, name: 'Double Bed Room 1', price: 800, breakfast: true, available: true },
      { id: 2, name: 'Double Bed Room 2', price: 800, breakfast: true, available: true },
      { id: 3, name: 'Double Bed Room 3', price: 800, breakfast: true, available: true },
      { id: 4, name: 'Double Bed Room 4', price: 800, breakfast: true, available: true },
      { id: 5, name: 'Double Bed Room 5', price: 800, breakfast: true, available: true },
      { id: 6, name: 'Double Bed Room 6', price: 800, breakfast: true, available: true },
      { id: 7, name: 'Double Bed Room 7', price: 800, breakfast: true, available: true },
    ],
    suit: [
      { id: 1, name: 'Suit Room 1', price: 1200, breakfast: true, available: true },
      { id: 2, name: 'Suit Room 2', price: 1200, breakfast: true, available: false },
      { id: 3, name: 'Suit Room 3', price: 1200, breakfast: true, available: true },
    ],
  };

  const checkAvailability = () => {
    if (!checkInDate || !checkOutDate || !roomType) {
      Alert.alert('Error', 'Please select check-in, check-out dates, and room type.');
      return;
    }

    const rooms = availableRooms[roomType];
    const availableRoom = rooms.find((room) => room.available);
    if (availableRoom) {
      setIsAvailable(true);
      Alert.alert('Success', `Room available: ${availableRoom.name}`);
      setRoomPrice(availableRoom.price);
      calculateTotalCost();
    } else {
      setIsAvailable(false);
      Alert.alert('No Rooms Available', 'Sorry, no rooms are available for your selected dates and room type.');
    }
  };

  const calculateTotalCost = () => {
    if (checkInDate && checkOutDate) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const days = differenceInDays(checkOut, checkIn);
      const total = days * roomPrice;
      setTotalCost(total > 0 ? total : 0);
    }
  };

  const onDayPress = (day) => {
    if (!checkInDate) {
      setCheckInDate(day.dateString);
    } else {
      setCheckOutDate(day.dateString);
      setShowCalendar(false);
      calculateTotalCost();
    }
  };

  const handleRoomTypeSelection = (type) => {
    setRoomType(type);
    const rooms = availableRooms[type];
    if (rooms.length > 0) {
      const room = rooms.find((room) => room.available);
      if (room) {
        setRoomPrice(room.price);
        setBreakfastIncluded(room.breakfast);
        calculateTotalCost();
      }
    }
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
    if (method === 'online') {
      setShowPaymentOptions(true);
    } else {
      setShowPaymentOptions(false);
      setShowPaymentForm(false);
    }
  };

  const handleOnlinePayment = (paymentOption) => {
    Alert.alert('Payment Method Selected', `You have selected ${paymentOption}.`);
    setShowPaymentForm(true);
    setShowPaymentOptions(false);
  };

  const resetForm = () => {
    setCheckInDate('');
    setCheckOutDate('');
    setRoomType(null);
    setRoomPrice(null);
    setTotalCost(0);
    setBreakfastIncluded(false);
    setPaymentMethod('');
    setPaymentDetails({ name: '', number: '' });
    setShowPaymentOptions(false);
    setShowPaymentForm(false);
    setIsAvailable(null);
  };

  const handlePaymentConfirmation = () => {
    if (!paymentDetails.name || !paymentDetails.number) {
      Alert.alert('Error', 'Please fill in your name and payment number.');
      return;
    }

    Alert.alert('Payment Successful', `Your payment of ₱${totalCost} has been processed successfully!`);
    
    resetForm();
    router.push('/home'); 
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://raketcontent.com/d7fb3386f1748d69f82d4257225d78a3_bee8200405.jpg' }} 
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Booking Page</Text>

        <TouchableOpacity 
          style={styles.input}
          onPress={() => setShowCalendar(true)}
        >
          <Text>{checkInDate ? `Check-in: ${checkInDate}` : 'Select Check-in Date'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.input}
          onPress={() => setShowCalendar(true)}
        >
          <Text>{checkOutDate ? `Check-out: ${checkOutDate}` : 'Select Check-out Date'}</Text>
        </TouchableOpacity>

        {showCalendar && (
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [checkInDate]: { selected: true, color: '#00adf7' },
              [checkOutDate]: { selected: true, color: '#00adf7' },
            }}
          />
        )}

        <Text style={styles.label}>Select Room Type:</Text>
        <View style={styles.roomTypeContainer}>
          {['family', 'solo', 'double', 'suit'].map((type) => (
            <TouchableOpacity 
              key={type} 
              style={[styles.roomTypeButton, roomType === type && styles.selectedRoomType]} 
              onPress={() => handleRoomTypeSelection(type)}
            >
              <Text style={styles.buttonText}>{type.charAt(0).toUpperCase() + type.slice(1) + ' Room'}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {roomType && (
          <View style={styles.roomInfoContainer}>
            <Text style={styles.roomInfoText}>Price per night: ₱{roomPrice}</Text>
            <Text style={styles.roomInfoText}>Breakfast: {breakfastIncluded ? 'Included' : 'Not Included'}</Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.button} 
          onPress={checkAvailability}
        >
          <Text style={styles.buttonText}>Check Availability</Text>
        </TouchableOpacity>

        {isAvailable !== null && isAvailable && (
          <View style={styles.totalContainer}>
            <Text>Total Cost: ₱{totalCost}</Text>
          </View>
        )}

        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={paymentDetails.name}
          onChangeText={(text) => setPaymentDetails({ ...paymentDetails, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter payment number"
          keyboardType="numeric"
          value={paymentDetails.number}
          onChangeText={(text) => setPaymentDetails({ ...paymentDetails, number: text })}
        />

        {showPaymentForm && (
          <TouchableOpacity 
            style={styles.button} 
            onPress={handlePaymentConfirmation}
          >
            <Text style={styles.buttonText}>Confirm Payment</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity 
          style={styles.button} 
          onPress={resetForm}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: '#fff',
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  roomTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  roomTypeButton: {
    padding: 10,
    backgroundColor: '#00adf7',
    borderRadius: 5,
    margin: 5,
  },
  selectedRoomType: {
    backgroundColor: '#f4a261',
  },
  button: {
    backgroundColor: '#00adf7',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  roomInfoContainer: {
    marginTop: 10,
  },
  roomInfoText: {
    color: '#fff',
  },
  totalContainer: {
    marginTop: 20,
  },
});

export default Homepage;
