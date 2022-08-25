import {
  View,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';

import {
  useState
} from 'react';

import {
  useSelector
} from  'react-redux';

import {
  cartStateData
} from '../../store/modules/cart/reducer'

import { 
  AntDesign 
} from '@expo/vector-icons';

import styles from './style'

const Cart = () => {
  const [ showCartModal, setShowCartModal ] = useState(false)
  const cart = useSelector(cartStateData);
  
  return(
    <View
      style={styles.container}
    >
      <Modal 
        animationType='slide'
        visible={showCartModal}
        onRequestClose={ 
          () => setShowCartModal(!showCartModal)
        }
      >
        <View
          style={styles.modalBody}
        >
          {cart.length > 0 && (
            <Text>Contém itens ...</Text>
          )}

          <TouchableOpacity
            onPress={ () => setShowCartModal(!showCartModal)}
          >
            <AntDesign
              name="close"
              size={24}
              color="black"
            />
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setShowCartModal(!showCartModal)}
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
          {cart?.length}
        </Text>
      </View>
    </View>
  )
};

export default Cart;