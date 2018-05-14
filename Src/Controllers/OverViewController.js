import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ART,

} from 'react-native';
import Routes from '../Routes';
import AssetForm from '../View/AssetForm';

import { Actions } from 'react-native-router-flux';
const {
  Group,
  Shape,
  Surface,
} = ART;

export default class OverViewController extends Component {

  render() {
    return (
      <Surface width={200} height={100}>
        <Group x={0} y={0}>
          <ART.Shape
            d={this.props.linePath}
            stroke="#000"
            strokeWidth={1}
          />
        </Group>
      </Surface>
    );
  }
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },

  });
