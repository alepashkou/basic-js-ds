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
      if(newNod.data < currentElka.data){
        if(!currentElka.left){
          currentElka.left = newNod;
          break;
        }
        currentElka= currentElka.left
      } else {
        if(!currentElka.right){
          currentElka.right = newNod;
          break;
        }
        currentElka = currentElka.right
      }
    }
  }

  has(data) {
    console.log(data)
    let currentElka = this.elka
    
    while(currentElka){
      if(currentElka === null){return false};
      if(currentElka.data === data){return true};
      if(currentElka.data > data){
        currentElka = currentElka.left
      } else {
        currentElka = currentElka.right
      }
    }
    return false;
  }

  find(data) {
    let currentElka = this.elka
    
    while(currentElka){
      if(currentElka === null){return null};
      if(currentElka.data === data){return currentElka};
      if(currentElka.data > data){
        currentElka = currentElka.left
      } else {
        currentElka = currentElka.right
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {

    let currentElka = this.elka
    while (currentElka.left) {
      currentElka = currentElka.left
    }

    return currentElka.data
  }
  

  max() {

    let currentElka = this.elka
    while (currentElka.right) {
      currentElka = currentElka.right
    }

    return currentElka.data
  }

}