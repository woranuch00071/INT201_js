// const { template } = require('@babel/core')
// const memberManagement = require('./data/members.js')
// const { getMembers, findMember } = memberManagement()

import { memberManagement } from './data/members.js'
const { getMembers, findMember } = memberManagement()

//65130500070 Wanassanan Tri-apibanwongsa

function memberForm() {

  const addEventHandler = () => {
    const memberBtn = document.getElementById('member')
    memberBtn.addEventListener('click', memberHandler)
  }

  const memberHandler = () => {

    const p0 = document.createElement('p')
    const input = document.createElement('input')
    const btn = document.createElement('button')
    const searchMember = document.getElementById('searchMember')
    btn.addEventListener('click', searchHandler)

    searchMember.textContent = ''
    p0.textContent = 'Your Member Id:'
    input.setAttribute('id', 'memberId')
    btn.textContent = 'search'

    searchMember.appendChild(p0)
    searchMember.appendChild(input)
    searchMember.appendChild(btn)


  }

  const searchHandler = () => {

    const memberId = document.getElementById('memberId').value

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    const foundMember = document.getElementById('foundMember')

    foundMember.textContent = ''

    const member = findMember(parseInt(memberId))

    p1.textContent = `id:${member.id}`
    p2.textContent = `firstname:${member.firstname}`
    p3.textContent = `lastname:${member.lastname}`
    p4.textContent = `email:${member.email}`
    p5.textContent = `address:${member.address}`

    foundMember.appendChild(p1)
    foundMember.appendChild(p2)
    foundMember.appendChild(p3)
    foundMember.appendChild(p4)
    foundMember.appendChild(p5)

  }

  return {
    addEventHandler
  }
}
// module.exports = memberForm
const { addEventHandler } = memberForm()
addEventHandler()