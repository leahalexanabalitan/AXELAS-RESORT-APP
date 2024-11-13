import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const Register = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Use the router hook from expo-router
  const router = useRouter();

  // Function to handle sign-up button click
  const handleSignUp = () => {
    // Perform form validation
    if (!name || !username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Add API call logic here if needed

    // Navigate to the login page
    router.push('/login');
  };

  return (
    <LinearGradient
      colors={['#ff8859','#ff9a9e']} // Define gradient colors
      style={styles.container}
    >
      <Text style={styles.title}>Sign Up</Text>

      {/* Transparent Container for Inputs */}
      <View style={styles.inputContainer}>
        {/* Name Label and Input */}
        <Text style={styles.label}>Name:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your name" 
          value={name}
          onChangeText={setName}
        />

        {/* Username Label and Input */}
        <Text style={styles.label}>Username:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your username" 
          value={username}
          onChangeText={setUsername}
        />

        {/* Email Label and Input */}
        <Text style={styles.label}>Email:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your email" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Label and Input */}
        <Text style={styles.label}>Password:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your password" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Confirm Password Label and Input */}
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Confirm your password" 
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.footerText}>
        Already have an account? 
        <Text style={styles.link} onPress={() => router.push('/login')}> Login</Text>
      </Text>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Almost transparent white background
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  link: {
    color: 'black',
    fontWeight: 'bold',
  }
});