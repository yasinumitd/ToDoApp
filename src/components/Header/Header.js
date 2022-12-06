import React from "react";
import { View,Text } from "react-native";
import styles from './Header.style'
function Header({count}){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}> YAPILACAKLAR</Text>
            <Text style={styles.countText}>{count}</Text>
        </View>
    )
}

export default Header;