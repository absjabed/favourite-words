import React from 'react';
import { View, FlatList, Text } from 'react-native';
import Toast, { ToastPosition } from 'react-native-toast-message';
import FavouriteWordComponent from '../components/FavouriteWordComponent';
import Picker from '../components/Picker'
import AppText from '../components/Text';
import Colors from '../constants/Colors/Colors';
import { getAllStorageKeys, removeFavouriteWordItem, retrieveWords } from '../utils/asyncStorageUtils';

type State = {
  loading: boolean,
  favItems: any[],
  favTypes: any[],
  selectedOption: any
};

export default class FavoutriteScreen extends React.Component {

    state: State = {
      loading: false,
      favItems: [],
      favTypes:[],
      selectedOption: undefined
    }

  async componentDidMount(){
    console.log('Favoutrite Screen mounted');
    let wordTypes = await getAllStorageKeys();
    
    if(wordTypes.length > 0) {
      let favTypes = wordTypes.map(type => ({ label: type, value: type }));
      this.setState({favTypes});
    }

  }

  componentWillUnmount(){
    console.log('Favoutrite Screen unmounted')
  }

  // methodWorks = () =>{  
  //   this.setState({loading: !this.state.loading}, ()=>{
  //     console.log('in favourite loading', this.state.loading)
  //   });
  // }

  async onPickerValueChanged(value: any){
     if(!value) return;
     let favItems = await retrieveWords(value);
     if(!favItems) return;
     this.setState({favItems, selectedOption: value},()=>{
       console.log('in state',this.state.favItems)
     });
    console.log(value);
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

  removeFromFavourites = async (item: any)=>{
    /***Remove keys without any favourute words */
      await removeFavouriteWordItem(item.type, item.word, item.hash);
      let favItems = await retrieveWords(this.state.selectedOption);
      if(!favItems) return;
      this.setState({favItems},()=>{
          this.showToastMessage('success', "bottom", "Removed!", "Removed from favourite! 👋", 1000);
     });
  }

  render() {
    const placeholder = {
      label: 'Select type...',
      value: null,
      color: '#000',
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <View style={{display:'flex', justifyContent:'center', width:'100%', alignItems:'center'}}>
          <View style={{marginRight: '15%'}}>
              <Picker
                placeholder={placeholder}
                items={this.state.favTypes}
                onValueChange={(value) => this.onPickerValueChanged(value)}
                value={this.state.selectedOption}
                useNativeAndroidPickerStyle={false}
              />
          </View>
          <View style={{marginTop: 15, justifyContent:'center'}}>
              <AppText style={{fontSize:15, fontFamily:'Ubuntu-Bold'}}>Saved Favoutrites</AppText>
          </View>
        </View>
        <View style={{marginTop:10, width:'100%', marginBottom: 45}}>
          <FlatList
            data={this.state.favItems}
            renderItem={({ item, index }) => <FavouriteWordComponent addToFavourites={this.removeFromFavourites} wordItem={item} index={index} key={index} />}
            ListEmptyComponent={<View style={{flexDirection:'row', paddingTop:'50%', justifyContent:'center', alignItems:'center'}}> 
            <Text style={{fontSize: 18,  fontFamily:'Ubuntu-Bold', color: Colors.gray}} >No Info Available</Text>
        </View>}
            keyExtractor={(item, index) => `${index}`}
            contentContainerStyle={{padding: 10}}
            />
      </View>
      </View>
    );
  }
}