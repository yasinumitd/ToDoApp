import React from "react";
import { TextInput,TouchableOpacity,View,Text } from "react-native";
import styles from './AddTask.style'

function AddTask({text,setText,tasks,setTasks}){

    const Separator = () => (
        <View style={styles.separator} />
      );

      function addNewTask(title){
        if(title===''){
          Alert.alert('Please enter a task!')
        }else{
          setTasks([...tasks, {id:Date.now(), title: title,isDone:false}]);
          setText('')
        }
      }
   
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
            style={text.length>0 ? styles.button : styles.buttonPasive}
            onPress={() => addNewTask(text)}>
                <Text style={styles.buttonText}>KAYDET</Text>
            </TouchableOpacity>
    </View>
    )
}

export default AddTask;