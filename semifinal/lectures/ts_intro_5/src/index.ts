// Classes

class Point {
  x = 0
  y = 0

  displayCoordinates(): void {
    console.log(`(${this.x},${this.y})`)
  }
}

// instantiate a class

// const point = new Point()
// point.x = 5
// point.y = 5
// point.displayCoordinates()
// point.x = 10
// point.displayCoordinates()

// Problem 2:

class Animal {
  public name: string = ''

  constructor(name: string) {
    this.name = name
  }

  public walk(): void {
    console.log('I can walk')
  }

  public sleep(): void {
    console.log('I can sleep')
  }
}

class Dog extends Animal {
  public bark(): void {
    console.log('arf arf')
  }
}

class Cat extends Animal {
  public purr(): void {
    console.log('purrrrrrr')
  }
}

class DomesticCat extends Cat {
  public pet(): void {
    console.log('pet')
  }
}

const dog = new Dog('Kevin')
dog.bark()
dog.sleep()

const cat = new Cat('Blacky')
cat.purr()

const domesticCat = new DomesticCat('Whitey')
domesticCat.pet()
