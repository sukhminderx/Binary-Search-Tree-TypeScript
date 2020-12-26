
import { Node } from "./Node";

export class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  get _root() {
      return this.root;
  }

  /*
    start with root and keep moving to left or right using BST property
    if data<curr.data, recurse over curr.left
    if data>curr.data, recurse over curr.right
    if equal, return curr
  */
  find(curr: Node, data: any) {
    if(!curr) {
      return null;
    }
    if(curr._left && data<curr._data) {
      this.find(curr._left, data);
    } 
    if(curr._right && data>curr._data) {
      this.find(curr._right, data);
    }
    if(data===curr.data) {
      return curr;
    }
  }

  startInsert(root: Node|null, data: any) {
    if(!root){
      this.root = new Node(data);
    } else {
      this.insert(root, data);
    }
  }

  /*
    this el will bcm the leaf
    so our goal is to searh whose left or right child this will be
    when we find the that el, we will put this as left or right child based upon whether it is lesser or greater
  */
  insert(curr: Node | null, data: any) {
    if(!curr){
      // no node at position
      // so position found
      curr = new Node(data);
    } else {
      if(data<curr._data) {
        curr._left = this.insert(curr._left, data);
      } else if (data> curr._data) {
        curr._right = this.insert(curr._right, data);
      }
    }
    return curr;
  }

}
