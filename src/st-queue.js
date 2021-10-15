const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.header = null;
  }
  getUnderlyingList() {
    return this.header;
  }

  enqueue(data) {
    if (!this.header) {
      this.header = new ListNode(data);
    } else {
      let current = this.header;
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(data);
    }
  }

  dequeue() {
    const value = this.header.value
    this.header = this.header.next
  return value
  }

}
