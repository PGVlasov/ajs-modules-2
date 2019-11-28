import Character from './domain.js';

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default class Game {
  start() {
    console.log('game started');
  }
}

export {GameSavingData, readGameSaving, writeGameSaving}