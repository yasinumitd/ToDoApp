import React from "react";
import { TextInput,TouchableOpacity,View,Text } from "react-native";
import styles from './AddTask.style'

function AddTask({text,setText,addNewTask}){

    const Separator = () => (
        <View style={styles.separator} />
      );
   
    return(
        <View style={styles.conteiner}>
            <TextInput
            style={styles.input}
            placeholder="Yapılacak..."
            onChangeText={newText => setText(newText)}
            value= {text}
            placeholderTextColor="#86888A"
            />
            <Separator></Separator>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => addNewTask(text)}>
                <Text style={styles.buttonText}>KAYDET</Text>
            </TouchableOpacity>
    </View>
    )
}

export default AddTask;