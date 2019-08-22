import character from "../models/characters.js";

let _stateH = {
  Heroes: []
}
let HP = document.getElementById('herohealth')
let EP = document.getElementById('heroenergy')
let name0type = document.getElementById('heroname')

export default class HeroService {
  constructor() {
    console.log('hello from character service')
  }

  makehero(newhero) {

    if (_stateH.Heroes.length < 5) {
      newhero.alignment = 'good'
      switch (newhero.type) {
        case "Rogue":
          newhero.power = 10
          newhero.health = 50
          newhero.energy = 50
          newhero.image = ''
          break;
        case "Warlock":
          newhero.power = 3
          newhero.health = 75
          newhero.energy = 100
          newhero.image = ''
          break;
        case 'Knight':
          newhero.power = 6
          newhero.health = 75
          newhero.energy = 20
          newhero.image = ''
          break;
        case 'Paladin':
          newhero.power = 5
          newhero.health = 100
          newhero.energy = 50
          newhero.image = ''
          break;
        case 'Cleric':
          newhero.power = 2
          newhero.health = 75
          newhero.energy = 100
          newhero.image = ''
          break;
      }
      _stateH.Heroes.push(new character(newhero))
    }
    else {
      alert("Maximum number of heroes achieved")
    }
  }
  herotemplate(index) {
    name0type.innerText = ` ${_stateH.Heroes[index].name}, ${_stateH.Heroes[index].type}`
    EP.innerText = `EP:${_stateH.Heroes[index].energy}`
    HP.innerText = `HP:${_stateH.Heroes[index].herohealth}`
  }
  heroattack(index) {
    let dmg2enemy = _stateH.Heroes[index].power

    return dmg2enemy
  }
  heroability(index) {
    switch (_stateH.Heroes[index].type) {
      case "Rogue":
        return 20
        break;
      case "Warlock":
        return 10
        break;
      case 'Knight':
        return 10
        break;
      case 'Paladin':
        return 10
        break;
      case 'Cleric':
        return 10
        break;
    }
  }
}

