import AddOp from './addOp';

let doAdd = function(x,y){
  let addObj = new AddOp(x,y);
  console.log(addObj.add());
}

console.log(doAdd(5,5));
// export default doAdd;
