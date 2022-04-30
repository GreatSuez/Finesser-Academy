import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from '@expo/vector-icons';



const SelectPicker = () => {
    const choice = ["All courses", "Favorite courses", "Archived courses", "Download"];
  return (
    <SafeAreaView>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <SelectDropdown
                data={choice}
                onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                }}
                defaultButtonText={"All courses"}
                buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                return item;
                }}
                buttonStyle={styles.dropdown2BtnStyle}
                buttonTextStyle={styles.dropdown2BtnTxtStyle}
                renderDropdownIcon={(isOpened) => {
                return (
                    <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#FFF"}
                    size={18}
                    />
                );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown2DropdownStyle}
                rowStyle={styles.dropdown2RowStyle}
                rowTextStyle={styles.dropdown2RowTxtStyle}
            />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dropdown2BtnStyle:{
    width:'100%',
    backgroundColor:'#444',
    borderRadius:8

  },
  dropdown2BtnTxtStyle:{
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:5
  },
    dropdown2DropdownStyle: { backgroundColor: "#444",borderRadius:8, height:150 },
    dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#f57f17" },
    dropdown2RowTxtStyle: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default SelectPicker;