
type User = {
  id: string;
  name: string;
  age?: number;
};

// Error ที่เกิดตอน Compile:
// 'user.age' is possibly 'undefined' (เพราะ age เป็น optional property จึงมีโอกาสเป็น undefined ได้เมื่อเปิด strict mode)

function isAdult(user: User): boolean {
  if (user.age === undefined) {
    return false;
  }
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // false
```[cite: 6, 7, 8, 9]
