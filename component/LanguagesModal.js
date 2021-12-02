import React from 'react'

const LanguagesModal = (props) => {
    return (
        <View>
            <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> 
        </View>
    )
}

export default LanguagesModal