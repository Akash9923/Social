import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StatusBar} from 'react-native';
import colors from '../../themes/colors';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import CommonStyle from '../../themes/commonstyles';
import Header from '../../components/Header/Header';
import {getcomment, createcomment} from '../../redux/actions';
import InputField from '../../components/InputField/InputField';
import Listing from '../../components/Listing/Listing';
import {moderateScale} from 'react-native-size-matters';
import Button from '../../components/Button/Button';

function PostScreen({
  navigation,
  comments,
  getcommentlist,
  createcomment,
  route,
  loading,
}) {
  const [content, setContent] = useState('');
  useEffect(() => {
    getcommentlist(route.params.id);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar backgroundColor={colors.darkblue} />
      <Header
        containerStyle={{elevation: 7}}
        back
        title={'Post Details'}
        navigation={navigation}
      />
      <View
        style={{
          paddingHorizontal: '5%',
          paddingTop: 15,
          backgroundColor: colors.whip,
          minHeight: '45%',
        }}>
        <Text style={CommonStyle.poststyle}> {route.params.title}</Text>
      </View>
      <View style={{backgroundColor: colors.aqua}}>
        <View style={{paddingHorizontal: '5%', paddingTop: 15}}>
          <Text style={CommonStyle.labelstyle}> Comments</Text>
          <View style={{flexDirection: 'row'}}>
            <InputField
              value={content}
              containerStyle={{width: '75%', paddingHorizontal: 0}}
              inputstyle={{backgroundColor: colors.lavender}}
              changetext={e => setContent(e)}
              placeholder="Add comment"
            />
            <Button
              title={'Post'}
              onPress={() => {
                createcomment({content, postId: route.params.id, navigation});
                setContent('');
              }}
            />
          </View>
        </View>
        { (
          <View style={{height: '45%'}}>
            <FlatList
              data={comments}
              renderItem={({item}) => (
                <Listing
                  containerStyle={{
                    backgroundColor: colors.lavender,
                    marginHorizontal: '5%',
                    borderRadius: 10,
                    marginVertical: moderateScale(5),
                  }}
                  textStyle={{fontWeight: '100', fontSize: moderateScale(14)}}
                  title={item.content}
                />
              )}
              keyExtractor={item => item._id}
            />
          </View>
        )}
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  const comments = _.get(state, 'comments', []);
  const loading = _.get(state, 'loading', false);
  return {comments, loading};
};

const mapDispatchToProps = dispatch => ({
  getcommentlist: data => dispatch(getcomment(data)),
  createcomment: data => dispatch(createcomment(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
