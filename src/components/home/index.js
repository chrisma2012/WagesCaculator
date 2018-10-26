import React, { Component } from 'react'
import { StyleSheet, View, Text, Picker, FlatList, TextInput } from 'react-native'

const FlatListData = [{
  id: 1,
  date: 1,
  day: '一',
  model: 100,
  todaySalary: 140
}, {
  id: 2,
  date: 1,
  day: '一',
  model: 100,
  todaySalary: 140
}, {
  id: 3,
  date: 1,
  day: '一',
  model: 100,
  todaySalary: 140
}, {
  id: 4,
  date: 1,
  day: '一',
  model: 100,
  todaySalary: 140
}]

// const flatListItem = (item) =>
//   (
//     <View key={item.id} style={styles.flatList}>
//       <Text style={[styles.flatListItem]}>{item.date}</Text>
//       <Text style={[styles.flatListItem]}>{item.day}</Text>
//       <TextInput style={[styles.flatListItem]}>{item.model}</TextInput>
//       <TextInput style={[styles.flatListItem]}>{item.todaySalary}</TextInput>
//     </View>
//   )


export default class Home extends Component {
  static navigationOptions = {
    title: '工资计算器'
  }
  constructor(props) {
    super(props);
    this.state = {
      year: 2018,
      month: 10
    }
  }

  render () {
    return (
      <View>
        {/* 年月 */}
        <View style={styles.date}>
          <Picker
            selectedValue={this.state.year}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="2018" value="2018" style={styles.pickerItem} />
            <Picker.Item label="2017" value="2017" style={styles.pickerItem} />
          </Picker>
          <Text >年</Text>
          <Picker
            selectedValue={this.state.month}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="10" value="10" style={styles.pickerItem} />
            <Picker.Item label="9" value="9" style={styles.pickerItem} />
          </Picker>
          <Text >月</Text>
        </View>
        {/* 内容区 */}
        <View style={styles.content}>
          <View style={styles.dataContent}>
            <View style={styles.dataContentTitle}>
              <Text style={styles.dataContentTitle}>日期</Text>
              <Text style={styles.dataContentTitle}>星期</Text>
              <Text style={styles.dataContentTitle}>模数</Text>
              <Text style={styles.dataContentTitle}>当日工资</Text>
            </View>
            <View style={styles.dataContentBody}>
              <FlatList data={FlatListData} renderItem={(item) =>
                (
                  <View key={item.id} style={styles.flatList}>
                    <Text style={[styles.flatListItem]}>{item.date}</Text>
                    <Text style={[styles.flatListItem]}>{item.day}</Text>
                    <TextInput style={[styles.flatListItem]}>{item.model}</TextInput>
                    <TextInput style={[styles.flatListItem]}>{item.todaySalary}</TextInput>
                  </View>
                )} />
            </View>
            <View >
              <View style={styles.outlineItem}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>当月工资</Text>
                <Text style={styles.outlineSubItem}>180</Text>
              </View>
              <View style={[styles.outlineItem, styles.outlineItemOdd]}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>全勤奖</Text>
                <Text style={styles.outlineSubItem}>180</Text>
              </View>
              <View style={styles.outlineItem}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>住房公积金</Text>
                <Text style={styles.outlineSubItem}>180</Text>
              </View>
              <View style={[styles.outlineItem, styles.outlineItemOdd]}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>社保</Text>
                <Text style={styles.outlineSubItem}>180</Text>
              </View>
              <View style={styles.outlineItem}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>附加</Text>
                <TextInput style={styles.outlineSubItem}>180</TextInput>
              </View>
              <View style={[styles.outlineItem, styles.outlineItemOdd]}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>底薪</Text>
                <Text style={styles.outlineSubItem}>180</Text>
              </View>
              <View style={styles.outlineItem}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>税前总工资</Text>
                <Text style={styles.outlineSubItem}>180</Text>
              </View>
              <View style={[styles.outlineItem, styles.outlineItemOdd]}>
                <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>税后总工资</Text>
                <Text style={styles.outlineSubItem}>180</Text>
              </View>
            </View>
          </View>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  date: {
    fontSize: 20,
    color: "blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  pickerItem: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red"
  },
  content: {
    display: "flex",
    flexDirection: "row"
  },

  dataContent: {
    flex: 1
  },
  dataContentTitle: {
    backgroundColor: "#e9f1af",
    display: "flex",
    flexDirection: "row"
  },
  dataContentTitle: {
    flex: 1,
    justifyContent: "center"
  },
  dataContentBody: {

  },
  flatList: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "pink"
  },
  flatListItem: {
    flex: 1,
    fontSize: 18
  },

  outlineItem: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    backgroundColor: "#94a1d4",
  },
  outlineItemOdd: {
    backgroundColor: "#5e6788"
  },
  outlineSubItem: {
    flex: 1,
    fontSize: 20,
  },
  outlineSubItemTitle: {
    flex: 2,
    paddingLeft: 10,

  }
})