//package import
import React, {memo, useState, useCallback, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './styles';

const ItemList = props => {
  const {item, index} = props;

  const [totalLike, setTotalLike] = useState(item.totalLike);

  useEffect(() => {
    setTotalLike(item.totalLike);
  }, [item]);

  const _handleUpdateTotalLike = useCallback(
    type => {
      if (type === '+' && totalLike < 1) {
        setTotalLike(_prevState => _prevState + 1);
      } else if (type === '-' && totalLike >= 1) {
        setTotalLike(_prevState => _prevState - 1);
      }
    },
    [totalLike],
  );

  return (
    <View key={index} style={styles.wrapItem}>
      <ImageBackground
        resizeMode="cover"
        source={item.image}
        style={styles.height198}
        borderTopRightRadius={10}
        borderTopLeftRadius={10}
      />
      <View style={styles.wrapContentItem}>
        <View style={styles.wrapTotalLike}>
          <Text style={styles.totalLike}>{totalLike} Like</Text>
        </View>
        <View style={styles.wrapLikeAndDislike}>
          <TouchableOpacity
            onPress={() => _handleUpdateTotalLike('+')}
            style={styles.wrapLike}>
            <Text style={styles.textLike}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => _handleUpdateTotalLike('-')}
            style={styles.wrapDislike}>
            <Text style={styles.textDislike}>Dislike</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

ItemList.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

ItemList.defaultProps = {
  item: {
    image: '',
    totalLike: 0,
  },
  index: 0,
};

export default memo(ItemList);
