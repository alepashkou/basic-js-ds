const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
 class ListNode {
  constructor(x){
    this.value = x;
    this.next = null;
  }
}
module.exports = function removeKFromList(list,k) {
  let array = []
while(list.next !== null){
  array.push(list.value)
  if(list.next){
    list =  list.next
  }
}
array.push(list.value)
let filtered = array.filter(el => el != 3);

return filtered.reverse().reduce((accumulator, current) => {
  if (accumulator) {
    const newNod = new ListNode(current);
    newNod.next = accumulator;
    return newNod;
  }

  return new ListNode(current);
}, null)}
