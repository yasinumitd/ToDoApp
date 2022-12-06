import React, {useEffect, useState} from "react";
import { View,Text,StyleSheet, SafeAreaView, Alert, FlatList,TouchableOpacity } from "react-native";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks/Tasks";
import Header from "./components/Header";
function App(){

 
  const [tasks,setTasks] = useState([])
  const [text,setText] = useState('')
  const [count,setCount] = useState(0)

  useEffect(()=>{
    const newList= tasks.filter(item=> item.isDone===false)
    const size = newList.length
    setCount(size)
  }, [tasks])
  
  return(
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.conteiner}>
        <Header count={count}/>
        <Tasks tasks={tasks} setTasks={setTasks} count={count}/>
        <AddTask text={text} setText={setText} tasks={tasks} setTasks={setTasks}/>
      </View>
    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
  },
  
  
})