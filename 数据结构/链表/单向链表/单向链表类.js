// 节点的辅助类
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

//链表基本骨架
class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }

    getElementAt(position) { // 获取第position节点的元素
        if (position < 0 || position >= this.length) {
            return null
        }
        let current = this.head
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current
    }

    show() {
        let current = this.head
        let arr = ''
        for (let i = 0; i < this.length; i++) {
            arr += (current.element + ((i === this.length - 1) ? '' : '->'))
            current = current.next
        }
        console.log(arr)
    }

    append(element) { // 添加元素
        let node = new Node(element)
        // 链表为空 直接作为头结点
        if (this.head === null) {
            this.head = node
        } else {
            // 否则找到尾元素，插入
            let current = this.getElementAt(this.length - 1)
            current.next = node
        }
        this.length++
    }

    insert(position, element) { // 插入元素
        // position不符
        if (position < 0 || position > this.length) {
            console.log('无法插入')
            return false
        }
        //插入
        let node = new Node(element)
        if (position === 0) {
            node.next = this.head
            this.head = node
        } else {
            let previous = this.getElementAt(position - 1)
            node.next = previous.next
            previous.next = node
        }
        this.length++
        console.log('插入成功')
        return true
    }

    remove(position) {
        if (position >= this.length || position < 0) {
            console.log('无法删除')
            return false
        }
        let current = this.head
        if (position === 0) {
            head = head.next
        } else {
            current = this.getElementAt(position - 1)
            current.next = current.next.next
        }
        this.length--
        this.show()
        return true
    }

    indexOf(element) { // 查找元素所在位置
        let current = this.head
        let index = 0
        while (current) {
            if (current.element === element) {
                return index
            }
            current = current.next
            index++
        }
    }

    clear() { // 清空链表
        this.head = null
    }

    getHead() { // 返回链表头元素
        return this.head.element
    }

    size() { // 返回链表长度
        return this.length
    }

    isEmpty() { // 判断链表是否为空
        return this.head ? true : false
    }
}
