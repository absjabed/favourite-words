import AsyncStorage from '@react-native-community/async-storage';

export async function storeItem(key: string, item: any) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(item));
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