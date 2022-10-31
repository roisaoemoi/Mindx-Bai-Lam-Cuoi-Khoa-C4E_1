function load__light(){
    const lightElement = document.getElementById("narbar--menu__light");
    const narbarElement = document.getElementById("narbar--option__parent");
    const TenTruyenElement = document.getElementsByClassName('TenTruyen');
    const footer = document.getElementsByClassName('interviewleft--theLoai2');
    const footer2 = document.getElementsByClassName('interviewleft');
    const aElement = document.querySelector('a');
    if(document.body.style.backgroundColor=="rgb(235, 235, 235)")
    {
        document.body.style.backgroundColor = "rgb(24, 25, 26)";
        document.getElementById('narbar--option').style.backgroundColor = "rgb(36, 37, 38)";
        document.getElementById('narbar__option--hide').style.backgroundColor = "rgb(36, 37, 38)";
        aElement.style.color= "white";
        document.getElementById('narbar--menu__light').style.backgroundColor="white";
        narbarElement.style.background = "rgb(36, 37, 38)";
        for(let i = 0; i < TenTruyenElement.length;i++){
            TenTruyenElement[i].style.color = 'white';
        }
        for(let i = 0; i < footer.length;i++){
            footer[i].style.color = 'white';
        }
        for(let i = 0; i < footer2.length;i++){
            footer2[i].style.color = 'white';
        }
        return;
    }
    document.body.style.backgroundColor = "rgb(235, 235, 235)";
    document.getElementById('narbar--option').style.backgroundColor = "#f18121";
    document.getElementById('narbar__option--hide').style.backgroundColor = "#f18121";
    aElement.style.color= "white";
    narbarElement.style.backgroundColor = "#f18121";
    document.getElementById('narbar--menu__light').style.backgroundColor="#ebebeb";
    for(let i = 0; i < TenTruyenElement.length;i++){
        TenTruyenElement[i].style.color = 'black';
    }
    for(let i = 0; i < footer.length;i++){
        footer[i].style.color = 'black';
    }
    for(let i = 0; i < footer2.length;i++){
        footer2[i].style.color = 'black';
    }
};


/* Đoạn Trí Sửa */
//đoạn này code ấn vào button hiện ra thanh narbar--option và ẩn đi
let narbar__hide__option=document.getElementById("narbar--hide__option");
narbar__hide__option.addEventListener("click",function(){
    let narbar__option__hide=document.getElementById("narbar__option--hide");
    if(narbar__hide__option.classList=="narbar--hide__option narbar--hide--true__option")
    {
        narbar__hide__option.classList="narbar--hide__option narbar--hide--false__option";
        narbar__option__hide.style.display="flex";
        return;
    }
    narbar__hide__option.classList="narbar--hide__option narbar--hide--true__option";
    narbar__option__hide.style.display="none";
    return;
})



function responsive(){
    let width=window.screen.availWidth;
    if(width<369)
    {
        let narbar__menu=document.getElementsByClassName("narbar--menu__parent");
        narbar__menu= narbar__menu[0];
        narbar__menu.innerHTML=
        `<div class="narbar--menu">
            <div class="narbar--menuright">
                <div class="img">
                    <a href="./Htmlpr.html"><img src="https://st.truyenqqpro.com/template/frontend/images/logo.png" alt="logo"
                            class="img1"></a>
                </div>
                <div id="narbar--menu__light" onclick="load__light()">
                    <div class="narbar--menu__lighticon"><i class="fa-regular fa-lightbulb"></i></div>
                </div>
            </div>
        </div>
        <div class="narbar--menuleft">
            <a href="./login.html"><button class="narbar--menuleft__Dk">Đăng kí</button></a>
            <a href="./login.html"><button class="narbar--menuleft__Dn">Đăng nhập</button></a>
        </div>
        <div class="top_search" id="top_search">
            <input class="search" id="search_input" onclick="hide__topsearch()" onchange="hide__topsearch()" oninput="hide__topsearch()" placeholder="Bạn muốn tìm truyện gì">
            <button>
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <div class="search_result" id="search_result" >
                <ul id="top_search_result"></ul>
            </div>
        </div>
        `
    }
    else if(width<768)
    {
        let narbar__menu=document.getElementsByClassName("narbar--menu__parent");
        narbar__menu= narbar__menu[0];
        narbar__menu.innerHTML=
        `<div class="narbar--menu">
            <div class="narbar--menuright">
            <div class="img">
                <a href="./Htmlpr.html"><img src="https://st.truyenqqpro.com/template/frontend/images/logo.png" alt="logo"
                        class="img1"></a>
            </div>
            <div id="narbar--menu__light" onclick="load__light()">
                <div class="narbar--menu__lighticon"><i class="fa-regular fa-lightbulb"></i></div>
            </div>
            </div>
            <div class="narbar--menuleft">
                <a href="./login.html"><button class="narbar--menuleft__Dk">Đăng kí</button></a>
                <a href="./login.html"><button class="narbar--menuleft__Dn">Đăng nhập</button></a>
            </div>
            </div>
        <div class="top_search" id="top_search">
            <input class="search" id="search_input" onclick="hide__topsearch()" onchange="hide__topsearch()" oninput="hide__topsearch()" placeholder="Bạn muốn tìm truyện gì">
            <button>
                <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <div class="search_result" id="search_result" >
                <ul id="top_search_result"></ul>
            </div>
        </div>
        `
    }
    else {
        let narbar__menu=document.getElementsByClassName("narbar--menu__parent");
        narbar__menu= narbar__menu[0];
        narbar__menu.innerHTML=
        `<div class="narbar--menu">
            <div class="narbar--menuright">
                <div class="img">
                    <a href="./Htmlpr.html"><img src="https://st.truyenqqpro.com/template/frontend/images/logo.png" alt="logo"
                            class="img1"></a>
                </div>
                <div id="narbar--menu__light" onclick="load__light()">
                    <div class="narbar--menu__lighticon"><i class="fa-regular fa-lightbulb"></i></div>
                </div>
                <div class="top_search" id="top_search">
                    <input class="search" id="search_input" onclick="hide__topsearch()" onchange="hide__topsearch()" oninput="hide__topsearch()" placeholder="Bạn muốn tìm truyện gì">
                    <button>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                    <div class="search_result" id="search_result" >
                        <ul id="top_search_result"></ul>
                    </div>
                </div>
            </div>
            <div class="narbar--menuleft">
                <a href="./login.html"><button class="narbar--menuleft__Dk">Đăng kí</button></a>
                <a href="./login.html"><button class="narbar--menuleft__Dn">Đăng nhập</button></a>
            </div>
            </div>
        
        `
    }
}
/*Đến đây*/







