const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {

        // let listlength = 0;
        const removeAt = (list, position) => {

          if (position < 0 || position >= length(list)) { return null;}
          
              let current = list;
          
              if (position === 0) {list = current.next} else {      
                 let prev = null;      //создаем параметр Предыдущий
                  let index = 0;        //создаем индекс
          
                  while (index < position) { //перемещаемся по узлам, пока не достгнем нужнной позиции
                      prev = current;
                      current = current.next;
                      index++;
                  }
              
                  prev.next = current.next;//в предыдущий узел сохраняем ссылку ткущегго узла на следующий узел. текущий узел удаляется
              }
              
              // length(list)
              return list; //возвращаем удаленный узел
        }  
  
     
            const  indexOf = (list, element) => {    // поиск индекса по значению
                    let current = list; //запомним головной узел
                    let index = 0;           //записали индекс
                
                    while (current) {       //перебирам узлы, пока значение не будет равно значения узла
                    if (current.value === element) { //возвращаем индекс найденого узла
                        return index;
                    }
                
                    current = current.next; //иначе, движемся к следующему узлу
                    index++;                //увеличиваем индекс
                    }
                
                    return -1;      //если элемент не найден, возвращаем -1
            }
  
            const  remove = (list, element) => {   //удаление элемента по значению
                return removeAt(list, indexOf(list, element) );
            }
  

            const length = (list) => {         //печатаем все элементы списка в Лог
                let current = list;
                list_length = 0;
                while(current) {
                  current = current.next;
                  list_length++;
                }

                return list_length
            }

            // length(l)
            while(indexOf(l,k) >= 0) {l = remove(l, k)}

            return l 
  }

module.exports = {
  removeKFromList
};
