let menu_btn = document.getElementsByClassName("header_icon")[0]
let menu = document.getElementsByClassName("menu")[0]
let menu_btn_icon = document.getElementsByClassName("fa fa-bars")[0]

menu_btn.addEventListener("click",()=>{
    if(menu_btn_icon.classList.contains("fa-bars")){
        menu.style.left = "0";
        menu_btn_icon.classList = "fa fa-times"
    }
    else{
        menu.style.left = "-256px";
        menu_btn_icon.classList = "fa fa-bars";
    }
    
}) 