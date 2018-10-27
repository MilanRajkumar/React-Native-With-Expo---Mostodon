import React from 'react';
import { TextInput, View, Text } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, inputStyle } = styles
  let iconName
  if (secureTextEntry) {
    iconName = 'lock';
  } else {
    iconName = 'user';
  }
  return (
    <View style= { containerStyle }>
        <TextInput
          secureTextEntry = { secureTextEntry }
          autoCorrect = { false }
          placeholder = { placeholder }
          style = { inputStyle }
          value = { value }
          onChangeText = { onChangeText }/>
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2
  }
}

export { Input }
