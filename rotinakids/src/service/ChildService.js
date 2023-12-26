import CacheService from "./CacheService";

const KEY = '@children_';

const getChildren = async () => {
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

const saveChild = async (newChild) => {
  let children = await CacheService.get(KEY);

  children = JSON.parse(children);

  if(children && children !== null && children.length > 0){
      let child = children.filter((d) => d.id === newChild.id);

      if(child && child !== null && child.length > 0){        
          children.splice(children.indexOf(child[0]), 1);
          
          children.push(newChild);
      } else {
          children.push(newChild);
      }
  } else {
      children = [newChild];
  }

  await CacheService.register(KEY, JSON.stringify(children));

  return children;
}

export {
    getChildren,
    saveChild,
}