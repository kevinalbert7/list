import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet, ActivityIndicator, Text, Pressable } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
    },

    text: {
        textAlignVertical: 'center',
    },

    pressable: {
        width: 200,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 5,
        border: 2,
        borderRadius: '20px',
        backgroundColor: 'teal',
    }

  })

const List = () => {

    const [countries , setCountries] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    const renderItem = ({ item }) => (
        <View>
            <Pressable onPress={handleDisplay} style={styles.pressable}>
            <Text style={styles.text}>name={item.name}</Text>
            <Text style={styles.text}>capital={item.capital}</Text>
            <Text style={styles.text}>region={item.region}</Text>
            </Pressable>
        </View> 
    )

    const handleDisplay = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <View>
            <View style={styles.container}>
            { !countries ? <ActivityIndicator size="large" /> :
                <FlatList
                    data={countries}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> 
            }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setIsModalVisible(!isModalVisible);
                    }}
                >
                </Modal>
            </View>
        </View>
    )
}

export default List