import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modalbox';
import {connect} from 'react-redux';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmUwNmViOTJiOTQ4Zjg1YmM0ODJhNDc0NzEzOTA0OGE0MTEzYzA5MDc1ZWYxYzUxZjcyZTE4Y2UyNDNkYWY4N2VlM2QwYTNmY2E0N2ZlMWUiLCJpYXQiOjE1ODIwMzM1MDMsIm5iZiI6MTU4MjAzMzUwMywiZXhwIjoxNjEzNjU1OTAzLCJzdWIiOiI0NSIsInNjb3BlcyI6W119.VymWemOsfaCs9s_EK_glBYM79g1i3uEh7qsQPhz5VhsvdBl3oTJHSnjtja3r9-YcLAadAYxSkZ_ke2_pwwB8ckYCvcQsGFo9f9C-t8sdRqjv4U1tGvvGGuN4IOn7-7P-TRImwzvfrIrZXUQUzd8JbS7y-A9COghAU8I_LirLTXPKPwHWo1hZnuE50RQoJe02GgQeJd8cie6WBDOIbYYmnLzEFKs6ODmG1eXGp_Xt4tkL229Bax3wdyuqfy8pdSaICrxFAhyM1x0BdQaBAk-O2f2IQrPLNCu0ubZtEPQEo2Vv1XOKHXnsQImxqijP4wDK9jvcnY5uilw803xgbxc-LorBKw-kta222n-ByIX6f9XMlUSu2YES7ikrapMZ-zHPc19gn8xP0MuDPASRhwzRilmIbY3mu2hBMNMqsvW99koOxhWfC49ue2WxjzJwmG3jbPHtVXcBuEvKFxeagjWzrDYY4EbHUkLqe1bJmCjFbr-vrmq1SUD18wVV9USzM5h0yygMq7PRXQfU_JXg0NtpHYhyxYfT-aROwzmXbuzQ29LFnzU2TIMSd3eKxOVZObEEPzhytFgLpvBVsCePteThjX5Fq3eTYcvWKXgIhcMIPv1Hc2JCaDxktuoh2wlwraSv8r-wmlWFHmjB1st3DPONffAJIlQcSnNX_rI4AT88thY';
export default class EditModal extends Component {
  state = {
    id: '',
    name: '',
    color: '',
  };
  showModal = item => {
    this.setState({
      id: item.id,
      name: item.name,
      color: item.color,
    });
    this.refs.modal.open();
  };
  render() {
    const {mainComponent} = this.props;
    console.log('Modal Props', mainComponent);
    return (
      <Modal style={styles.modal} ref={'modal'}>
        <TextInput
          value={this.state.name}
          onChangeText={text => {
            this.setState({name: text});
          }}
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        />
        <TextInput
          value={this.state.color}
          onChangeText={text => {
            this.setState({color: text});
          }}
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        />
        <TouchableOpacity
          onPress={() => {
            mainComponent.props.editData(
              token,
              this.state.name,
              this.state.color,
              this.state.id,
              2,
            );
            this.refs.modal.close();
          }}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}
// const mapStateToProps = state => {
//   return {};
// };
// export default connect(mapStateToProps)(EditModal);
const styles = StyleSheet.create({
  modal: {
    height: 200,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
