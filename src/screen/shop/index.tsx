import {
  View,
  Text,
  Image,
  Button,
  ScrollView
} from 'react-native';

import styles from './style';

import { products } from '../../constants'

const Shop = () => {
  return (
    
    <View
      style={styles.container}
    >
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
                title='adicionar'
                onPress={() => alert('Adicionado')}
              />
              <Button
                title='remover'
                onPress={ () => alert('Remover') }
              />
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  )
};

export default Shop;