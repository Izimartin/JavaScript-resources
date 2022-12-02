class People {
    showName() {
      console.log("My name is Faithful")
    }
    #showAge() {
      console.log("Faithful is 20")
    }
    showAll() {
        this.showName()
        this.#showAge();
      }
  }
  
  const people = new People()
  
  people.showName()
  people.showAge() // error: private 'cause of # 
  people.showAll(); // accesed from a child function