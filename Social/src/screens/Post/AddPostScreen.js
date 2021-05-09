import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import colors from '../../themes/colors';
import {connect} from 'react-redux';
import * as _ from 'lodash';
import Header from '../../components/Header/Header';
import InputField from '../../components/InputField/InputField';

import {createpost} from '../../redux/actions';
import Button from '../../components/Button/Button';

function AddPostScreen({navigation, route, createpost}) {
  const [title, setTitle] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar backgroundColor={colors.darkblue} />
      <Header
        containerStyle={{elevation: 7}}
        back
        title={'Add Post'}
        navigation={navigation}
      />

      <InputField
        label="Post title"
        value={title}
        changetext={e => setTitle(e)}
        placeholder="Enter post title"
        multiline
      />

      <Button
        title={'Create Post'}
        onPress={() =>
          createpost({title, creadtedBy: route.params.id, navigation})
        }
      />
    </View>
  );
}
const mapStateToProps = state => {
  const loading = _.get(state, 'loading', false);
  return {loading};
};

const mapDispatchToProps = dispatch => ({
  createpost: data => dispatch(createpost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostScreen);
