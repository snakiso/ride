let logoBlock = document.querySelector('.logoBlock');
let logoBlockTop = document.querySelector('.logoBlock__top')
let logoBlockBottom = document.querySelector('.logoBlock__bottom')
let contacts = document.querySelector('.contacts');
let logo = document.querySelector('.logo')
let tour = document.querySelector('.tour')
let tourItem = document.querySelectorAll('.tour__item')
let title = document.querySelectorAll('.title')
let arr = [logoBlock, contacts, tour]

for(let i = 0; i<arr.length; i++){
 arr[i].addEventListener('mouseover', () => {
  logoBlock.style.width = '120px'
  logoBlock.style.top = '1%'
  logoBlock.style.right = '1%'
  logoBlock.style.transform = 'translate(0,0)'
  logo.style.width = '100%'
  logoBlockTop.style.display = 'none'
  logoBlockBottom.style.display = 'none'
  tour.style.opacity = '1'
  contacts.style.opacity = '1'
 })
}
tour.addEventListener('mouseout', () => {
 logoBlock.style.width = '370px'
 logoBlock.style.top = '50%'
 logoBlock.style.right = '50%'
 logoBlock.style.transform = 'translate(50%,-50%)'
 logo.style.width = '100%'
 logoBlockTop.style.display = 'block'
 logoBlockBottom.style.display = 'block'
 tour.style.opacity = '0.3'
 contacts.style.opacity = '0'
})
tourItem[3].addEventListener('mouseover', () => {
 tourItem[3].style.width = '40%'
 title[3].style.padding = '20px 110px'
 contacts.style.opacity = '1'
})
contacts.addEventListener('mouseover', () => {
 tourItem[3].style.width = '40%'
 title[3].style.padding = '20px 110px'
 contacts.style.opacity = '1'
})
contacts.addEventListener('mouseout', () => {
 tourItem[3].style.width = '25%'
 title[3].style.padding = '20px 40px'
})
tourItem[3].addEventListener('mouseout', () => {
 tourItem[3].style.width = '25%'
 title[3].style.padding = '20px 40px'
})
logo.addEventListener('mouseover', () => {
 tourItem[3].style.width = '40%'
 title[3].style.padding = '20px 110px'
})