/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      downloadCompleted: 0,
      download: false,
    }
    this.timer = null;
  }

  _startDownload = () => {
      this.setState({downloadCompleted: 5});
      this.timer = setInterval(() => {
        const { downloadCompleted } = this.state;
        if (downloadCompleted >= 100) {
            this.setState({downloadCompleted: 0, download:true});
            clearInterval(this.timer);
        } else {
            this.setState({downloadCompleted: downloadCompleted + 5});
        }
    },500);
  }

  _stopDownload = () => {
    this.setState({downloadCompleted: 0, download: false});
    clearInterval(this.timer);
  }

  render() {
    const { downloadCompleted, download } = this.state;
    console.log('downloadCompleted', downloadCompleted);
    return (
      <View style={styles.container}>
          <Button
                onStart={this._startDownload.bind(this)}
                buttonStyle={styles.submitButtonStyle}
                buttonTextStyle={styles.textStyle}
                buttonText={download ? 'OPEN' : 'DOWNLOAD'}
                percent={downloadCompleted}
                onAbort={this._stopDownload.bind(this)}
                stopIconColor='#0757B7'
                stopIconSize={30}
                progressColor="#0757B7"
                progressShadowColor="#999"
                progressBgColor="#F5FCFF"
                progressRadius={50}
                progressBorderWidth={5}
          />
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
