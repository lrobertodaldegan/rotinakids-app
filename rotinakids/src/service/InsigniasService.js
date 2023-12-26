import CacheService from "./CacheService";

const KEY = '@insignias_';

const getByChild = async (childId) => {
  let rs = await CacheService.get(`${KEY}${childId}`);

  if(rs && rs != null){
    rs = JSON.parse(rs);

    rs.sort((a, b) => {
      if(a.id > b.id)
        return 1;
      
      if(a.id < b.id)
        return -1;

      return 0;
    });

    return rs;
  }

  return [];
}

const giveMedal = async (childId, insignia) => {
  let insignias = await CacheService.get(`${KEY}${childId}`);

  insignias = JSON.parse(insignias);

  if(insignias && insignias !== null && insignias.length > 0){
    let ins = insignias.filter((d) => d.id === insignia.id);

    if(ins && ins !== null && ins.length > 0){        
      insignias.splice(insignias.indexOf(ins[0]), 1);
        
      insignias.push(insignia);
    } else {
      insignias.push(insignia);
    }
  } else {
    insignias = [insignia];
  }

  await CacheService.register(`${KEY}${childId}`, JSON.stringify(insignias));

  return insignias;
}

export {
  getByChild,
  giveMedal,
}