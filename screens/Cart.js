import React from 'react'
import { useContext } from "react";
import { AppContext } from '../app/Provider';
import { FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createOrder, getCurrentUser } from '../app/api';

const Cart = () => {
    const { state, removeItem } = useContext(AppContext);


    return (
        <View>
            <Text>Cart</Text>
            <FlatList data={state.productsInCart} keyExtractor={item => item.id}
                renderItem={({ item }) => <View style={{ marginBottom: 20 }}>
                    <Text >{item.title}</Text>

                    <TouchableOpacity onPress={() => removeItem(item.id)}><Text>Borrar</Text></TouchableOpacity>
                </View>}
            />

            <TouchableOpacity onPress={async () => {
                const u = await getCurrentUser();
                console.log(u)
                const order = {
                    items: state.productsInCart,
                    buyer: u.email,
                    total: state.productsInCart.reduce((acc, product) => acc + product.price, 0),
                    date: new Date().toLocaleString()
                }
                console.log(order)
                createOrder(order);

            }}><Text>Make order</Text></TouchableOpacity>
        </View >
    )
}

export default Cart