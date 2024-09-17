let sider = document.querySelector('#sider_id');
let suderBtn = document.querySelector('#sider_btn_id');
let hamburger = document.querySelector('#hamburger');
let bool = true;
const getSider=()=>{
    bool = !bool;
    switch(bool){
        case false:
            sider.style.left = '0';
            break;
        case true:
            sider.style.left = 'left: -335px;';
            break;
    }
}

suderBtn.addEventListener('click', (e)=>{
    bool = !bool;
    switch(bool){
        case false:
            sider.style.left = '0';
            break;
        case true:
            sider.style.left = '-340px';
            break;
    }
})

let typed = new Typed('#element', {
    strings: ["Web Developer", "Backend Developer", "Frontend Developer", "Full-Stack Developer", "And i &#10084; it!"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });


  AOS.init();