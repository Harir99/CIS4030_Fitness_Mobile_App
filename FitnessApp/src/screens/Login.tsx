import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // navigate to courses page
  }

  const handleHelp = () => {
    // navigate to help page
  }

  const handleNav = () => {
    // navigate to register page
  }

  return (
    <View style={styles.Container}>
      <View style={styles.TitleContainer}>
        <Text style={styles.Title}>FitNow</Text>
      </View>
      <Text style={styles.Header}>Sign In</Text>
      <View style={styles.LoginForm}>
        <View style={styles.UserForm}>
          <Image
            style={styles.ProfileImage}
            source={{
              uri: "https://img.icons8.com/material/24/person-male.png"
            }}
          />
          <TextInput
            placeholder='Username'
            placeholderTextColor='grey'
            onChangeText={text =>setEmail(text)}
          />
        </View>
        <View style={styles.PassForm}>
          <Image
            style={styles.ProfileImage}
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/lock--v1.png"
            }}
          />
          <TextInput
            placeholder='Password'
            placeholderTextColor='grey'
            secureTextEntry
            onChangeText={text =>setPassword(text)}
          />
        </View>
        <View style={styles.InputContainer}>
          <TouchableOpacity 
            style={styles.LoginButton}
            onPress={handleLogin}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleHelp}
          >
            <Text>Need Help?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RegisterContainer}>
          <Text>New? </Text>
          <TouchableOpacity
            onPress={handleNav}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ImageContainer}>
        <ImageBackground
          style={styles.BackgroundImage}
          source={
            require('../assets/Images/login/loginImage.png')
          }
        />
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 100,
  },
  TitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 40,
    padding: 10,
    paddingHorizontal: 40,
  },
  Header: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 40,
  },
  LoginForm: {
    gap: 10,
    paddingHorizontal: 25,
  },
  UserForm: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 30,
    paddingHorizontal: 10,
    gap: 5,
  },
  ProfileImage: {
    width: 20,
    height: 20,
  },
  PassForm: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 30,
    paddingHorizontal: 10,
    gap: 5,
  },
  InputContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LoginButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  BackgroundImage: {
    width: 400,
    height: 400,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0
  },
  RegisterContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    paddingTop: 10
  }
});

export default Login;
