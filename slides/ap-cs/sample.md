# Variables in Java
AP Computer Science A

---

## What is a Variable?

A **variable** is a named location in memory that stores a value

Think of it like a labeled box that holds information

---

## Primitive Types

Java has 8 primitive data types:

- **int** - whole numbers
- **double** - decimal numbers
- **boolean** - true/false
- **char** - single characters

---

## Declaring Variables

```java
int age = 16;
double gpa = 3.8;
boolean isStudent = true;
char grade = 'A';
```

Each variable has:
1. A **type** (int, double, etc.)
2. A **name** (age, gpa, etc.)
3. A **value** (16, 3.8, etc.)

---

## Practice Problem

What's the output of this code?

```java
int x = 5;
x = x + 3;
System.out.println(x);
```

----

## Solution

```java
int x = 5;      // x is 5
x = x + 3;      // x becomes 8
System.out.println(x);  // prints: 8
```

The answer is **8**

---

## String Variables

Strings are **reference types**, not primitives:

```java
String name = "Kyle";
String school = "Elk Grove High";
```

Note: Strings use **double quotes**, chars use **single quotes**

---

## Common Mistakes

❌ **Wrong:**
```java
int number = 3.14;  // Can't store decimal in int
String word = 'hi'; // Strings need double quotes
```

✅ **Correct:**
```java
double number = 3.14;
String word = "hi";
```

---

## Your Turn

Declare variables for:
1. Your age (int)
2. Your height in meters (double)
3. Your first name (String)
4. Whether you play sports (boolean)

---

## Summary

- Variables store data in memory
- Each has a **type**, **name**, and **value**
- Primitive types: int, double, boolean, char
- Strings are reference types
- Use correct syntax: `type name = value;`

---

## Homework

Complete the Variables Practice worksheet

Due: Next class
