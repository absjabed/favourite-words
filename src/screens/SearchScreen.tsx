import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import AppText from '../components/Text';
import ProgressDialog from '../utils/loader'
import SearchComponent from '../components/SearchComponent';
import { get } from '../api/apiRequests';
import Toast, { ToastPosition } from 'react-native-toast-message';
import Colors from '../constants/Colors/Colors';
import Icon from 'react-native-vector-icons/FontAwesome'

type State = {
  loading: boolean,
  searchedWord: string,
  searchResult: any
};

export default class SearchScreen extends React.Component {

    state: State = {
      loading: false,
      searchedWord: '',
      searchResult: 
      { definitions:
        [ { type: 'noun',
            definition:
             'a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.',
            example:
             'I love reaching out into that absolute silence, when you can hear the owl or the wind.',
            image_url:
             'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg',
            emoji: '🦉' } ],
       word: 'owl',
       pronunciation: 'oul' }
      //{"definitions":[{"type":"verb","definition":"move or appear to move swiftly and directly.","example":"lights <b>arrowed down</b> into the airport","image_url":null,"emoji":null},{"type":"noun","definition":"a weapon consisting of a thin, straight stick with a sharp point, designed to be shot from a bow.","example":"I've never used a bow and arrow","image_url":null,"emoji":null}],"word":"arrow","pronunciation":"ˈerō"}
      
      //undefined
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

  initiateSearch = () =>{  

    if(this.state.searchedWord.length == 0) return;

    this.setState({loading: !this.state.loading}, async ()=>{
      //console.log('in search loading', this.state.loading, this.state.searchedWord);

      await get(this.state.searchedWord)
    .then((response: any) => {

      console.log(response);
        this.setState({loading: false}, ()=>{
            var responseData = response.data;

        if(responseData){
          
          console.log(responseData);

          this.setState({searchResult: responseData},()=>{
                this.showToastMessage('success', "bottom", "Hurrah!", "Found your word! 👋", 1000);
          });

        }else{
          this.showToastMessage('error', "bottom", "Error!", "Something wrong happend!", 1000);
        }
        });

    })
    .catch(errorMessage => {   
        this.setState({loading: false}, ()=>{
          if(errorMessage.search('404') > 0){
            this.showToastMessage('info', "bottom", "Not Found!", "No definition found! :(", 1000);
          }else{
            this.showToastMessage('error', "bottom", "Catch Error!", errorMessage, 1000);
          }  
        }); 
    });
 });
/***
 * 
 * 
 * { definitions:
   [ { type: 'noun',
       definition:
        'a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.',
       example:
        'I love reaching out into that absolute silence, when you can hear the owl or the wind.',
       image_url:
        'https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg',
       emoji: '🦉' } ],
  word: 'owl',
  pronunciation: 'oul' }

  {"definitions":[{"type":"verb","definition":"move at a regular pace by lifting and setting down each foot in turn, never having both feet off the ground at once.","example":"I walked across the lawn","image_url":null,"emoji":null},{"type":"verb","definition":"guide, accompany, or escort (someone) on foot.","example":"he walked her home to her door","image_url":null,"emoji":null},{"type":"verb","definition":"(of a ghost) be visible; appear.","example":"the ghosts of Bannockburn walked abroad","image_url":null,"emoji":null},{"type":"noun","definition":"a route recommended or marked out for recreational walking.","example":"there are picnic places and waymarked walks","image_url":null,"emoji":null},{"type":"noun","definition":"an act of travelling or an outing on foot.","example":"he was too restless to sleep, so he went out for a walk","image_url":null,"emoji":null},{"type":"noun","definition":"an unhurried rate of movement on foot.","example":"they crossed the field at a leisurely walk","image_url":null,"emoji":null}],"word":"walk","pronunciation":"wôk"}

  [{"message":"No definition :("}]
 * 
 */

  }

  onSearchWordChange=(word: string)=>{
      this.setState({searchedWord: word});
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <ProgressDialog loading={this.state.loading} />
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{marginTop: -25}}>
            <SearchComponent initiateSearch={this.initiateSearch} searchedWord={this.state.searchedWord} onSearchWordChange={this.onSearchWordChange} />
        </View>
        <View style={{
           width: '100%',
           flexDirection: 'column',
           paddingTop: 15,
           //backgroundColor:'green'
          }}>
            <AppText style={{fontSize:15, fontFamily:'Ubuntu-Bold'}}>Search Results</AppText>
          <View style={{display:'flex', marginBottom:5, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <AppText style={{fontSize:24, fontFamily:'Ubuntu-Bold', color: Colors.primary}}>{this.state.searchResult.word}</AppText>
              <AppText style={{fontSize:15, paddingLeft:5, fontFamily:'Ubuntu-Bold', color: Colors.darkGray}}>{ this.state.searchResult.pronunciation ? "( "+this.state.searchResult.pronunciation+" )" : ""}</AppText>
          </View>
        </View>
        <View style={{flex: 1}}>
              <FlatList
                data={this.state.searchResult.definitions}
                renderItem={({ item, index }) => 
                    <View style={{ ...styles.cardShadow, flex:1, flexDirection:'row', backgroundColor:'#fff', padding:10, borderRadius:10, marginBottom: 10}} key={index} >
                        <View style={{flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
                            <Text style={{backgroundColor: Colors.primary, borderRadius:7, justifyContent:'flex-start',  fontFamily:'Ubuntu-Regular', padding:5, color: Colors.white, alignSelf:'center'}}>{item.type}</Text>
                            <Icon style={{position:'absolute', right:0, top: 0}} name="heart-o" size={20} color={Colors.secondaryGradientEnd} />
                            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-Bold', color: Colors.black}} >{item.definition}</AppText>
                            {item.image_url ? (<View>
                                <Image style={styles.avatar}  source={{uri:item.image_url}} />
                              </View>) : <></>}
                            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-MediumItalic', color: Colors.darkGray}} >"{item.example}"</AppText>
                        </View>
                    </View>  
              }
                keyExtractor={(item, index) => `${index}`}
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
    backgroundColor: "#FFF"
  },
  cardShadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 3,

    borderWidth:0.3,
    borderRadius:10,
    borderColor:'green'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
  },
})