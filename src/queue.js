const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

//  class Node {    // класс Узел
//   constructor(value) {
//     this.value = value;   // значение узла
//     this.next = null;     //ссылка на следующий узел
//   }
// }

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue extends ListNode {

  constructor(x) {
    super(x)
  //   this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head
    
  }

  enqueue(value) {
    if (this.length === 0) {  // если список пустой

      // console.log(this)

      this.head = new ListNode(value); //создаем новый узел и присваимваем его в голову
    } else {
      let current = this.head;  // если список был не пустой, то в текущий элемент берем значение из головного узла

      // move to the last node
      while(current.next) { //двигаемся по списку к последнему узлу, пока next не будет равен null
        current = current.next;
      }

      current.next = new ListNode(value); // создаем и присваиваем последнему узлу новый узел
    }

    this.length++; //увеличиваем счетчик длины
    
  }

  dequeue() {

      let current = this.head; //берем головоной узел
      this.head = current.next; //то в головной узел перемещаем следующий узел
      this.length--;    //уменьшаме длину списка
      return current.value; //возвращаем удаленный узел
    
  }
}

module.exports = {
  Queue
};
