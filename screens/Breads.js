import { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/breads";
import { getItems } from '../app/api';


const Breads = ({ navigation, route }) => {
    const breads = BREADS.filter(bread => bread.category === route.params.categoryId)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getItems().then(items => {
            setProducts(items);
        });
    }, [])

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            bread: item
        })
    }
    return (
        <View>

            <FlatList data={products} keyExtractor={item => item.id}
                renderItem={({ item }) => <BreadItem item={item} onSelected={() => handleSelected(item)} />} />

            <Text>{route.params.name}</Text>
            <Text>{route.params.categoryId}</Text>

        </View >
    )
}

export default Breads