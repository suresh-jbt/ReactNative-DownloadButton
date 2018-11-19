import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProgressCircle from 'react-native-progress-circle';

export default class Button extends Component {

  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }



  render() {
    const { onStart, buttonStyle, buttonTextStyle, buttonText, percent, onAbort, stopIconColor= 'gray', stopIconSize = 25,
        progressColor = '#0757B7', progressShadowColor = '#999', progressBgColor = '#F5FCFF', progressRadius = 50,
        progressBorderWidth = 5} = this.props;
    return (
      <View style={styles.container}>
          {
              percent == 0
                  ? <TouchableOpacity
                      style={[styles.submitButtonStyle, buttonStyle]}
                      activeOpacity={.5}
                      onPress={onStart ? onStart : {}}>
                      <Text style={[styles.textStyle, buttonTextStyle]}> {buttonText} </Text>
                  </TouchableOpacity>
                  : <ProgressCircle
                      percent={percent}
                      radius={progressRadius}
                      borderWidth={progressBorderWidth}
                      color={progressColor}
                      shadowColor={progressShadowColor}
                      bgColor={progressBgColor}
                  >
                      <TouchableOpacity
                          activeOpacity={.5}
                          onPress={onAbort ? onAbort : {}}>
                            <Icon name="stop" color={stopIconColor} size={stopIconSize}/>
                      </TouchableOpacity>
                  </ProgressCircle>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  submitButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor:'lightgray',
    width: 200,
    borderRadius:100,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textStyle:{
      alignSelf: 'center',
      color:'#0757B7',
      textAlign:'center',
      fontWeight: '500',
      fontSize: 26,
      letterSpacing: 1
  }
});
