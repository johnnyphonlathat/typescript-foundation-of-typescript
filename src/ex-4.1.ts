type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if (user.age === undefined){
    return false;
  }

  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ ตัวของ age? ซึ่งก็คือ age สามารถที่จะมีหรือไม่มีก็ได้ ตัวประกาศมันไม่มี age ทำให้ค่ามันออกมาเป็น undefine 
