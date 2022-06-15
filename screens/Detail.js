import { useContext } from "react";
import BreadItem from "../components/BreadItem"
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppContext } from "../app/Provider";

const Detail = ({ navigation, route }) => {
    const bread = route.params.bread;
    const { items, addItem, removeItem, clear } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{bread.name}</Text>
            <Text>{bread.description}</Text>
            <Text>{bread.price}</Text>
            <Text>{bread.weight}</Text>
            <TouchableOpacity onPress={() => addItem(bread)}><Text>Add to Cart</Text></TouchableOpacity>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    }

});