Node partition(Node node, int x){
    Node head = node;
    Node tail = node;

    while (node != null){
        Node next = node.next;
        if (next.value < x) {
            node.next = head;
            head = node;
        } else {
            tail.next = node;
            tail = node;
        }
        node = next;
    }
    tail.next = null;
    return head;
}
