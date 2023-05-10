import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import TestLogic from './Test.logic';
import styles from './Test.styles';
import {ItemList} from '../../components';

const TestScreen = () => {
  const {data, actions} = TestLogic();

  return (
    <ScrollView style={{flex: 1, paddingTop: data.insets.top}}>
      <View style={styles.container}>
        <View style={styles.wrapActions}>
          <TouchableOpacity
            onPress={() => actions._handleUpdateTotalLike('+')}
            style={styles.buttonLikeAll}>
            <Text style={styles.textLikeAndDislikeAll}>Like All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => actions._handleUpdateTotalLike('-')}
            style={styles.buttonResetAll}>
            <Text style={styles.textResetAll}>Reset All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => actions._handleUpdateTotalLike('-')}
            style={styles.buttonDislikeAll}>
            <Text style={styles.textLikeAndDislikeAll}>Dislike All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data.listData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_props => <ItemList {..._props} />}
        />
      </View>
    </ScrollView>
  );
};

export default TestScreen;
