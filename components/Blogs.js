import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {getData, deleteData} from '../_actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

class Blogs extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log('Blogs.js', this.props.data);
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}
          data={this.props.data}
          keyExtractor={item => item.key}
          renderItem={({item}) => {
            return (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    marginTop: 15,
                  }}>
                  <Text style={styles.textB}>No Container</Text>
                  <Text style={styles.textB}>Row</Text>
                  <Text style={styles.textB}>Size</Text>
                  <Text style={styles.textB}>Slot</Text>
                  <Text style={styles.textB}>Tier</Text>
                  <Text style={styles.textB}>Type</Text>
                  <Text style={styles.textB}>Action</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'grey',
                    padding: 14,
                    marginBottom: 10,
                    border: 1,
                    height: 55,
                  }}>
                  <Text style={styles.textA}>{item.nocontainer}</Text>
                  <Text style={styles.textA}>{item.row}</Text>
                  <Text style={styles.textA}>{item.size}</Text>
                  <Text style={styles.textA}>{item.slot}</Text>
                  <Text style={styles.textA}>{item.tier}</Text>
                  <Text style={styles.textA}>{item.type}</Text>
                  <View style={{flexDirection: 'column'}}>
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate('Edit', {...item})
                      }>
                      <View>
                        <Text style={{color: 'blue'}}>Edit</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => this.props.deleteData(item.key)}>
                      <View>
                        <Text style={{color: 'red'}}>Delete</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </>
            );
          }}
        />
      </View>
    );
  }
}

//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  textB: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  textA: {
    marginRight: 25,
  },
});

function mapStateToProps(state) {
  const data = _.map(state.datalist.datalist, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    data,
  };
}

export default connect(
  mapStateToProps,
  {getData, deleteData},
)(Blogs);
