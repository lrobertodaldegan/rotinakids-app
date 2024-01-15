import AsyncStorage from "@react-native-async-storage/async-storage";

const CacheService = {
  get: async (key) => {
    try{
      return await AsyncStorage.getItem(key);
    } catch(e){
      console.log(e);
    }
  },
  getKeysByPrefix: async (keyPrefix) => {
    try{
      let keys = await AsyncStorage.getAllKeys();

      if(keys && keys?.length > 0)
        return keys.filter((k) => k.startsWith(keyPrefix));
    
      return [];
    } catch(e){
      console.log(e);
    }
  },
  getAllByKeyPrefix: async (keyPrefix) => {
    try{
      let keys = await AsyncStorage.getAllKeys();

      if(keys && keys?.length > 0){
        let keysFiltered = keys.filter((k) => k.startsWith(keyPrefix));

        if(keysFiltered && keysFiltered?.length > 0)
          return await AsyncStorage.multiGet(keysFiltered);
      }

      return null;
    } catch(e){
      console.log(e);
    }
  },
  register: async (key, value) => {
    try{
      await AsyncStorage.setItem(key, value);
    } catch(e){
      console.log(e);
    }
  },
  wipe: async (key) => {
    try{
      await AsyncStorage.removeItem(key);
    } catch(e){
      console.log(e);
    }
  },
}

export default CacheService;