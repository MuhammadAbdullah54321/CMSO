import React, {useContext, useState} from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import Logo from '../screens/Logo';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import login from '../screens/Login';
import {AuthContext} from '../screens/navigation/AuthProvider';
import database from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [mobilenumberError, setMobileNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const[validated, setValidated]=useState(false);
  const HandlSignup = () => {
   if (name.length < 3 || name.length == 0) {
      setNameError(true);
    }
    else{
      setNameError(false);

      if (!(mobilenumber.length == 11)) {
        setMobileNumberError(true);
        
      }
      else{
        setMobileNumberError(false);

        if (email.length < 7 || email.length == 0) {
          setEmailError(true);
        }
        else{
          setEmailError(false);

          if (password.length < 8) {
            setPasswordError(true);
          }
          else{
            setPasswordError(false);

          setValidated(true)
          }
        }
      }
    }

  };

  const LocalSignup = () => {
    HandlSignup()
    if(validated){
      signup(email, password)
      saveUserDb()

    }
    else{
       Alert.alert('Signup Failed ','There is some problem')
    }
  }

  const saveUserDb= async()=>{
     await AsyncStorage.setItem('Mobile',mobilenumber)
    database()
    .ref(`/CMSO/Users/${mobilenumber}/`)
    .set({
    Name: name,
    Mobile: mobilenumber,
    Email: email
  })
    .then(() => console.log('Data set.'));
  }

  const {signup} = useContext(AuthContext);

  return (
    <View style={styles.cointainer1}>
      <ImageBackground
        source={require('../assets/brickwall.jpg')}
        style={{width: 360, height: 650, flex: 1}}
      />
      <Logo />
      <Text style={{fontSize:20,color:'white',fontStyle:'italic'}}>Build With Us</Text>

      <View style={styles.cointainer}>
        <Text style={{color:'white', fontSize:18, paddingHorizontal:12}}>Create an Account</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Full Name"
          keyboardType='ascii-capable'
          placeholderTextColor="black"
          selectionColor="red"
          value={name}
          onChangeText={setName}
        />

        {nameError && <Text style={styles.errorText}>Invalid Name</Text>}

        <TextInput
          style={styles.inputBox}
          placeholder="Mobile Number"
          keyboardType="numeric"
          placeholderTextColor="black"
          selectionColor="red"
          value={mobilenumber}
          onChangeText={setMobileNumber}
        />
        {mobilenumberError && (
          <Text style={styles.errorText}>Invalid Mobile Number</Text>
        )}
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          keyboardType='email-address'
          placeholderTextColor="black"
          selectionColor="red"
          value={email}
          onChangeText={setEmail}
        />

        {emailError && <Text style={styles.errorText}>Invalid Email</Text>}
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={visible}
          placeholderTextColor="black"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.btnEye}
          onPress={() => {
            setVisible(!visible);
            setShow(!show);
          }}>
          <EntypoIcons
            name={show === false ? 'eye' : 'eye-with-line'}
            size={26}
            color="black"
          />
        </TouchableOpacity>

        {passwordError && (
          <Text style={styles.errorText}>Password must have 6 characters</Text>
        )}
        <TouchableOpacity
          onPress={LocalSignup}
          style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}> Already have an Account? </Text>
        <Button
          style={styles.signupButton}
          title="Login"
          onPress={() => navigation.goBack('login')}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  cointainer1: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
    marginBottom: 6,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  cointainer: {
    flexGrow: 1,
    justifyContent: 'center',
    //alignItems:'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'green',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    width: 300,
    marginVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    paddingVertical: 12,
  },

  errorText: {
    color: 'yellow',
    textAlign: 'left',
    fontSize: 18,
  },
  btnEye: {
    //position: 'absolute',
    left: 260,
    top: -50,
  },
});
