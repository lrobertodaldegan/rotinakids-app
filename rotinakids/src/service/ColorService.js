import CacheService from "./CacheService";

const KEY = '@bgcolor';

const getColor = async () => {
  let obj = await CacheService.get(KEY);

  if(obj && obj != null){
    obj = JSON.parse(obj);

    return obj;
  }

  return null;
}

const saveColor = async (obj) => {
  await CacheService.register(KEY, JSON.stringify(obj));

  return obj;
}

export {
  getColor,
  saveColor,
}