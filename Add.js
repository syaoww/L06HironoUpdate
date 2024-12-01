import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Image} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('The Other One');
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Hirono Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setName(text)}/>
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
            <Button title="SUBMIT"
                    onPress={()=> {
                        let item = {key: name};
                        let indexNum = 1;
                        if (type == 'The Other One') {
                            indexNum = 0;
                        }
                        if (type == 'Little Mischief') {
                            indexNum = 1;
                        }
                        if (type == 'Mime') {
                            indexNum = 2;
                        }
                        if (type == 'The Little Prince') {
                            indexNum = 3;
                        }
                        datasource[indexNum].data.push(item);
                        navigation.navigate("Home");
                    }
                    }
            />
        </View>
    );
};
export default Add;
