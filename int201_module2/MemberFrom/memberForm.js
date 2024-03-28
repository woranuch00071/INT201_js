import { memberManagement } from './data/members.js'
const { getMembers, findMember } = memberManagement()

//your student id, firstname, and lastname here
function memberForm() {
  const addEventHandler = () => {
    const btnMember = document.getElementById('member')
    btnMember.addEventListener('click', memberHandler)
  }

  const memberHandler = () => {
   const divSearch = document.getElementById('searchMember')
   divSearch.textContent = ''
   
   const p0 = document.createElement('p')
   const input = document.createElement('input')
   const btnSearch = document.createElement('button')

   p0.textContent='Your Member Id:'
   input.setAttribute('id', 'memberId')
   //input.id='memberId'
   btnSearch.textContent = 'search'
    
   divSearch.appendChild(p0)
   divSearch.appendChild(input)
   divSearch.appendChild(btnSearch)

   btnSearch.addEventListener('click',searchHandler)


  }

  const searchHandler = () => {
    const inputBox = document.getElementById('memberId')
    const id = parseInt(inputBox.value) // ที่ยูสเซอร์ใส่เข้ามาในช่องอินพุต
    
    // console.log(id)
    
    const thatMember = findMember(id) // ข้อมูลของคนที่เราเจอ เช่น 4 ซานต้า โฮ่งๆ บลาๆ
    console.log(thatMember);

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')

    p1.textContent = `id: ${thatMember.id}`
    p2.textContent = `firstname: ${thatMember.firstname}`
    p3.textContent = `lastname: ${thatMember.lastname}`
    p4.textContent = `email: ${thatMember.email}`
    p5.textContent = `address: ${thatMember.address}`
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    console.log(p5)

    const divFoundMem = document.getElementById('foundMember')
    divFoundMem.textContent =""
    divFoundMem.appendChild(p1)
    divFoundMem.appendChild(p2)
    divFoundMem.appendChild(p3)
    divFoundMem.appendChild(p4)
    divFoundMem.appendChild(p5)
    
    
    inputBox.value = ''
   
  }

  return {
    addEventHandler
  }
}

const { addEventHandler } = memberForm()
addEventHandler()