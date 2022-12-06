import React from "react";
import { View,FlatList,TouchableOpacity,Text } from "react-native";
import styles from './Tasks.style'

function Tasks({tasks,setTasks, count}){

    const changeText = id => {
        const newTask = tasks.map(item => {
          if (item.id === id) {
            return { ...item, isDone: true };
          }
          return item;
        });
        setTasks(newTask);
      };
      
      const deleteTask = item =>{
        setTasks(tasks.filter(todoItem=> todoItem !==item))
      }
      

    const renderTask = ({item}) => 
    <TouchableOpacity 
    onPress={()=> changeText(item.id)}
    onLongPress={()=> deleteTask(item)}>
      <Text style={item.isDone ? styles.doneTaskConteiner : styles.taskConteiner}>
        {item.title}
      </Text>
    </TouchableOpacity>
    return(
        <View>
             <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={renderTask}
             />
        </View>
    )
}

export default Tasks;