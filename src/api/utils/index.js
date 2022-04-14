//深度清楚对象中的数据(递归)
export const clearObj=(person)=>{
    //Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组   {a:1,b:2}==>[a,b]
    Object.keys(person).forEach(key => {
        console.log(typeof person[key])
        if(typeof person[key]=='number') person[key]=0
        else if(typeof person[key]=='string') person[key]=""
        else if(typeof person[key]=='boolean') person[key]=false
        else if(typeof person[key]=='function') console.log(key+"这个属性是函数类型")
        else if(typeof person[key]=='object' && Array.isArray(person[key]))person[key]=[]
        else person[key]=clearObj(person[key])
      });
    return person
}