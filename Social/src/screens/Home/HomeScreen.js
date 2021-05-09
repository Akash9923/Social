import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, StatusBar} from 'react-native';
import colors from '../../themes/colors';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import Header from '../../components/Header/Header';
import Listing from '../../components/Listing/Listing';
import {getusers} from '../../redux/actions';

function HomeScreen({navigation, users, getuserslist}) {
  useEffect(() => {
    getuserslist();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar backgroundColor={colors.darkblue} />
      <Header
        containerStyle={{elevation: 7}}
        title={'Home'}
        navigation={navigation}
      />
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Listing
            title={item.name}
            onPress={() => navigation.push('PostlistScreen', {id: item._id})}
          />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}
const mapStateToProps = state => {
  const users = _.get(state, 'users', []);
  return {users};
};

const mapDispatchToProps = dispatch => ({
  getuserslist: data => dispatch(getusers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
