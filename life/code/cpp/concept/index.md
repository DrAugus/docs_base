# 概念辨析

## oop

What is OOP?

OOP stands for Object-Oriented Programming.

Procedural programming is about writing procedures or functions that perform operations on the data, while object-oriented programming is about creating objects that contain both data and functions.

Object-oriented programming has several advantages over procedural programming:

- OOP is faster and easier to execute
- OOP provides a clear structure for the programs
- OOP helps to keep the C++ code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
- OOP makes it possible to create full reusable applications with less code and shorter development time

:::info TIPS
The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it.
:::

## What are Classes and Objects?

example:

class - fruit  
object - apple, banana

```cpp
class Fruit {

};

int main {
  Fruit apple;
}
```

## 参数

```cpp
void display_name (std::string name) {
  std::cout << name;
}

int main () {
  display_name('Lisa');
  display_name('Tom');
}
```

When a **parameter** is passed to the function, it is called an **argument**. So, from the example above: `name` is a parameter, while Lisa and Tom are arguments.

## 特性 —— 封装 继承 多态

Encapsulation, Inheritance, Polymorphism

Why Encapsulation?

- It is considered good practice to declare your class attributes as private (as often as you can). Encapsulation ensures better control of your data, because you (or others) can change one part of the code without affecting other parts
- Increased security of data

Inheritance

- **derived class** (child) - the class that inherits from another class
- **base class** (parent) - the class being inherited from

Why And When To Use "Inheritance" and "Polymorphism"?  
> It is useful for code reusability: reuse attributes and methods of an existing class when you create a new class.

**多态**：是对于不同对象接收相同消息时产生不同的动作。C++的多态性具体体现在运行和编译两个方面：

- 在程序运行时的多态性通过继承和虚函数来体现；
- 在程序编译时多态性体现在函数和运算符的重载上；

**虚函数**：在基类中冠以关键字 virtual 的成员函数。 它提供了一种接口界面。允许在派生类中对基类的虚函数重新定义。

**纯虚函数的作用**：在基类中为其派生类保留一个函数的名字，以便派生类根据需要对它进行定义。作为接口而存在
纯虚函数不具备函数的功能，一般不能直接被调用。

从基类继承来的纯虚函数，在派生类中仍是虚函数。如果一个类中至少有一个纯虚函数，那么这个类被称为**抽象类**（abstract class）。

抽象类中不仅包括纯虚函数，也可包括虚函数。抽象类必须用作派生其他类的基类，而不能用于直接创建对象实例。但仍可使用指向抽象类的指针支持运行时多态性。

|   继承描述符   |  父public成员   | 父protected成员 | 父private成员 |
|:---------:|:------------:|:------------:|:----------:|
|  public   |  子public成员   | 子protected成员 |     -      |
| protected | 子protected成员 | 子protected成员 |     -      |
|  private  |  子private成员  |  子private成员  |     -      |

1. `public`：只继承基类的接口。当继承是接口的一部分时，就选用public继承。
2. `private`：只继承基类的实现。当继承是实现细节时，就选用private继承。
3. `protected`：当继承是面向派生类而不是面向用户接口中的一部分时，就选用protected继承。 private意味着”根据某物实现出“的语义。和复合拥有同样的语义。

- C++ 中虚函数与纯虚函数的区别
- C++ 的重载和重写是如何实现的？
- C++ 中什么是菱形继承问题？
- 父类和子类是不是在同一个虚函数表
- C++ 中多态是怎么实现的
- 虚表指针的大小
- 虚函数表的存放内容
- 构造函数可以是虚函数吗
- 析构函数可以是虚函数吗

在基类的函数前加上virtual关键字，在派生类中重写该函数，运行时将会根据对象的实际类型来调用相应的函数。
如果对象类型是派生类，就调用派生类的函数；如果对象类型是基类，就调用基类的函数  
用virtual关键字申明的函数叫做虚函数，虚函数肯定是类的成员函数。
存在虚函数的类都有一个一维的虚函数表叫做虚表，类的对象有一个指向虚表开始的虚指针。
虚表是和类对应的，虚表指针是和对象对应的。
多态性是一个接口多种实现，是面向对象的核心，分为类的多态性和函数的多态性。
多态用虚函数来实现，结合动态绑定。
纯虚函数是虚函数再加上 = 0； 抽象类是指包括至少一个纯虚函数的类。
纯虚函数:virtual void fun()=0;即抽象类！必须在子类实现这个函数，即先有名称，没有内容，在派生类实现内容。

[更多虚函数](./virtual)

## 编译时链接有几种方式？[静态链接和动态链接的区别](https://www.cnblogs.com/cyyljw/p/10949660.html)是什么？

问题变形，

- 简述 C++ 从代码到可执行二进制文件的过程
- 简述 C++ 编译的过程

answer：

- 编译分为3步
  - 首先对源文件进行预处理，这个过程主要是处理一些#号定义的命令或语句（如宏、#include、预编译指令#ifdef等），生成*.i文件；
  - 然后进行编译，这个过程主要是进行词法分析、语法分析和语义分析等，生成*.s的汇编文件；
  - 最后进行汇编，这个过程比较简单，就是将对应的汇编指令翻译成机器指令，生成可重定位的二进制目标文件。
- 静态链接
- 动态链接
- 更多细节，[从编写源代码到程序在内存中运行的全过程解析](https://blog.csdn.net/kang___xi/article/details/79571137)

## 转移语义(Move Semantics)

转移语义是 C++ 编程语言中一个概念，它指的是将一个对象的所有权从一个对象转移到另一个对象的过程。转移语义可以通过移动构造函数和移动赋值运算符来实现，它可以让你在不拷贝对象的情况下，快速地将一个对象的所有权从一个对象转移到另一个对象。

下面是一个简单的例子，展示了如何使用移动构造函数和移动赋值运算符来执行移动语义：

```cpp
#include <iostream>
#include <string>
#include <utility>

class Person
{
public:
    Person(const std::string& name, int age)
        : m_name(name), m_age(age)
    {
        std::cout << "Person(const std::string&, int) called." << std::endl;
    }

    // 移动构造函数
    Person(std::string&& name, int age)
        : m_name(std::move(name)), m_age(age)
    {
        std::cout << "Person(std::string&&, int) called." << std::endl;
    }

    // 移动赋值运算符
    Person& operator=(Person&& other)
    {
        std::cout << "operator=(Person&&) called." << std::endl;

        if (this != &other)
        {
            m_name = std::move(other.m_name);
            m_age = other.m_age;
        }

        return *this;
    }

    void print() const
    {
        std::cout << "name: " << m_name << ", age: " << m_age << std::endl;
    }

private:
    std::string m_name;
    int m_age;
};

int main()
{
    std::string name = "Jane Doe";
    Person p1(name, 25);

    // 调用移动构造函数
    Person p2(std::move(name), 26);
    p2.print();

    // 调用移动赋值运算符
    Person p3 = std::move(p2);
    p3.print();

    return 0;
}
```

在上面的例子中，我们定义了一个名为 `Person` 的类，该类包含两个成员变量：`m_name` 和 `m_age`，分别表示人的姓名和年龄。我们定义了两个构造函数来创建 `Person` 类的对象，一个接收 `const std::string&` 类型的参数，另一个接收 `std::string&&` 类型的参数。

在 `main` 函数中，我们首先创建了一个名为 `name` 的字符串变量，然后通过第一个构造函数创建了一个名为 `p1` 的 `Person` 类的对象。接着，我们调用了第二个构造函数，并通过 `std::move` 函数将 `name` 变量转换为右值。这样，我们就可以通过移动构造函数创建了一个名为 `p2` 的 `Person` 类的对象，并且成功地将 `name` 变量的所有权转移到了 `p2` 对象。

接下来，我们再次调用 `std::move` 函数，将 `p2` 对象转换为右值，然后通过移动赋值运算符将 `p2` 对象的所有权转移到了 `p3` 对象。最后，我们调用 `p3` 对象的 `print` 方法，打印出它的姓名和年龄。

经过上面的操作，我们成功地通过移动构造函数和移动赋值运算符实现了对象所有权的转移。这种方式可以比拷贝对象更快，同时也避免了拷贝对象时可能出现的问题。

不过，转移语义也有一些需要注意的地方。在执行移动语义后，原来的对象会失去所有权，它的状态可能会变得不确定。因此，在执行移动语义后，原来的对象不应该再被使用。

另外，移动语义也不能用于所有的场景。例如，如果对象中包含了 const 成员变量，那么就不能使用移动语义。在这种情况下，只能通过拷贝语义来转移对象所有权。

总之，转移语义是一种有用的工具，它可以提高代码的效率，同时也可以避免一些常见的问题。在使用时，需要根据具体的情况来选择合适的方法，并且注意避免出现问题。

## 左值和右值

左值和右值是在编译原理中常用的概念。在 C++ 中，左值是可以出现在赋值语句的左边的表达式，它表示的是一个内存地址。右值是出现在赋值语句的右边的表达式，它代表的是一个存储在内存中的数值。

例如，在下面的赋值语句中：

```cpp
x = 10;
```

变量 `x` 是一个左值，因为它表示的是一个存储了数值 `10` 的内存地址。而数字 `10` 本身是一个右值，因为它代表的是一个存储在内存中的值。

另外，表达式 `10 + 20` 的结果是一个右值，因为它表示的是一个临时存储的值，而不是一个内存地址。

总之，左值和右值是编译器在编译代码时用来区分不同类型的表达式的概念。

## malloc 和 new，free 和 delete 的区别

`malloc` 和 `new` 的区别：

- `malloc` 是 C/C++ 中的函数，用于动态分配内存，返回 `void*` 类型的指针。需要手动指定内存大小，并且不会自动调用构造函数。
- `new` 是 C++ 中的运算符，用于动态分配内存，返回指定类型的指针。可以自动调用构造函数，不需要手动指定内存大小。

`free` 和 `delete` 的区别：

- `free` 是 C/C++ 中的函数，用于释放 `malloc` 动态分配的内存。
- `delete` 是 C++ 中的运算符，用于释放 `new` 动态分配的内存，同时会自动调用析构函数。

> 需要注意的是，如果使用 new 来分配内存，必须使用 delete 来释放；如果使用 malloc 来分配内存，必须使用 free 来释放。否则会出现内存泄漏或者段错误等问题。同时，使用 new 分配内存时还需要注意对于数组类型需要使用 delete[] 来释放，而不是单独的 delete 运算符。

`delete` 与 `delete []`区别

delete只会调用一次析构函数，而delete[]会调用每一个成员的析构函数。在More Effective
C++中有更为详细的解释：“当delete操作符用于数组时，它为每个数组元素调用析构函数，然后调用operator
delete来释放内存。”delete与new配套，delete []与new []配套

```cpp
MemTest *mTest1 = new MemTest[10];
MemTest *mTest2 = new MemTest;
Int *pInt1 = new int[10];
Int *pInt2 = new int;
delete[] pInt1; //-1-
delete[] pInt2; //-2-
delete[] mTest1;//-3-
delete[] mTest2;//-4-
```

在-4-处报错。 这就说明：对于内建简单数据类型，delete和delete[]功能是相同的。对于自定义的复杂数据类型，delete和delete[]
不能互用。delete[]
删除一个数组，delete删除一个指针。简单来说，用new分配的内存用delete删除；用new[]分配的内存用delete[]删除。delete[]
会调用数组元素的析构函数。内部数据类型没有析构函数，所以问题不大。如果你在用delete时没用括号，delete就会认为指向的是单个对象，否则，它就会认为指向的是一个数组。

## 组合与继承

### 组合

- 优点：
  - 不会破环封装性父类的任何变化不会引起子类的变化
  - 组合运用复杂的设计他们的关系实在程序运行的时候才确定的可以支持动态的组合
  - 整体类可以对局部类的接口进行封装，提供新的接口
- 缺点：
  - 整体类不能自动获得和局部类同样的接口，只有通过创建局部的对象去调用它
  - 创建整体类的时候需要创建局部类的对象

### 继承

- 优点：
  - 子类继承了父类能自动获得父类的接口
  - 创建子类对象的时候不用创建父类对象
- 缺点：
  - 破坏了封装，父类的改变必定引起子类的改变，子类缺乏独立性
  - 支持功能上的扩展，但多重继承往往增加了系统结构的复杂度。
  - 继承是在静态编译的时候就已经确定了关系，不支持动态继承。

## 动态绑定和静态绑定的区别

- 对象的静态类型：对象在声明时采用的类型。是在编译期确定的。
- 对象的动态类型：目前所指对象的类型。是在运行期决定的。对象的动态类型可以更改，但是静态类型无法更改。
- 静态绑定：绑定的是对象的静态类型，某特性(比如函数)依赖于对象的静态类型，发生在编译期。
- 动态绑定：绑定的是对象的动态类型，某特性(比如函数)依赖于对象的动态类型，发生在运行期。

## 变量的声明和定义有什么区别？

**声明**告诉编译器，这个变量或函数已经在程序其他地方存在了，所以我正在把这个信息告诉你，下面我要调用的时候请放行。但请不要为我分配任何内存空间，
因为已经这个步骤在变量或函数定义的地方进行分配了  
而**定义**则很清楚了，就是要求分配内存空间。 很多时候，声明和定义是合而为一的。

```cpp
int a;
void func() {};
```

这里同时声明且定义了一个变量和一个函数。

声明可以进行多次，定义只能进行一次

[more info](https://www.jianshu.com/p/92e81ecc8737)

## 内联函数

内联函数是一种编译器优化技术，它允许将函数的代码“内联”到调用它的代码中。这意味着，编译器不会生成一个独立的函数，而是会将函数的代码拷贝到每个调用该函数的地方。这样可以避免在函数调用时执行额外的操作，因此可以提高程序的性能。

## lambda 函数的特点，和普通函数相比有什么优点？

匿名函数，可以在程序的需要时创建和使用，并在不再需要时销毁。lambda 函数具有以下一些特点：

- lambda 函数可以包含多条语句，并且可以使用控制结构（如 if、for 等）。
- lambda 函数可以访问外部作用域中的变量，并且可以捕获外部作用域中的变量。
- lambda 函数可以通过参数传递给其它函数，并且可以作为参数返回给调用者。

与普通函数相比，lambda 函数的优点在于它更加简洁，可以在程序的需要时创建和使用，并且可以访问外部作用域中的变量。

- 指定变量名：例如 `[x]`，表示将外部作用域中的变量 x 捕获到 lambda 函数中。
- 使用拷贝语义：例如 `[=x]`，表示将外部作用域中的变量 x 捕获到 lambda 函数中，并使用拷贝语义。
- 使用引用语义：例如 `[&x]`，表示将外部作用域中的变量 x 捕获到 lambda 函数中，并使用引用语义。

## extern C 的作用

extern "C" 是 C++ 语言中的一个关键字，用于在 C++ 程序中调用 C 语言的函数。

C++ 语言是在 C 语言的基础上发展而来的，它增加了许多新的特性和功能，但是同时也保留了 C 语言的一些特性。例如，C++ 程序可以通过 extern "C" 关键字调用 C 语言中的函数。

为了理解 extern "C" 的作用，我们需要先了解 C++ 和 C 语言的函数命名方式的区别。在 C++ 中，函数名称会经过名称改编，也就是说，编译器会在函数名称中添加一些额外的信息，以区分重载函数。例如，下面是一个 C++ 程序中定义的函数：

```cpp
int add(int x, int y)
{
    return x + y;
}
```

在上面的代码中，我们定义了一个名为 add 的函数，它接收两个 int 类型的参数，并返回一个 int 类型的结果。但是，在编译时，编译器会将函数名称 add 改编为一个新的名称，例如 `_Z3addii` 。这样，即使在不同的文件中定义了同名函数，编译器也能区分它们，避免出现冲突。

而在 C 语言中，函数名称不会经过名称改编。例如，下面是一个 C 程序中定义的函数：

```c
int add(int x, int y)
{
    return x + y;
}
```

在上面的代码中，我们定义了一个名为 add 的函数，它接收两个 int 类型的参数，并返回一个 int 类型的结果。与 C++ 不同的是，在 C 语言中，函数名称不会经过名称改编，例如 add 依然是 add 。

这样，如果在 C++ 程序中直接调用 C 语言中定义的函数，就会出现问题。例如，下面是一个 C++ 程序中调用 C 语言中定义的函数的例子：

```cpp
extern int add(int x, int y);

int main()
{
    int result = add(1, 2);
    return 0;
}
```

在上面的代码中，我们在 C++ 程序中调用了 C 语言中定义的函数 add 。但是，由于 C++ 和 C 语言的函数命名方式不同，C++ 程序并不能直接调用 C 语言中的函数。因此，在上面的例子中，编译器会报错，提示无法找到 add 函数。

为了解决这个问题，C++ 语言引入了 extern "C" 关键字。它能够告诉编译器，接下来定义的函数是 C 语言中的函数，它们的名称不会经过名称改编。因此，可以在 C++ 程序中通过 extern "C" 来调用 C 语言中的函数。例如，下面是一个 C++ 程序中正确调用 C 语言中的函数的例子：

```cpp
extern "C" int add(int x, int y);

int main()
{
    int result = add(1, 2);
    return 0;
}
```

在上面的代码中，我们使用了 `extern "C"` 来声明 C 语言中的函数，并通过它调用了 C 语言中的函数 add 。由于编译器知道 add 函数是 C 语言中的函数，它的名称不会经过名称改编，所以编译器能够正确地找到 add 函数，并调用它。

总之，extern "C" 是 C++ 语言中的一个关键字，用于在 C++ 程序中调用 C 语言的函数。它能告诉编译器，接下来定义的函数是 C 语言中的函数，它们的名称不会经过名称改编。通过 extern "C"，C++ 程序就能够正确地调用 C 语言中的函数。这样，C++ 程序就能够充分利用 C 语言中的代码，提高开发效率。

## volatile关键字的作用

`volatile`关键字用于声明一个变量时，它会告诉编译器，这个变量的值可能会在某个时刻由其他线程更改。这意味着，当一个线程访问这个变量时，它必须每次都从内存中重新读取这个变量的值，而不是使用它在线程本地缓存中的值。这种声明方式可以防止某些线程中的编译器优化，从而确保多个线程都能访问到最新的值。

## 结构（struct）与联合（union）的区别

- 结构和联合都是由多个不同的数据类型成员组成, 但在任何同一时刻, 联合中只存放了一个被选中的成员（所有成员共用一块地址空间）,
  而结构的所有成员都存在（不同成员的存放地址不同）。
- 对于联合的不同成员赋值, 将会对其它成员重写, 原来成员的值就不存在了, 而对于结构的不同成员赋值是互不影响的。

## 重载（`overload`)和重写(`override`，有的书也叫做“覆盖”）的区别？

常考的题目。从定义上来说：

- 重载：是指允许存在多个同名函数，而这些函数的参数表不同（或许参数个数不同，或许参数类型不同，或许两者都不同）。
- 重写：是指子类重新定义父类虚函数的方法。

从实现原理上来说：

- **重载**：编译器根据函数不同的参数表，对同名函数的名称做修饰，然后这些同名函数就成了不同的函数（至少对于编译器来说是这样的）。如，有两个同名函数：function
  func(p:integer):
  integer;和function func(p:string):
  integer;。那么编译器做过修饰后的函数名称可能是这样的：int_func、str_func。对于这两个函数的调用，在编译器间就已经确定了，是静态的。也就是说，它们的地址在编译期就绑定了（早绑定），因此，重载和多态无关！
- **重写**
  ：和多态真正相关。当子类重新定义了父类的虚函数后，父类指针根据赋给它的不同的子类指针，动态的调用属于子类的该函数，这样的函数调用在编译期间是无法确定的（调用的子类的虚函数的地址无法给出）。因此，这样的函数地址是在运行期绑定的（晚绑定）。

## 面向对象编程与面向过程编程的区别与联系

C语言编程的过程。主函数，定义变量，调用函数然后实现。面向过程编程是一种非常具体，要面面俱到的的编程方式。
而面向对象是以对象为单位来进行编程，比较像正常人的思维。

下面我们举个例子，比如开车、加速、减速、刹车。  
用面向过程来说就是你要先有一个车，然后这四个分别是4件事，也就是说你要写4个函数，分别是开车、加速、减速、刹车，这分别是四个事件，如果使用的话要调用4个函数。  
但是对于面向对象的编程来说，我们关心的是车这个类，而不是开车、加速、减速和刹车这四个过程。这4个过程是车这个类的一部分，只是其中的一种行为，而且对于行为的顺序没有强制要求。

**两种思想的对比**：  
面向过程是具体的东西，而且面向过程是面向对象的基础。面向对象可以说是面向过程的抽象，比如汽车有开车，加减速和刹车，关于汽车的操作有好多，
每一个都需要一个具体的过程来实现，把这些过程抽象的总结起来就可以形成一个类，这个类包括的汽车所有的东西，所有的操作。  
总结来说就是，面向过程是一种基础的方法，它考虑的是实际的实现，一般情况下，面向过程是自顶向下逐步求精，其最重要的是模块化的思想方法。
因此在模块化编程的时候才会有“低耦合，高内聚”的思想来提高效率。面向对象的方法主要是把事物给对象化，包括其属性和行为。
当程序较小的时候，面向过程就会体现出一种优势，其程序流程十分清楚。但是，面向对象编程更贴近实际生活的思想。

**面向过程和面向对象的本质理解**  
面向过程是具体化的，流程化的。解决一个问题，需要一步一步分析需要怎样，然后需要怎样，一步一步实现的。
面向对象是模型化的，抽象出一个类，这是一个封闭的环境，在这个环境中有数据有解决问题的方法，你如果需要什么功能直接使用就可以了，
至于是怎么实现的，你不用知道。
从代码层面来看，面向对象和面向过程的主要区别就是数据是单独存储还是与操作存储在一起。
在类的里边，实现具体的功能还是需要流程化、具体化的代码去实现的，在类里还是需要具体的算法来实现的。
总结来说面向对象的底层还是面向过程，面向过程抽象成类，然后封装，方便使用就是面向对象。  
