import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../src/Redux/Actions/FetchAction';
import {addData} from '../src/Redux/Actions/AddActions';
import {editData} from './Redux/Actions/EditActions';
import FlatListItem from './components/FlatListItem';
import EditModal from './components/EditModal';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmUwNmViOTJiOTQ4Zjg1YmM0ODJhNDc0NzEzOTA0OGE0MTEzYzA5MDc1ZWYxYzUxZjcyZTE4Y2UyNDNkYWY4N2VlM2QwYTNmY2E0N2ZlMWUiLCJpYXQiOjE1ODIwMzM1MDMsIm5iZiI6MTU4MjAzMzUwMywiZXhwIjoxNjEzNjU1OTAzLCJzdWIiOiI0NSIsInNjb3BlcyI6W119.VymWemOsfaCs9s_EK_glBYM79g1i3uEh7qsQPhz5VhsvdBl3oTJHSnjtja3r9-YcLAadAYxSkZ_ke2_pwwB8ckYCvcQsGFo9f9C-t8sdRqjv4U1tGvvGGuN4IOn7-7P-TRImwzvfrIrZXUQUzd8JbS7y-A9COghAU8I_LirLTXPKPwHWo1hZnuE50RQoJe02GgQeJd8cie6WBDOIbYYmnLzEFKs6ODmG1eXGp_Xt4tkL229Bax3wdyuqfy8pdSaICrxFAhyM1x0BdQaBAk-O2f2IQrPLNCu0ubZtEPQEo2Vv1XOKHXnsQImxqijP4wDK9jvcnY5uilw803xgbxc-LorBKw-kta222n-ByIX6f9XMlUSu2YES7ikrapMZ-zHPc19gn8xP0MuDPASRhwzRilmIbY3mu2hBMNMqsvW99koOxhWfC49ue2WxjzJwmG3jbPHtVXcBuEvKFxeagjWzrDYY4EbHUkLqe1bJmCjFbr-vrmq1SUD18wVV9USzM5h0yygMq7PRXQfU_JXg0NtpHYhyxYfT-aROwzmXbuzQ29LFnzU2TIMSd3eKxOVZObEEPzhytFgLpvBVsCePteThjX5Fq3eTYcvWKXgIhcMIPv1Hc2JCaDxktuoh2wlwraSv8r-wmlWFHmjB1st3DPONffAJIlQcSnNX_rI4AT88thY';
let test = {
  data: [
    {
      id: 1,
      name: 'Giang',
      color: 'Test',
      abc: 'abc',
    },
    {
      id: 2,
      name: 'Giang',
      color: 'Test',
      abc: 'abc',
    },
    {
      id: 3,
      name: 'Giang',
      color: 'Test',
      abc: 'abc',
    },
  ],
};
const test2 = {
  name: 'Thao',
  color: 'Thao',
};
class Main extends Component {
  state = {
    name: '',
    color: '',
  };
  renderItem = ({item, index}) => {
    return <FlatListItem item={item} index={index} mainComponent={this} />;
  };
  render() {
    console.log('DataList', this.props.data.data);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({name: text});
          }}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({color: text});
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.fetchData(token);
            }}>
            <Text> Fetch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log(test.data.filter(e => e.id !== 1));
              this.props.addData(token, 2, this.state.name, this.state.color);
            }}>
            <Text> Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.refs.modalEdit.showModal();
            }}>
            <Text> Show Modal</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <FlatList data={this.props.data.data} renderItem={this.renderItem} />
        </View>
        <EditModal ref="modalEdit" mainComponent={this} />
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    data: state.fetch,
  };
};
export default connect(
  mapStateToProps,
  {fetchData, addData, editData},
)(Main);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
  btn: {
    height: 30,
    width: 60,
    backgroundColor: 'red',
    marginTop: 20,
    marginLeft: 20,
  },
});
