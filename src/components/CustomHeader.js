import React from "react";
import {
    ImageBackground,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
    Text
} from "../components/Fields"
import { fonts } from "../constants/fonts";
import { normalize } from "../utils/methods";
const headerBG = require("../assets/images/nav_bar.png");
const backButton = require("../assets/images/Back.png");
const searchButton = require("../assets/images/search.png");

const CustomHeader = ({
    showSearch = false,
    showBackButton = true,
    backButtonHandler = {},
    searchButtonHandler = {},
    title = "Romantic Comedy",
    showSearchBar = false,
    onSearchHandler
}) => {
    return (
        <ImageBackground
            style={[styles.rowContainer, {
                // paddingHorizontal: 15,
            }]}
            resizeMode="cover"
            imageStyle={{
                height: normalize(60)
            }}
            source={headerBG}>
            <View style={styles.rowContainer}>
                {showBackButton && (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{
                            // marginRight: 20
                        }}
                        onPress={() => backButtonHandler()}>
                        <Image source={backButton} style={styles.imageStyle} />
                    </TouchableOpacity>
                )}
                {!showSearchBar ? (
                    <Text style={{ flex: 0.9 }}>{title}</Text>
                ) : (
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInput}
                        placeholderTextColor={Colors.white}
                        onChangeText={onSearchHandler}
                    />
                )}
            </View>
            {showSearch && (
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ flex: 0.9 }}
                    onPress={() => searchButtonHandler()}>
                    <Image source={searchButton} style={styles.imageStyle} />
                </TouchableOpacity>
            )}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 20,
        height: 20
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    searchInput: {
        backgroundColor: Colors.Black,
        flex: 0.92,
        height: normalize(40),
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        marginRight: 10,
        color: Colors.white,
        fontFamily: fonts.Regular
    }
})

export default CustomHeader;