class Person{
    #name = 'Kelly';
    get #getName(){
      return #name;
    }
    set #setName(){
      #name = 'Anna';
    }
    static hasTitle(obj){
      return #name in obj;
    }
  }