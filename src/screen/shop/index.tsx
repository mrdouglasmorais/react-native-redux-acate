import {
  View,
  Text,
  Image,
  Button,
  ScrollView
} from 'react-native';

import Cart from '../../component/cart'

import styles from './style';

import { products } from '../../constants'

const Shop = () => {
  return (
    
    <View
      style={styles.container}
    >
      <Cart />
      <ScrollView>
        { products?.map( item => (
          <View 
            key={item.id}
            style={styles.card}
          >
            <Image 
              source={{ uri: item.image }}
              style={styles.image}
            />
            <View
              style={styles.infoBox}
            >
              <Text
                style={styles.productName}
              >
                {item.name}
              </Text>
              <Text
                style={styles.brandName}
              >
                {item.brand}
              </Text>
              <Text
                style={styles.price}
              >
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.price)}
              </Text>
              <Button
                title='Adicionar ao carrinho'
                onPress={() => alert('Adicionado')}
              />
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  )
};

export default Shop;