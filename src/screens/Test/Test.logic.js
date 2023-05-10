//local import here
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TestLogic = () => {
  const insets = useSafeAreaInsets();

  //package value here
  const [listData, setListData] = useState([
    {
      image: require('../../images/lake.png'),
      totalLike: 0,
    },
    {
      image: require('../../images/splash.png'),
      totalLike: 0,
    },
    {
      image: require('../../images/black.png'),
      totalLike: 0,
    },
  ]);

  const _handleUpdateTotalLike = type => {
    setListData(_prevState => {
      const updatedItems = _prevState.map(item => {
        if (type === '+' && item.totalLike < 1) {
          return {...item, totalLike: item.totalLike + 1};
        } else if (type === '-' && item.totalLike >= 1) {
          return {...item, totalLike: item.totalLike - 1};
        } else {
          return item;
        }
      });

      return updatedItems;
    });
  };

  return {
    data: {
      listData,
      insets,
    },
    actions: {
      setListData,
      _handleUpdateTotalLike,
    },
  };
};

export default TestLogic;
