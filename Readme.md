# 4. Provide an example of using union and intersection types in TypeScript.

#### Blog-Title: Understanding the use case of union and intersection types in Typescript.

##### What is Union Type?

- Union means it can it can hold multiple types. Suppose we have multiple types and we have to choose one of them. If any of the type matches we are good to go. Union is written using "|". Its almost similar to javascript "||" operator.
-

```ts
type Type1 = {
    status = "Done";
}
type Type2 = {
    status = "Running";
}
type Type3 = {
    status = "Pending";
}

type UnionTypes = Type1 | Type2 | Type3



const process1 : UnionTypes  = { status: "Done" };
const process3 : UnionTypes = { status: "Pending" };

```

- Here "UnionTypes" is taking all the types and making union of the types and allowing the variable to satisfy one of them.

##### What is Intersection Type?

- Intersection type means it takes different type and create a single type and tells all the intersection types should be followed. This means the assigned variable must have all the properties of the types that are intersected.
-

```ts
type PhoneInfo = { brand: string; quantity: number };
type Status = { new: boolean };

type Phone = PhoneInfo & Status;

const availablePhone: Phone = {
  brand: "Apple",
  quantity: 10,
  new: false,
};
```

- This taking the PhoneInfo Tye and Status type and making the availablePhone variable to follow the rules that it should have all the properties mentioned in the two type.

##### Example of combined Intersection and Union Type

- Lets Make Fusion of Intersection and Union Type

```ts
type Person = {
  id: number;
  name: string;
  age: number;
};

type Student = {
  role: "student";
  class: string;
  subject: string;
  studies: number;
};

type Teacher = {
  role: "teacher";
  department: string;
  takesClass: number;
};

// union
type Role = Student | Teacher;

// intersection
type User = Person & Role;

const user1: User = {
  id: 1,
  name: "Sazid",
  age: 20,
  role: "student",
  class: "10",
  subject: "Math",
  studies: 5,
};

const user2: User = {
  id: 2,
  name: "Mr. Mazid",
  age: 40,
  role: "teacher",
  department: "Science",
  takesClass: 3,
};
```

##### Now lets decode this Line by line.

- Person, Teacher, Student are individual type here.
- The Role type is ensuring that the role might be Student Or Teacher Type by using Union Type.
- The User Type Ensures that Person Type and Role Type Must be maintained.
- A user can be Teacher or Student But User must satisfy Person Type.

# 3. Explain the difference between any, unknown, and never types in TypeScript.

#### Blog-Title: TypeScript Deep Dive: Understanding the Differences Between any, unknown, and never

Typescript Made Javascript Powerful Giving Some Extra Features. any, unknown, and never types are one of the features.The Use cases are a lot of these, This blog will help to understand the core concepts of the types

#### Any Type

- Any Type gives us the facility of shutting down the type checking. The name of the type says what it will do. In real it does the same works by helping to hold any Type of data. Though This is risky to use any type since typescript do not mind of any kind of data, still it is useful in such case like we have to deal with dynamic kind of data and we do not want harsh typescript rules. Lets See With an example.

```ts
let value: any;

value = 1;
value = "sazid";
value = ["s", "a", "z", "i", "d"];
```

- Look at this by saying the value can hold anything, we can push any kind of data to it. Typescript is not upset about it since compiler do not check.
- Though its risky since it may cause the data imbalance by allowing any kind of data.

##### So when Will we use any type?

- We will use it while handling dynamic type of data and we don't know what will be coming
- If we do not decare type it automatically infers the any type.
- When we want to witch from Js to Ts initially we have to use any type for avoiding error and after migration we will use the required types.
- When a library do not support ts, and it do not give use surety to provide required type of data, then we have to use any type.

#### Unknown Type

- Imagine a Situation like we do not know what will be the output but we will know after some time. In this case we will use Unknown Type. Its Similar to any type. The difference is, in case of "any" type we will never know the data type but in case of "unknown" we will know in future. Lets see an example
- Unknown is also used for dynamic data.

```ts
function handleData(data: unknown): void {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else if (typeof data === "number") {
    console.log(data * data);
  } else {
    console.log("Unsupported data type");
  }
}

handleData(30);
handleData("My Name Is Sazid");
```

- So here, we can see first the data type is unknown and we can give anything in the function but afterwords we are using "typeof" operator and narrowing the type and getting desired output.

##### So when Will we use unknown type?

- We will use unknown while working with API,Inputs,localstorage and parsing. since we will not know what will be coming. After the data came we will define the type.
- If we want to create generic functions like it can take any kind of data and then type checking is done dynamically.
- When we want to witch from Js to Ts we can use "unknown" type as well.

#### Never Type

- Never type is used when we know that the logics will return nothing I mean code will never produce a result. Its like function will never return anything. lets see an example

```ts
const showMsg = (msg: string): never => {
  console.log(msg);
};

showMsg("I am Returning Nothing I am Just console Logging");
```

- Most used scenario example is throwing error

```ts
const showError = (msg:string) : never =>{
    thrown new Error(msg)
}

showError("I am Error")
```

##### So when Will we use never type?

- We will use never type when the function is returning nothing but throwing error
- When the situation is like function will be running forever and do not return anything we will use never type
- When The function do not return anything except doing console.log() we will use never type

Lets see difference between all of them together.

| Keys              | any                                                    | unknown                                                                                           | never                                       |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Definition**    | Do not check any kind of type                          | Initially we do not know what will be the type but after sometime we will know the type in future | Represents values that never occur          |
| **Usage**         | Type is not a factor here                              | Receives any type but inside the function type narrowing is done                                  | When Function have nothing to return        |
| **Safety Factor** | Its Totally not safe to use except necessary situation | Its safe since inside function type narrowing is done                                             | Its also safe since it works in return type |
