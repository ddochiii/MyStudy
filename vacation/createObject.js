function getObj(){
    const name="crong";
    const getName=function(){
        return name;
    }
    const setName=function(newname){
        name=newname;
    }
    const printName=function(){
        console.log(name);
    }

    return{
        getName:getName,
        setName:setName
    }

}
var obj=getObj();
// console.log(obj);
console.log(obj.getName());

//https://www.inflearn.com/course/es6-강좌-자바스크립트/lecture/6990