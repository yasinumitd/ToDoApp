import React, {useEffect, useState} from "react";
import { View,Text,StyleSheet, SafeAreaView, Alert, FlatList,TouchableOpacity } from "react-native";
import AddTask from "./components/AddTask";
function App(){

 
  const [tasks,setTasks] = useState([])
  const [text,setText] = useState('')
  const [count,setCount] = useState(0)

  useEffect(()=>{
    const newList= tasks.filter(item=> item.isDone===false)
    const size = newList.length
    setCount(size)
  }, [tasks])
  function addNewTask(title){
    if(title===''){
      Alert.alert('Please enter a task!')
    }else{
      setTasks([...tasks, {id:Date.now(), title: title,isDone:false}]);
      setText('')
    }
  }

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
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.conteiner}>
        <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}> YAPILACAKLAR</Text>
            <Text style={styles.countText}>{count}</Text>
          </View>
        }
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        />
        <AddTask text={text} setText={setText} addNewTask={addNewTask}/>
      </View>
    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
  },
  header:{
    padding:10,
    flexDirection:"row",
    justifyContent: "space-between"
  },
  headerText:{
    fontSize:25,
    fontWeight:'bold',
  },
  countText:{
    fontSize:25,
    fontWeight:'bold',
    marginRight:5
  },
  taskConteiner:{
    marginBottom:5,
    backgroundColor:'green',
    borderRadius:5,
    padding:5,
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  doneTaskConteiner:{
    marginBottom:5,
    backgroundColor:'grey',
    borderRadius:5,
    padding:5,
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textDecorationLine:"line-through"
  }
})