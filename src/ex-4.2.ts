function processData(data: unknown): string {
  return data.toUpperCase();
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// Error ที่เกิดตอน Compile:
// 'data' is of type 'unknown' (ไม่สามารถเรียกใช้ .toUpperCase() กับตัวแปร type unknown ได้โดยตรง ต้องเช็กชนิดข้อมูลก่อน)
