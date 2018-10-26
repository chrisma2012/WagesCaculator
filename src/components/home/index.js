import React, { Component } from 'react'
import { StyleSheet,View,Text } from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title:'首页'
  }

  render () {
    return (
      <View>
        <Text style={styles.title}>这是计算器首页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "blue"
  }
})