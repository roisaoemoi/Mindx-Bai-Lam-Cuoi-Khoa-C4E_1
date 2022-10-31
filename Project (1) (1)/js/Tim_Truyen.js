function hide__topsearch(){
    let top_search_input=document.getElementById("search_input");
    let search_result=document.getElementById("search_result");
    let top_search_result=document.getElementById("top_search_result");
    top_search_result.innerHTML="";
    search_result.append(top_search_result);
    for(let item of comics)
    {
        let key="";
        key+=item.name.toUpperCase()+","+item.othername.toUpperCase()+","+item.category.toUpperCase();
        console.log();
        if(key.includes(top_search_input.value.toUpperCase()))
        {
            
            let li=document.createElement("li");
            let link=document.createElement("a");
            link.setAttribute("href",item.link);
            let search_avatar=document.createElement("div");
            search_avatar.setAttribute("class","search_avatar");
            let img=document.createElement("img");
            img.setAttribute("src",item.avatar);
            search_avatar.append(img);
            link.append(search_avatar);
            let search_info=document.createElement("div");
            search_info.setAttribute("class","search_info");
            let name=document.createElement("p");
            name.setAttribute("class","name");
            name.value=item.name;
            name.innerHTML=item.name;
            search_info.append(name);
            let name_other=document.createElement("p");
            name_other.setAttribute("class","name_other");
            name_other.value=item.othername;
            name_other.innerHTML=item.othername;
            search_info.append(name_other);
            let chuong=document.createElement("p");
            chuong.value="Chương "+item.chapnumber;
            chuong.innerHTML="Chương "+item.chapnumber;
            search_info.append(chuong);
            let clear=document.createElement("div");
            clear.setAttribute("class","clear");
            search_info.append(clear);
            link.append(search_info);
            li.append(link);
            top_search_result.append(li);
        }
    }
    setTimeout(function(){
        if(top_search_input.value!="")
        {
            search_result.style.display="block";
        }
        else
        {
            search_result.style.display="none";
        }
    },500);
}

function hidesearch()
{
    let search_result=document.getElementById("search_result");
    search_result.style.display="none";
}
