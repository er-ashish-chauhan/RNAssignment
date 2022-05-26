import React, { useEffect, useState } from "react";
import {
    View,
    FlatList,
    Image,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomHeader from "../../components/CustomHeader";
import {
    Text
} from "../../components/Fields";
import { normalize, normalizeMax } from "../../utils/methods";
import {
    PAGE1,
    PAGE2,
    PAGE3
} from "../../API";
import images from "../../assets/images";
import { typography } from "../../styles";
import { fonts } from "../../constants/fonts";

const Dashboard = ({

}) => {

    const [contentList, setContentList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [prevContentList, setPrevContentList] = useState([]);
    const [listChanged, setListChanged] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    // call useEffect hook for set the content list
    useEffect(() => {

        // call setListData method 
        setListData();
    }, []);

    /**
     * @method setListData
     * @description Method used for set list data according to the page
     */
    const setListData = (page = currentPage) => {

        const contentListData = page == 1 ? PAGE1 : (page == 2 ? PAGE2 : PAGE3);
        let list = page == 1 ? contentListData?.page?.["content-items"].content : contentList.concat(contentListData?.page?.["content-items"].content);
        setContentList(list);
        setPrevContentList(list);
        setCurrentPage(contentListData?.page?.["page-num-requested"]);
        setIsRefresh(false);
        let total_pages = Math.round(contentListData?.page?.["total-content-items"] / contentListData?.page?.["page-size-requested"]);
        setTotalPages(total_pages)
    }

    /**
     * @description - Method used for handle the pagination
     */
    const onLoadMore = () => {
        if (currentPage < totalPages) {
            setListData(parseInt(currentPage) + 1);
        }
    }

    /**
     * @description Method used for handle the search 
     * @param {String} stext 
     */
    const searchItemHandler = (stext) => {
        if (stext.trim().length > 0) {
            let listItems = contentList;
            listItems = listItems.filter(m => String(m?.name).toLowerCase().includes(stext.toLowerCase()));

            setContentList(listItems);
            setListChanged(!listChanged);
        } else {
            setContentList(prevContentList);
            setListChanged(!listChanged);
        }
    }

    /**
     * @description Method used for handle the refresh
     */
    const refreshHandler = () => {
        setIsRefresh(true);
        setListData(1);
    }

    /**
     * @description - Method used for return the list items 
     * @param {Object} item 
     * @returns 
     */
    const _renderListItems = (item) => {
        // split the name of the image 
        let imageName = item["poster-image"].split(".")[0];

        return (
            <View style={{
                marginHorizontal: normalize(15),
                marginBottom: normalize(25)
            }}>
                {images[imageName] ? (
                    <Image
                        style={{
                            height: normalize(130),
                            width: normalize(90),
                            resizeMode: "contain"
                        }}
                        source={images[imageName]} />
                ) : (
                    <View
                        style={{
                            height: normalize(130),
                            width: normalize(90),
                            backgroundColor: Colors.dark
                        }}
                    />
                )}

                <Text style={[typography.body2, {
                    marginTop: normalize(20),
                    maxWidth: normalize(100)
                }]}>{item?.name}</Text>
            </View>
        )
    }

    /**
     * @description Method used for render the view when on data found
     * @returns JSX
     */
    const listEmptyComponent = () => {
        return (
            <View style={{
                marginTop: normalizeMax(50),
                alignItems: "center",
            }}>
                <Text
                    style={{
                        fontFamily: fonts.Bold,
                        fontSize: normalize(18)
                    }}>No data found for your selection!</Text>
            </View>
        )
    }

    return (
        <View
            style={{
                paddingHorizontal: 15,
            }}>
            <CustomHeader
                showSearch={true}
                searchButtonHandler={() => setShowSearchBar(!showSearchBar)}
                showSearchBar={showSearchBar}
                onSearchHandler={searchItemHandler} />
            <View style={{ paddingTop: normalize(28) }}>
                <FlatList
                    data={contentList}
                    renderItem={({ item }) => _renderListItems(item)}
                    keyExtractor={(item, index) => String(item?.name + index)}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    scrollEnabled={true}
                    contentContainerStyle={{
                        alignItems: "stretch",
                        paddingBottom: normalizeMax(100)
                    }}
                    refreshing={isRefresh}
                    onRefresh={refreshHandler}
                    onEndReached={() => onLoadMore()}
                    ListEmptyComponent={listEmptyComponent}
                    extraData={listChanged}
                />
            </View>
        </View>
    )
}

export default Dashboard;