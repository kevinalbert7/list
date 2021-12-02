import React, { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet, ActivityIndicator, Text, Pressable } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
    },

    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },

    pressable: {
        width: 140,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 50,
        marginLeft: 50,
        marginBottom: 50,
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
            <Text>{item.name} </Text>
            <Text>{item.capital}</Text>
            <Text>{item.region}</Text>
        </View> 
    )

    const handleDisplay = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <View>
            <Pressable onPress={handleDisplay} style={styles.pressable}>
                Display countries
            </Pressable>
            <View style={styles.container}>
            { !isModalVisible ? <ActivityIndicator style={styles.indicator} size="large" /> :
                    <FlatList
                    data={countries}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    /> 
            } 
            </View>
        </View>
    )
}

export default List