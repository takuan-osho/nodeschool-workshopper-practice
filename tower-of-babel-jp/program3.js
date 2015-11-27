class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health = 100;
  }
  damage() {
    this.health -= 10;
  }
  getHealth() {
    return this.health
  }
  toString() {
    return "x: " + this.x + " y: " + this.y + " health: " + this.health;
  }
}

class Player extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  toString(){
    return "name: " + this.name + " " + super.toString();
  }
}

let x = process.argv[2];
let y = process.argv[3];
let name = process.argv[4];
let character = new Character(+x, +y);
character.damage();
console.log(character.toString());
let player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());
