

export default class character {
  constructor(that) {
    console.log('A being has arrived')
    this.name = that.name || ""
    this.type = that.type || ''
    this.health = that.health
    this.energy = that.energy
    this.image = that.image
    this.power = that.power
    this.level = that.level || ''
    this.alignment = that.alignment
  }
}