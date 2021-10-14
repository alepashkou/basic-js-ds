const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {
  constructor(){
    this.elka = null;
  }

  root() {
    return this.elka;
  }

  add(data) {

    const newNod = new Node(data)
    if(!this.elka){
      return this.elka = newNod;;
    }
    let currentElka = this.elka
    while(currentElka){
      if(newNod.value < currentElka.value){
        if(!currentElka.left){
          currentElka.left = newNod;
        }
        currentElka= currentElka.left
      } else {
        if(!currentElka.right){
          currentElka.right = newNod;
        }
        currentElka = currentElka.right
      }
    }
  }

  has(data) {
    let currentElka = this.elka
    
    for (let i = 0; i<100000000000000; i++){
      if(currentElka === null){return false};
      if(currentElka.value === data){return true};
      if(currentElka.value > data){
        currentElka = currentElka.left
      } else {
        currentElka = currentElka.right
      }
    }
  }

  find(data) {
    let currentElka = this.elka
    for (let i = 0; i<100000000000000; i++){
      if(currentElka === null){return null};
      if(currentElka.data === data){return currentElka};
      if(currentElka.value > data){
        currentElka = currentElka.left
      } else {
        currentElka = currentElka.right
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentElka = this.elka
    for(let i=0; i<1000000000000;i++){
      currentElka = currentElka.left
      if (currentElka.left === null){
        return currentElka.value
      }
    }
  }

  max() {
    let currentElka = this.elka
    for(let i=0; i<1000000000000;i++){
      currentElka = currentElka.right
      if (currentElka.right === null){
        return currentElka.value
      }
    }
  }

}