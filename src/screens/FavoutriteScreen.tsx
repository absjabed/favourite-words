import React from 'react';
import { View, Button } from 'react-native';
import Picker from '../components/Picker'
import AppText from '../components/Text';

type State = {
  loading: boolean,
  favItems: any[],
  selectedOption: any
};

export default class FavoutriteScreen extends React.Component {

    state: State = {
      loading: false,
      favItems: [
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
    ],
      selectedOption: undefined
    }

  componentDidMount(){
    console.log('Favoutrite Screen mounted')
  }

  componentWillUnmount(){
    console.log('Favoutrite Screen unmounted')
  }

  // methodWorks = () =>{  
  //   this.setState({loading: !this.state.loading}, ()=>{
  //     console.log('in favourite loading', this.state.loading)
  //   });
  // }

  onPickerValueChanged(value: any){
      console.log(value);
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
        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <View style={{marginRight: '15%'}}>
              <Picker
                placeholder={placeholder}
                items={this.state.favItems}
                onValueChange={(value) => this.onPickerValueChanged(value)}
                value={this.state.selectedOption}
                useNativeAndroidPickerStyle={false}
              />
          </View>
          <View style={{marginTop: 15, justifyContent:'center'}}>
              <AppText style={{fontSize:15, fontFamily:'Ubuntu-Bold'}}>Saved Favoutrites</AppText>
          </View>
        {/* <Button onPress={()=>  this.methodWorks()} title="PressIt"></Button> */}
        </View>
      </View>
    );
  }
}