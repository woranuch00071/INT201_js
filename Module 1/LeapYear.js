//Every year that is exactly divisible by four is a leap year, 
//except for years that are exactly divisible by 100. For example, the years 1904, 1908, and 2024 are leap years according to this rule.
//But these centurial years (years divisible by 100) are leap years if they are exactly divisible by 400.
// For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.
//ทุกปีที่หารด้วยสี่ลงตัวพอดีจะเป็นปีอธิกสุรทิน ยกเว้นปีที่หารด้วย 100 ลงตัวพอดี เช่น ปี 1904, 1908 และ 2024 ถือเป็นปีอธิกสุรทินตามกฎนี้
//แต่ปีศตวรรษเหล่านี้ (ปีที่หารด้วย 100 ลงตัว) ถือเป็นปีอธิกสุรทินหากหารด้วย 400 ลงตัวพอดี เช่น ปี 1700, 1800 และ 1900 ไม่ใช่ปีอธิกสุรทิน 
//แต่ปี 1600 และ 2000 ถือเป็นปีอธิกสุรทินตามกฎนี้ .
function isLeapYear(year) {
    if (year % 4 === 0) {   // %  โมดูลัส หาค่าเศษจากหาร  ถ้าหาร 4 ลงตัว เป็น Leapyear
      if (year % 100 === 0) { // ถ้าหาร 100 ลงตัว จะไม่ใช่ แต่เมื่อหาร 400 ลงตัวจะเป็น leapyear
        if (year % 400 === 0) { 
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    } else {
      return false
    }
  }

console.log(isLeapYear(2020))
console.log(isLeapYear(1900))
console.log(isLeapYear(2000))
console.log(isLeapYear(2021))

