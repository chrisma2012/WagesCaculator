import React, { Component } from 'react'
import {
  StyleSheet, 
  View, 
  Text, 
  Picker, 
  FlatList, 
  TextInput, 
  ScrollView,
  Dimensions
} from 'react-native'

const screenHeight = Dimensions.get('window').height;

const flatListData = [{
  id: '16',
  date: '1',
  day: '一',
  model: '100',
  todaySalary: '140'
}, {
  id: '17',
  date: '1',
  day: '一',
  model: '100',
  todaySalary: '140'
}, {
  id: '18',
  date: 1,
  day: '一',
  model: '100',
  todaySalary: '140'
}, {
  id: '19',
  date: '1',
  day: '一',
  model: '100',
  todaySalary: '140'
}, {
  id: '20',
  date: '1',
  day: '一',
  model: '100',
  todaySalary: '140'
}]


const flatListItemFunc = ({ item }) =>
  (
    <View style={styles.flatList}>
      <Text style={[styles.flatListItem, { flex: 1 }]}>{item.date}</Text>
      <Text style={[styles.flatListItem, { flex: 1 }]}>{item.day}</Text>
      <TextInput style={[styles.flatListItem, { flex: 2, backgroundColor: 'white' }]} value={item.model} />
      <Text style={[styles.flatListItem, { flex: 2, color: '#d85b3b' }]}  >{item.todaySalary}</Text>
    </View>
  )


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
        <View style={styles.dataContentTitle}>
          <Text style={[styles.dataContentTitleItem, { flex: 1 }]}>日期</Text>
          <Text style={[styles.dataContentTitleItem, { flex: 1 }]}>星期</Text>
          <Text style={[styles.dataContentTitleItem, { flex: 2 }]}>模数</Text>
          <Text style={[styles.dataContentTitleItem, { flex: 2 }]}>当日工资</Text>
        </View>
        {/* 内容区 */}
        <ScrollView style={{height:screenHeight - 190}}>
          <View style={styles.dataContent}>
            <FlatList
              data={flatListData}
              keyExtractor={(item) => item.id}
              renderItem={flatListItemFunc}
              ItemSeparatorComponent={() => <View style={{ height: 1, borderStyle: 'dashed' }}></View>}
              initialNumToRender={5}
              refreshing={true}
            // ItemSeparatorComponent={}
            />
          </View>

          <View style={{ display: 'flex', overflow: 'hidden' }}>
            <View style={styles.outlineItem}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>当月工资</Text>
              <Text style={styles.outlineItemVal}>180</Text>
            </View>
            <View style={[styles.outlineItem, styles.outlineItemOdd]}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>全勤奖</Text>
              <Text style={styles.outlineItemVal}>180</Text>
            </View>
            <View style={styles.outlineItem}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>住房公积金</Text>
              <Text style={styles.outlineItemVal}>180</Text>
            </View>
            <View style={[styles.outlineItem, styles.outlineItemOdd]}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>社保</Text>
              <Text style={styles.outlineItemVal}>180</Text>
            </View>
            <View style={styles.outlineItem}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>附加</Text>
              <TextInput
                style={[styles.outlineItemVal, { display: 'flex' }]}
                placeholder="附加数据"
              ></TextInput>
            </View>
            <View style={[styles.outlineItem, styles.outlineItemOdd]}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>底薪</Text>
              <Text style={styles.outlineItemVal}>180</Text>
            </View>
            <View style={styles.outlineItem}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>税前总工资</Text>
              <Text style={styles.outlineItemVal}>180</Text>
            </View>
            <View style={[styles.outlineItem, styles.outlineItemOdd]}>
              <Text style={[styles.outlineSubItem, styles.outlineSubItemTitle]}>税后总工资</Text>
              <Text style={styles.outlineItemVal}>180</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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


  // dataContent: {
  //   flex: 1
  // },
  dataContentTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: "#e9f1af"
  },
  dataContentTitleItem: {
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },

  flatList: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  flatListItem: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },

  outlineItem: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    backgroundColor: "#94a1d4",
  },
  outlineItemOdd: {
    backgroundColor: "#387abf"
  },
  outlineSubItem: {
    fontSize: 20,
  },
  outlineSubItemTitle: {
    flex: 2,
    paddingLeft: 10,
  },
  outlineItemVal: {
    fontSize: 20,
    height: 60,
    flex: 3,
    lineHeight: 60,
    textAlign: 'right',
    paddingRight: 25
  }
})