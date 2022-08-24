import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './style'

import { 
  AntDesign 
} from '@expo/vector-icons';

const Cart = () => {
  return(
    <View
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => alert('Test')}
      >

      <AntDesign
        name="shoppingcart"
        size={24}
        color="black"
        />
      </TouchableOpacity>
      <View
        style={styles.contentCart}
      >
        <Text
        style={styles.textContentCart}
        >
          0
        </Text>
      </View>
    </View>
  )
};

export default Cart;