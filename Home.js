import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {datasource} from './Data';

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'center',
        maxWidth: 90,
        flex: 1
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 1,
        margin: 10,
    }
});

const Home = ({navigation}) => {

    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                              onPress={()=>
                              {
                                  navigation.navigate("Edit", {index:index, type:section.title, key:item.key});
                              }
                              }
            >
                <Text style={styles.textStyle}>{item.key}</Text>
                <Image style={{height: 350, paddingTop: 5, marginBottom: 5, flex: 1}}
                       source={item.image}/>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{backgroundColor:'oldlace'}}>
            <StatusBar/>
            <Button
                title='Add Figure'
                color={"#91754a"}
                onPress={()=>{navigation.navigate('Add')}}
            />

            <SectionList
                contentContainerStyle={{padding: 10}}
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section:{title, bgcolor}})=>(
                    <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
                )}/>
        </View>
    );
};

export default Home;
