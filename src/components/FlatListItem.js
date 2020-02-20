import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Swipeout from 'react-native-swipeout';
import {connect} from 'react-redux';
import {deleteData} from '../Redux/Actions/DeleteAction';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmUwNmViOTJiOTQ4Zjg1YmM0ODJhNDc0NzEzOTA0OGE0MTEzYzA5MDc1ZWYxYzUxZjcyZTE4Y2UyNDNkYWY4N2VlM2QwYTNmY2E0N2ZlMWUiLCJpYXQiOjE1ODIwMzM1MDMsIm5iZiI6MTU4MjAzMzUwMywiZXhwIjoxNjEzNjU1OTAzLCJzdWIiOiI0NSIsInNjb3BlcyI6W119.VymWemOsfaCs9s_EK_glBYM79g1i3uEh7qsQPhz5VhsvdBl3oTJHSnjtja3r9-YcLAadAYxSkZ_ke2_pwwB8ckYCvcQsGFo9f9C-t8sdRqjv4U1tGvvGGuN4IOn7-7P-TRImwzvfrIrZXUQUzd8JbS7y-A9COghAU8I_LirLTXPKPwHWo1hZnuE50RQoJe02GgQeJd8cie6WBDOIbYYmnLzEFKs6ODmG1eXGp_Xt4tkL229Bax3wdyuqfy8pdSaICrxFAhyM1x0BdQaBAk-O2f2IQrPLNCu0ubZtEPQEo2Vv1XOKHXnsQImxqijP4wDK9jvcnY5uilw803xgbxc-LorBKw-kta222n-ByIX6f9XMlUSu2YES7ikrapMZ-zHPc19gn8xP0MuDPASRhwzRilmIbY3mu2hBMNMqsvW99koOxhWfC49ue2WxjzJwmG3jbPHtVXcBuEvKFxeagjWzrDYY4EbHUkLqe1bJmCjFbr-vrmq1SUD18wVV9USzM5h0yygMq7PRXQfU_JXg0NtpHYhyxYfT-aROwzmXbuzQ29LFnzU2TIMSd3eKxOVZObEEPzhytFgLpvBVsCePteThjX5Fq3eTYcvWKXgIhcMIPv1Hc2JCaDxktuoh2wlwraSv8r-wmlWFHmjB1st3DPONffAJIlQcSnNX_rI4AT88thY';
class FlatListItem extends Component {
  state = {};
  render() {
    // console.log('Props Item', this.props);
    const item = this.props.item;
    const swipeSettings = {
      autoClose: true,
      right: [
        {
          onPress: () => {
            const {mainComponent} = this.props;
            console.log(mainComponent.refs.modalEdit);
            mainComponent.refs.modalEdit.showModal(item);
          },
          text: 'Edit',
          type: 'primary',
        },
        {
          onPress: () => {
            this.props.deleteData(token, item.id);
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.id,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.container}>
          <Text>{item.name} </Text>
          <Text>{item.color} </Text>
        </View>
      </Swipeout>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {deleteData},
)(FlatListItem);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 300,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'space-around',
  },
});
