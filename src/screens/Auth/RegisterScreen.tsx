import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Basic validation
    if (!name || !email || !mobile || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email!');
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      Alert.alert('Error', 'Mobile number must be 10 digits!');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long!');
      return;
    }

    // Handle successful registration
    Alert.alert('Success', 'Registration successful!');
    console.log({name, email, mobile, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Mobile Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#aaa"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="numeric"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View
        style={{
          height: '10%',
          alignSelf: 'center',
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={styles.footerText}>Already have an account? </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(2.5),
    backgroundColor: '#f9fafd',
  },
  title: {
    fontSize: responsiveScreenFontSize(4),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: responsiveScreenHeight(2),
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: responsiveScreenHeight(1.6),
    paddingHorizontal: responsiveScreenWidth(2.5),
    paddingVertical: responsiveScreenHeight(1.4),
    elevation: 2,
  },
  input: {
    fontSize: responsiveScreenFontSize(1.7),
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: responsiveScreenHeight(2),
    borderRadius: 10,
    alignItems: 'center',
    marginTop: responsiveScreenHeight(1.5),
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveScreenFontSize(2),
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: responsiveScreenFontSize(1.8),
    color: '#666',
  },
  linkText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2),
  },
});

export default RegisterScreen;
