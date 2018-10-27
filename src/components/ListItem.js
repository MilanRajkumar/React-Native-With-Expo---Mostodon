import React, {Component} from 'react';
import {CardSection} from './common';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListItem extends Component {
  render () {
    const {
      containerStyle,
      usernameStyle,
      pImageContainerStyle,
      pImageStyle,
      textStyle,
      horizontalLine,
      checkboxStyle,
    } = styles
    let { id, first_name, last_name, avatar } = this.props.data
    console.log(first_name, last_name);
    return(
        <View style = {containerStyle}>
          <View style = {pImageContainerStyle}>
            <Image
              style={pImageStyle}
              source={{uri: avatar}}/>
          </View>
          <View style = {usernameStyle}>
            <Text style = {textStyle}>{`${first_name} ${last_name}`}</Text>
          </View>
          <TouchableHighlight style = {checkboxStyle}>
            <Text style={{margin: 10}}>
              <Icon name="close" size={30} color="#000" />
            </Text>
          </TouchableHighlight>
        </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 10,
    flexDirection: 'row',
  },
  usernameStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  pImageContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
  pImageStyle: {
    height: 50,
    width: 50,
    borderRadius: 4,
    alignSelf: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'black',
  },
  checkboxStyle: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  horizontalLine: {
    backgroundColor: 'black',
    flex: 1,
    height: 1
  },
};

export default ListItem;
