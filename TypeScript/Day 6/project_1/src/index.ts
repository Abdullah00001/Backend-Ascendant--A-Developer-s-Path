// UNION

const getId = (id: string | number): string | number => {
  return id;
};

const getItem = (id: string | number): string | number => {
  if (typeof id === 'string') {
    return id.concat('gggggg');
  }
  return id.toString();
};

console.log('in string : ', getId('22'));
console.log('in number : ', getId(34));

console.log(getItem('12'));
console.log(getItem(12));

// TYPE ALIASE

type User = {
  email: string;
  password: string;
  skills: string[];
};

const abdullah: User = {
  email: 'abdullah@gmail.com',
  password: 'abdullah',
  skills: ['js', 'ts', 'node', 'express', 'mongodb', 'mongoose'],
};

console.log(abdullah.skills.find((skill) => skill === 'mongoose'));

const skills = abdullah.skills.map((skill) => skill);

console.log(skills);

// LITERAL TYPE

let isActive: 'active' | 'ofline';

isActive = 'active';

console.log(isActive);

const theme = (mood: 'dark' | 'light'): void => {
  if (mood === 'dark') console.log(`Dark Mood On`);
  console.log('Light Mood On');
};

theme('light');

// LITERAL INFERRENCE

// normally ts infferd the value type is wide (string,number,boolean)
// but when we want that , variables value type will be literal than we need to force ts or guide ts
// its all about literal inference

let number = 43 as const;

// NARROWING

// typeof
const giveMeSomeAnyHow = (input1: number | string, input2: number): number => {
  if (typeof input1 === 'string') return parseInt(input1) + input2;
  return input1 + input2;
};

console.log(giveMeSomeAnyHow('5050', 3890));

class Vehichel {
  static break = (): string => {
    return 'break applied';
  };
}

class Car extends Vehichel {
  constructor() {
    super();
  }
  static automatic = (): void => console.log('Have Automatic Gear Feature');
}

console.log(Car.break())