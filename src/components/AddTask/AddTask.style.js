import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner:{
        backgroundColor: '#37474F',
        position: 'absolute',
        bottom: 30,
        margin: 10,
        width: '95%',
        borderRadius: 10,
        
    },
    input: {
        padding:5,
        fontSize:20,
        borderRadius:10,
        color: 'white'
      },
      button: {
        margin:15,
        padding:5,
        borderRadius:10,
        backgroundColor: 'orange',
        alignItems:"center"

        
      },
      buttonPasive: {
        margin:15,
        padding:5,
        borderRadius:10,
        backgroundColor: 'grey',
        alignItems:"center"

        
      },
      buttonText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        margin:5
      },
      separator: {
        marginVertical: 2,
        marginHorizontal: 15,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      
})