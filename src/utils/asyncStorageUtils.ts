import AsyncStorage from '@react-native-community/async-storage';

export async function storeItem(key: string, item: any) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error: any) {
      console.log(error.message);
    }
  }

export async function storeWordItem(key: string, item: any) {
    try {
        const existingTypesWord: any =  await AsyncStorage.getItem(key);
        let wordArr = JSON.parse(existingTypesWord);
        let arr = [
          {"definition": "a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.", "emoji": "🦉", "example": "I love reaching out into that absolute silence, when you can hear the owl or the wind.", "image_url": "https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg", "type": "noun", "word": "owl"},
          {"definition": "represent (a character) in a theatrical performance or a film.", "emoji": null, "example": "early in her career she played Ophelia", "image_url": null, "type": "verb", "word": "play"},
        ]
        if(wordArr){
          //not null previous data Arr exists with same type
          //might need to use hashing...to check if same object
          // so check if this word, word defination etc already exists or not
          // if dosen't exist push new update, otherwise donot update
        }else{
          //first time this type data ( wordArr) is null
          // so create empty array and push the data to the array
          // store the array with type as key
        }
        console.log('wordarr',wordArr)
        //await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error: any) {
      console.log(error.message);
    }
  }

export async function retrieveItem(key: string) {
    try {
      const retrievedItem: any =  await AsyncStorage.getItem(key);
      return JSON.parse(retrievedItem);
    } catch (error: any) {
      console.log(error.message);
    }
    return
  }

export async function removeItemValue(key: string) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch(exception) {
      return false;
    }
  }