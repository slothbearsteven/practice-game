import CharacterController from "./controllers/CharacterController.js";


export default class App {
  constructor() {
    this.controllers = {
      characterController: new CharacterController(),

    }
  }

}

window['app'] = new App()