import character from "../models/characters.js";

let _stateE = {
  Enemies: []
}
let monstervalue = 0
let monster = Math.floor(Math.random() * (100 - 1)) + 1
export default class EnemyService {
  constructor() {
    console.log("Hola, enimies")
  }

  makeenemy(newenemy) {
    if (monstervalue < 5) {

      if (monster < 3 && monstervalue < 2) {
        newenemy.name = "Abycial"
        newenemy.type = ",The Darkness"
        newenemy.alignment = 'Evil'
        newenemy.power = 15
        newenemy.health = 500
        newenemy.level = 20
        newenemy.image = ''
        monstervalue += 4
        _stateE.Enemies.push(new character(newenemy))
      }
      else if (monster < 20 && monstervalue < 3) {
        newenemy.type = "Shadow Demon"
        newenemy.alignment = 'Evil'
        newenemy.power = 5
        newenemy.health = 50
        newenemy.level = 10
        newenemy.image = ''
        monstervalue += 2
        _stateE.Enemies.push(new character(newenemy))
      }
      else if (monster < 50) {
        newenemy.type = "Corrupted Being"
        newenemy.alignment = 'Evil'
        newenemy.power = 3
        newenemy.health = 20
        newenemy.level = 5
        newenemy.image = ''
        monstervalue += 2
        _stateE.Enemies.push(new character(newenemy))
      }
      else {
        newenemy.type = 'Minion'
        newenemy.alignment = 'Evil'
        newenemy.power = 1
        newenemy.health = 10
        newenemy.level = 1
        newenemy.image = ''
        monstervalue += 1
        _stateE.Enemies.push(new character(newenemy))
      }
    }
  }
  replaceEnemy(index) {
    if (_stateE.Enemies[index].health <= 0) {
      _stateE.Enemies.splice(index, 1)

      this.makeenemy()
    }

  }

}