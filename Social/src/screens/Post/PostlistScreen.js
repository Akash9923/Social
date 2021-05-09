import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, StatusBar} from 'react-native';
import colors from '../../themes/colors';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import Header from '../../components/Header/Header';
import Listing from '../../components/Listing/Listing';
import {getpost} from '../../redux/actions';

function PostlistScreen({navigation, posts, loading, getpostlist, route}) {
  useEffect(() => {
    getpostlist(route.params.id || '');
  }, []);
  console.log("commernt",posts)

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar backgroundColor={colors.darkblue} />
      <Header
        containerStyle={{elevation: 7}}
        back
        title={'Post List'}
        navigation={navigation}
        add
        onPress={() => navigation.push('AddPostScreen', {id: route.params.id})}
      />
      {!loading && (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <Listing
              title={item.title}
              onPress={() =>
                navigation.push('PostScreen', {id: item._id, title: item.title})
              }
            />
          )}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
}
const mapStateToProps = state => {
  const posts = _.get(state, 'posts', []);
  const loading = _.get(state, 'loading', false);

  return {posts, loading};
};

const mapDispatchToProps = dispatch => ({
  getpostlist: data => dispatch(getpost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostlistScreen);
