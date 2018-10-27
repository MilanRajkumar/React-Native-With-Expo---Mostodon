import React, { Component } from 'react';
import { Modal, Text, View, Image, TouchableWithoutFeedback, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { loginUser, signUpUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, Dialog } from './common';

var dismissKeyboard = require('dismissKeyboard');

class LoginForm extends Component {
  state = { email: '' ,
  password: '' ,
  firstName: '',
  lastName: '',
  userName: '',
  showDialog: false
}
  componentDidUpdate () {
    if (!this.props.error && this.props.sign_up_success_msg) {
      console.log('Account created.');
    }
  }

  onEmailChange (text) {
    this.setState({ email:text })
  }
  onPasswordChange (text) {
    this.setState({ password: text })
  }
  onButtonPress () {
    const { email, password }  = this.state;
    this.props.loginUser(email, password);
    this.props.history.replace('/users_list')
  }

  onAccountButtonPress () {
    const { firstName, lastName, userName, email, password }  = this.state;
    const user_data = {firstName, lastName, userName, email, password}
    this.props.signUpUser(user_data, this.props.history);
  }

  setModalVisible(visible) {
    this.setState({showDialog: visible});
  }

  render () {
    const {
      formCenterStyle,
      imageStyle,
      imageStyle1,
      imageContainerStyle,
      formInputStyle,
      marginTopStyle,
      iconContainerStyle,
      linkTextContainerStyle,
      iconStyle,
      svStyle,
      nameContainerStyle,
      nameStyle,
      signUpContainerStyle,
      signUpEmailPasswordStyle,
      largerTextStyle
    } = styles
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.formContainerStyle}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showDialog}
            onRequestClose={() => {}}>
              <View style={signUpContainerStyle}>
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.showDialog)}}>
                  <Text style={{margin: 10}}>
                    <Icon name="close" size={30} color="#000" />
                  </Text>
                </TouchableHighlight>
                <View style = {{flex: 3, justifyContent: 'center' }}>
                  <Text style={largerTextStyle}>Create New Account</Text>
                </View>
                <View style = {nameContainerStyle}>
                  <View style = {nameStyle}>
                    <Input
                      secureTextEntry = { false }
                      label = "Firstname"
                      placeholder = "Firstname"
                      onChangeText = { (text) =>  this.setState({firstName: text}) }
                      value = { this.state.firstName }/>
                 </View>
                 <View style = {nameStyle}>
                  <Input
                    secureTextEntry = { false }
                    label = "Lastname"
                    placeholder = "Lastname"
                    onChangeText = { (text) =>  this.setState({lastName: text}) }
                    value = { this.state.lastName }/>
                  </View>
                </View>
                <View style={signUpEmailPasswordStyle}>
                  <Input
                     secureTextEntry = { false }
                     label = "Username"
                     placeholder = "Username"
                     onChangeText = { (text) =>  this.setState({userName: text}) }
                     value = { this.state.userName }/>
                   <Input
                     secureTextEntry = { false }
                     label = "Email"
                     placeholder = "user@gmail.com"
                     onChangeText = { this.onEmailChange.bind(this) }
                     value = { this.state.email }/>

                   <Input
                     secureTextEntry = { true }
                     label = "Password"
                     placeholder = "password"
                     onChangeText = { this.onPasswordChange.bind(this) }
                     value = { this.state.password }/>

                     <Text style = { styles.licenseTextStyle }>
                       By applying sigup you agree to
                       <Text style = {{color: '#3c9add'}}> Tearms & Condition</Text>
                    </Text>

                    <View style={{margin: 20}}>
                     <Button onPress = { this.onAccountButtonPress.bind(this)}>
                       Submit
                     </Button>
                   </View>
                 </View>
                 </View>
          </Modal>
          <View style={imageContainerStyle}>
            <Image
             style={imageStyle}
             source={require('../assets/image/logo.png')}/>
          </View>
           <View style={formInputStyle}>
               <Input
                 secureTextEntry = { false }
                 label = "Email"
                 placeholder = "user@gmail.com"
                 onChangeText = { this.onEmailChange.bind(this) }
                 value = { this.state.email }/>

               <Input
                 secureTextEntry = { true }
                 label = "Password"
                 placeholder = "password"
                 onChangeText = { this.onPasswordChange.bind(this) }
                 value = { this.state.password }/>

             <Text style = { styles.errorTextStyle }>
               { this.props.error }
             </Text>
             <View style={linkTextContainerStyle}>
              <Text style={styles.linkTextStyle} >Forget Password?</Text>
             </View>
             <View style={marginTopStyle}>
             <Button onPress = { this.onButtonPress.bind(this)}>
              Sign In
             </Button>
             </View>
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{"Don't have an account?"}</Text>
              <Text style={styles.linkTextStyle} onPress={ () =>  this.setState({showDialog: true}) }>Create New Account</Text>
             </View>
           </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  licenseTextStyle : {
    fontSize: 12,
    padding: 10,
    alignSelf: 'center',
    color: 'black'
  },
  formContainerStyle: {
    padding: 10,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  imageStyle: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  },
  imageStyle1: {
  },
  imageContainerStyle: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formInputStyle: {
    flex: 4,
    padding: 5
  },
  marginTopStyle: {
    marginTop: 20
  },
  iconContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconStyle: {
    width: 36,
    height: 36,
    marginLeft: 15,
    marginRight: 15
  },
  linkTextContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  linkTextStyle: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    color: 'black'
  },
  nameContainerStyle: {
    flexDirection: 'row',
  },
  nameStyle: {
    flex: 1,
  },
  signUpContainerStyle: {
    backgroundColor: '#eee',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    flex: 10,
    flexDirection: 'column',
    borderRadius: 2
  },
  largerTextStyle: {
    padding: 18,
    fontSize: 26,
    alignSelf: 'center',
    color: 'black'
  },
  signUpEmailPasswordStyle: {
    flexDirection: 'column',
    flex: 7,
  }
}
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, sign_up_success_msg } = auth;
  return { email, password, error, loading, sign_up_success_msg };
}
export default connect (mapStateToProps, { loginUser, signUpUser })(withRouter(LoginForm));
