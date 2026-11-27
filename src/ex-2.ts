/*ให้เขียนโค้ด TypeScript ตามโจทย์ที่กำหนดดังนี้

ให้ประกาศฟังก์ชันชื่อว่า sumEvenNumbers ในรูปแบบ Function Declaration
ฟังก์ชันรับ parameter 1 ตัวคือ numbers ซึ่งเป็น array ของ number
ฟังก์ชันจะ return ผลรวมของตัวเลขทั้งหมดใน array ที่เป็นเลขคู่เท่านั้น
เมื่อรัน Complie และรันโค้ดแล้วจะได้ผลลัพธ์แบบนี้*/

function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  let sum = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
