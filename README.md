## 数据结构

### 栈

> 特点：先入后出
> 只能在某一端插入和删除的特殊线性表。它按照先进后出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，
> 需要读数据的时候从栈顶开始弹出数据（最后一个数据被第一个读出来）


###  队列
-  优先队列
-  循环队列

> 特点：先入先出
> 它只允许在表的前端进行删除操作，而在表的后端进行插入操作。
> 进行插入操作的端称为队尾，进行删除操作的端称为队头。

### 链表
- 单向链表
- 双向链表
- 循环链表

> 特点：每个节点拥有下一个节点的指针
> 链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。
> 每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域
> 链表相对于数组，最大的优势是往列表中间插入或者删除元素时，不用前后移动列表元素。
> 如果需要访问列表任意元素还是使用数组方便，链表则需要一个节点一个节点的遍历。

### 集合

> 特点：无序、唯一、键名即是键值。类似es6的Set
> 目前实现存在bug，字符串/数值 无法共存。 s.add(1)、s.add('1')

### 字典

> 特点：也称作映射，以[键，值]的形式来存储元素。类似es6的Map

### 散列表

> 字典的散列表实现方式，使用散列函数可能会出现生成的散列冲突问题。
> 解决方案：线性检测、双散列法、以及使用链表。 


## 排序

### 冒泡排序

> 它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。 
> 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。 


> ![Aaron Swartz](./static/images/bubbleSort.gif)

### 选择排序

> 每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。

> ![Aaron Swartz](./static/images/selectionSort.gif)

### 插入排序

> 每步将一个待排序的数据，按其值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。

> ![Aaron Swartz](./static/images/insertionSort.gif)

### 归并排序

> 将已有序的子序列合并，得到完全有序的序列。即先使每个子序列有序，再使子序列段间有序。

> ![Aaron Swartz](./static/images/mergeSort.gif)