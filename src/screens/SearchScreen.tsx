import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import AppText from '../components/Text';
import ProgressDialog from '../utils/loader'
import SearchComponent from '../components/SearchComponent';
import { get } from '../api/apiRequests';
import Toast, { ToastPosition } from 'react-native-toast-message';
import Colors from '../constants/Colors/Colors';
import WordComponent from '../components/WordComponent';
import { getAllStorageKeys, retrieveWords, storeWordItem } from '../utils/asyncStorageUtils';
import { getUniqueHash } from '../utils/stringHashUtil';

type State = {
  loading: boolean,
  searchedWord: string,
  searchResult: any,
  searchResultWord: string
};

export default class SearchScreen extends React.Component {

    state: State = {
      loading: false,
      searchedWord: '',
      searchResult: [],
      searchResultWord: '',

      // Arrow, Dachshund, Mirror, Badger, Spaniel, Japan, Quick, Flummoxed, Snickerdoodle
    }

  componentDidMount(){
    console.log('Search Screen mounted')
  }

  componentWillUnmount(){
      console.log('Search Screen unmounted')
  }

  showToastMessage = (type: string, position: ToastPosition = "bottom", heading: string, message: string, time: number)=>{
    Toast.show({
      type: type,
      position: position,
      text1: heading,
      text2: message,
      visibilityTime: time,
      })
  }

  addToFavourites= async (favouriteItem: any)=>{
   try{ 
    favouriteItem["word"] = this.state.searchResultWord;
    favouriteItem["hash"] = getUniqueHash(favouriteItem);
    
    await storeWordItem(favouriteItem.type, favouriteItem);
    this.showToastMessage('success', "bottom", "Added!", "Added to favourites ❤️", 1000);
  } catch (error: any) {
    this.showToastMessage('error', "bottom", "Error!", "Something went wrong!", 1000);
  }
  }

  initiateSearch = () =>{  

    if(this.state.searchedWord.length == 0) return;

          this.setState({loading: !this.state.loading}, async ()=>{

            await get(this.state.searchedWord)
                    .then((response: any) => {

              this.setState({loading: false}, ()=>{
                  var responseData = response.data;

              if(responseData){

                this.setState({searchResult: responseData, searchResultWord: responseData.word},()=>{
                      this.showToastMessage('success', "bottom", "Hurrah!", "Found your word! 👋", 1000);
                });

              }else{
                this.setState({searchResult: [], searchResultWord: ""},()=>{
                  this.showToastMessage('error', "bottom", "Error!", "Something wrong happend!", 1000);
                });
              }
              });

          })
          .catch(errorMessage => {   
              this.setState({loading: false, searchResult: [], searchResultWord: ""}, ()=>{
                if(errorMessage.search('404') > 0){
                  this.showToastMessage('info', "bottom", "Not Found!", "No definition found! :(", 1000);
                }else{
                  this.showToastMessage('error', "bottom", "Catch Error!", errorMessage, 1000);
                }  
              }); 
          });
      });
}

  onSearchWordChange=(word: string)=>{
      this.setState({searchedWord: word});
  }

  render() {
    return (
      <View
        style={styles.container}>
        <ProgressDialog loading={this.state.loading} />
        <View style={styles.subContainer}>
        <View style={styles.searchContainer}>
            <SearchComponent initiateSearch={this.initiateSearch} searchedWord={this.state.searchedWord} onSearchWordChange={this.onSearchWordChange} />
        </View>
        <View style={styles.headingStyle}>
          <AppText style={styles.headingText}>Search Results</AppText>
          <View style={styles.wordContainer}>
              <AppText style={styles.word}>{this.state.searchResult.word}</AppText>
              <AppText style={styles.pronunciation}>{ this.state.searchResult.pronunciation ? "( "+this.state.searchResult.pronunciation+" )" : ""}</AppText>
          </View>
        </View>
        <View style={{flex: 1}}>
              <FlatList
                data={this.state.searchResult.definitions}
                renderItem={({ item, index }) => <WordComponent addToFavourites={this.addToFavourites} wordItem={item} index={index} key={index} />}
                keyExtractor={(item, index) => `${index}`}
                ListEmptyComponent={
                                            <View style={{flexDirection:'row', paddingTop:'50%', justifyContent:'center', alignItems:'center'}}> 
                                                <Text style={{fontSize: 18,  fontFamily:'Ubuntu-Bold', color: Colors.gray}} >No Info Available</Text>
                                            </View>}
                contentContainerStyle={{padding: 10}} 
                />
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  subContainer:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  searchContainer:{
    marginTop: -25
  },
  headingStyle:{
    width: '100%',
    flexDirection: 'column',
    paddingTop: 15,
   },
   headingText:{
     fontSize:16, 
     fontFamily:'Ubuntu-Bold'
    },
    wordContainer:{
      display:'flex', 
      marginBottom:5, 
      flexDirection:'row', 
      justifyContent:'center', 
      alignItems:'center'
    },
    word:{
      fontSize:24, 
      fontFamily:'Ubuntu-Bold', 
      textDecorationLine:'underline', 
      color: Colors.primary
    },
    pronunciation:{
      fontSize:15, 
      paddingLeft:5, 
      fontFamily:'Ubuntu-Bold', 
      color: Colors.darkGray
    }

})