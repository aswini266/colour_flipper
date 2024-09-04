const button=document.getElementById("btn")
const colortext=document.getElementById("color")
const wrapper=document.getElementById("wrap")
const hi=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click',function(){
    let hicolor='#'
    for(let i=0;i<6;i++){
        hicolor+=ranval()
    }    
    wrapper.style.backgroundColor=hicolor
    colortext.innerHTML=hicolor
})
function ranval(){
    let v=Math.floor(Math.random() * 16)
    return hi[v]
}