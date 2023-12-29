import CacheService from "./CacheService";

const KEY = '@tasks_';
const KEY_SCORE = '@taskscore_';

const getTasks = async () => {
  let rs = await CacheService.get(KEY);

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

const saveTask = async (newObj) => {
  let objs = await CacheService.get(KEY);

  objs = JSON.parse(objs);

  if(objs && objs !== null && objs.length > 0){
      let obj = objs.filter((d) => d.id === newObj.id);

      if(obj && obj !== null && obj.length > 0){        
        objs.splice(objs.indexOf(obj[0]), 1);
          
        objs.push(newObj);
      } else {
        objs.push(newObj);
      }
  } else {
    objs = [newObj];
  }

  await CacheService.register(KEY, JSON.stringify(objs));

  return objs;
}

const delTask = async (id) => {
  let objs = await CacheService.get(KEY);

  objs = JSON.parse(objs);

  if(objs && objs !== null && objs.length > 0){
    let obj = objs.filter((d) => d.id === id);

    if(obj && obj !== null && obj.length > 0) 
      objs.splice(objs.indexOf(obj[0]), 1);

  }

  await CacheService.register(KEY, JSON.stringify(objs));

  return objs;
}

const saveDailyTask = async (day, childId, task) => {
  const k = `${KEY_SCORE}_${day}_${childId}`;

  let objs = await CacheService.get(k);

  objs = JSON.parse(objs);

  if(objs && objs !== null && objs.length > 0){
      let obj = objs.filter((d) => d.id === task.id);

      if(obj && obj !== null && obj.length > 0){        
        objs.splice(objs.indexOf(obj[0]), 1);
          
        objs.push(task);
      } else {
        objs.push(task);
      }
  } else {
    objs = [task];
  }

  await CacheService.register(k, JSON.stringify(objs));

  return objs;
}

const getDailyTasks = async (day, childId) => {
  const k = `${KEY_SCORE}_${day}_${childId}`;

  let rs = await CacheService.get(k);

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

export {
  KEY_SCORE,
  getTasks,
  saveTask,
  delTask,
  saveDailyTask,
  getDailyTasks,
}