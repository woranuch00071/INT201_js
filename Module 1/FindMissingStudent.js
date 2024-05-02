//Write a JavaScript function named findMissingStudent that takes an array of checkinStudentIds as
// input and returns an array of missing student objects. If all students have checked in, the function should return an empty array.
//เขียนฟังก์ชัน JavaScript ชื่อ findMissingStudent ซึ่งรับอาร์เรย์ของ checkinStudentIds เป็น
// อินพุตและส่งกลับอาร์เรย์ของวัตถุนักเรียนที่หายไป หากนักเรียนทุกคนเช็คอินแล้ว ฟังก์ชันควรส่งคืนอาร์เรย์ว่าง
function findMissingStudent(checkinStudentId) {
    let students = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "David" },
      { id: 5, name: "Eva" },
      { id: 6, name: "Fiona" },
      { id: 7, name: "George" },
      { id: 8, name: "Hannah" },
      { id: 9, name: "Ian" },
      { id: 10, name: "Jenny" }
    ];
  
    let missingStudents = [] // เก็บนักเรียนที่หายไป ถ้าไม่มีจะส่วคืนเป็น[]
  
    students.forEach(student => { // นักเรียนทุกคนที่อยู่ใน students ที่เก็บไว้ ทำการวนลูป และเช็คว่า student.id มีอยู่ใน checkinStudentId หรือไม่ ทำได้อีกแแบ for (let student of students)
      if (!checkinStudentId.includes(student.id)) {
        missingStudents.push(student)
      }
    })
  
    return missingStudents;
  }
  
  let checkinStudentId = [10, 8, 2, 3, 5, 6];
  let missingStudents = findMissingStudent(checkinStudentId);
  console.log(missingStudents);
  