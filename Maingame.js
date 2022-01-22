class Snake{
  constructor(){
    this.body=[];
    this.body[0]=createVector(0,0);
    this.xdir=0;
    this.ydir=0;
    this.len=0
  }
  
  
  setdir(x,y){
    this.xdir=x;
    this.ydir=y;
    
  }
  
  
  update(){
    let head=this.body[this.body.length-1].copy();
    this.body.shift();
    head.x=head.x+this.xdir;
   head.y=head.y+this.ydir;
    this.body.push(head);    
  }
  
  
  grow(){
    let head=this.body[this.body.length-1].copy();
    this.len++;
     this.body.push(head); 
  }
  
  
  endgame(){
    let x=this.body[this.body.length-1].x;
  let y=this.body[this.body.length-1].y;
    if(x>w-1 || x<0 || y<0 || y>h-1){
      return true;
    }
    for(let i=0; i<this.body.length-1;i++){
      let part=this.body[i];
      if(part.x==x && part.y==y){
        return true;
      }
      
    }
    return false;
  }
  
  
eat(pos){
  let x=this.body[this.body.length-1].x;
  let y=this.body[this.body.length-1].y;
  if (x==pos.x && y==pos.y){
    this.grow();
    return true;
  }
  return false;
}

  
  
  show(){
    for(let i=0; i<this.body.length;i++){
      
    
    fill(0,168,0);
    rect(this.body[i].x,this.body[i].y,1,1);
    }
  }
  
}
