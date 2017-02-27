export default class AddOp{
  constructor(xInp,yInp){
    this.x = xInp;
    this.y = yInp;
  }
  add(){
    return this.x + this.y;
  }
}
