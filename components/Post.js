import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Picker} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {postData} from '../_actions';
import {connect} from 'react-redux';

class Post extends Component {
  state = {
    nocontainer: '',
    size: '',
    type: '',
    slot: '',
    row: '',
    tier: '',
  };

  submit = () => {
    this.props.postData(
      this.state.nocontainer,
      this.state.size,
      this.state.type,
      this.state.slot,
      this.state.row,
      this.state.tier,
    );

    this.setState({
      nocontainer: '',
      size: '',
      type: '',
      slot: '',
      row: '',
      tier: '',
    });

    this.props.navigation.navigate('HOME');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text> Cikarang Dry Port </Text>
        <TextInput
          style={styles.field}
          placeholder="No Container"
          onChangeText={nocontainer => this.setState({nocontainer})}
          value={this.state.nocontainer}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.field}
          placeholder="Size"
          onChangeText={size => this.setState({size})}
          value={this.state.size}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.field}
          placeholder="Type"
          onChangeText={type => this.setState({type})}
          value={this.state.type}
        />
        <TextInput
          style={styles.field}
          placeholder="Slot"
          onChangeText={slot => this.setState({slot})}
          value={this.state.slot}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.field}
          placeholder="Row"
          onChangeText={row => this.setState({row})}
          value={this.state.row}
        />
        <TextInput
          style={styles.field}
          placeholder="Tier"
          onChangeText={tier => this.setState({tier})}
          value={this.state.tier}
        />

        <Button style={styles.field} title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 30,
  },
  field: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default connect(
  null,
  {postData},
)(Post);
