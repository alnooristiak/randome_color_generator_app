import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function CollorGenerator() {

    const [newColor, setNweColor] = useState ([]);

    let randomColorGenerator = () => {
        const red = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        // console.log(red);
        // console.log(`rgb ${red}, ${green}, ${blue}`);
        return `rgb(${red},${green},${blue})`;
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setNweColor([... newColor, randomColorGenerator()]);
                }}
            >
                <Text style={styles.btnStyle}>CLICK me To Get New Color..</Text>
            </TouchableOpacity>

            <FlatList
                keyExtractor={(key) => key}
                data={newColor}
                renderItem={({ item }) => {
                    console.log(item);
                    return (
                        // adding notun text div to add notun bg color 
                        <View>
                            <View style={{
                                backgroundColor: item,
                                width: 100,
                                height: 100,
                                borderRadius: 6,
                                marginTop: 5,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "80%",
                            }}
                            >
                                <Text style={styles.textStyle}>
                                    {item}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle:{
        backgroundColor: '#9980FA', 
        fontWeight: 500, 
        textAlign: 'center', 
        marginTop: 20, 
        paddingTop: 8, 
        paddingBottom: 8,
        color: 'white',
        fontSize: 20,
    },
    textStyle:{
        color: 'item',
        fontSize: 20,
    }
})