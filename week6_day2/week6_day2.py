class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def printLinkedList(self):
        value = self.head
        while (value):
            print(value.data)
            value = value.next

class Solution(object):
    def middleNode(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

if __name__=='__main__':
    linkedlist =  LinkedList()
    middleElement = Solution()

    linkedlist.head = Node(1)
    second = Node(2)
    third = Node(3)
    fourth = Node(4)
    fifth = Node(5)
    sixth = Node(6)

    linkedlist.head.next = second
    second.next = third
    third.next = fourth
    fourth.next = fifth
    fifth.next = sixth

    linkedlist.printLinkedList()
    print("Middle Element is: ",middleElement.middleNode(linkedlist.head).data)

