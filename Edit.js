import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert, Image} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.key);
    const [type, setType] = useState('');
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Hirono Name:</Text>
                <TextInput value={name} style={{borderWidth: 1}}
                           onChangeText= {(text)=> setName(text)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items={[
                        {label:"The Other One", value:"The Other One"},
                        {label:"Little Mischief", value:"Little Mischief"},
                        {label:"Mime", value: "Mime"},
                        {label:"The Little Prince", value: "The Little Prince"},
                    ]}
                />
            </View>

            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex:1, margin: 10}}>
                    <Button title="SAVE"
                            color={"#91754a"}
                            onPress={()=> {
                                let indexNum = 1;
                                if (route.params.type == 'The Other One') {
                                    indexNum = 0;
                                }
                                if (route.params.type == 'Little Mischief') {
                                    indexNum = 1;
                                }
                                if (route.params.type == 'Mime') {
                                    indexNum = 2;
                                }
                                if (route.params.type == 'The Little Prince') {
                                    indexNum = 3;
                                }
                                datasource[indexNum].data[route.params.index].key=name;
                                navigation.navigate("Home");
                            }
                            }
                    />
                </View>
                <View style={{flex:1, margin: 10}}>
                    <Button title="DELETE"
                            color={"#91754a"}
                            onPress={()=> {
                                let indexNum = 1;
                                if (route.params.type == 'The Other One') {
                                    indexNum = 0;
                                }
                                if (route.params.type == 'Little Mischief') {
                                    indexNum = 1;
                                }
                                if (route.params.type == 'Mime') {
                                    indexNum = 2;
                                }
                                if (route.params.type == 'The Little Prince') {
                                    indexNum = 3;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress:()=>{
                                            datasource[indexNum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;

// changing section type doesnt work..