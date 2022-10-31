let hiden__search=document.getElementById("hiden--search");


hiden__search.addEventListener("click",function(){
    if(hiden__search.innerHTML=="Ẩn khung tìm kiếm")
    {
        hiden__search.innerHTML="Hiện khung tìm kiếm";
        let show__search__request=document.getElementById("show__search--request");
        show__search__request.style.display="none";
    }
    else
    {
        hiden__search.innerHTML="Ẩn khung tìm kiếm";
        let show__search__request=document.getElementById("show__search--request");
        show__search__request.style.display="block";
    }
})


let genre_item=document.getElementsByClassName("genre-item");

for(let item of genre_item)
{
    
    item.addEventListener("click",function(){
        let icon_checkbox=item.getElementsByClassName("icon-checkbox");
        for(let i=0;i<icon_checkbox.length;i++)
        {
            if(icon_checkbox[i].classList=="icon-checkbox")
            {
                icon_checkbox[i].classList="icon-checkbox icon-tick";
            }
            else if(icon_checkbox[i].classList=="icon-checkbox icon-tick")
            {
                icon_checkbox[i].classList="icon-checkbox icon-cross";
            }
            else
            {
                icon_checkbox[i].classList="icon-checkbox";
            }
        }
    })
}



let search__request=document.getElementById("search--request");
search__request.addEventListener("click",function(){
    let results_request=[];
    let non_results_request=[];
    let results=[];
    let non_results=[];
    let show__search__request=document.getElementById("show__search--request");
    show__search__request.style.display="none";
    hiden__search.innerHTML="Hiện khung tìm kiếm";
    let icon_checkbox=document.getElementsByClassName("icon-checkbox icon-tick");
    for(let item of icon_checkbox)
    {
        results_request.push(item.nextSibling.innerHTML);
    }
    for(let i=0;i<comics.length;i++)
    {
        let search=comics[i].category.split(",");
        for(let item of search)
        {
            if(results_request.includes(item))
            {
                results.push(comics[i]);
                break;
            }
        }
    }
    icon_checkbox=document.getElementsByClassName("icon-checkbox icon-cross");
    for(let item of icon_checkbox)
    {
        non_results_request.push(item.nextSibling.innerHTML);
    }
    for(let i=0;i<results.length;i++)
    {
        let search=results[i].category.split(",");
        let check=0;
        for(let item of search)
        {
            if(non_results_request.includes(item))
            {
                check=1;
                break;
            }
        }
        if(check==0)
        {
            non_results.push(comics[i]);
        }
    }
    if(non_results.length==0)
    {
        let search_output=document.getElementById("search--ouput");
        search_output.innerHTML="";
        search_output.innerHTML=`<div class="warning-list box">Xin lỗi, không tìm thấy kết quả nào!!</div>`;
    }
    else
    {
        let search_output=document.getElementById("search--ouput");
        
        for(let item of non_results)
        {
            let tag=item.category.split(",");
            let list_tag=`
            <div class="list-tags">`
            for(let item of tag)
            {
                list_tag+=`<p class="blue">`+item+`</p>`;
            }
            list_tag+=`</div>`;
            let li=document.createElement("li");
            search_output.append(li);
            li.innerHTML=`
            <div class="book_avatar">
                <a href="`+item.link+`"><img class="center" src="`+item.avatar+`" alt="`+item.name+`"></a>                
                <div class="top-notice">
                    <span class="time-ago">`+item.time_ago+`</span>                    
                    <span style="display: inline;"class="type-label `+item.type_label+`">`+item.type_label+`</span>                
                </div>
            </div>
            <div class="book_info">
                <div class="book_name qtip" data-qtip="#truyen-tranh-13171">
                    <h3><a title="`+item.name+`" href="`+item.link+`">`+item.name+`</a></h3>
                </div>
                <div class="clear"></div>
                <div class="text_detail">
                    <span>
                        <i class="fa fa-bookmark"></i>87</span>
                    <span>
                        <i class="fa fa-eye"></i>2,509</span>
                </div>
                <div class="last_chapter">
                    <a href="#" title="Chapter `+item.chapnumber+`">Chapter 11</a>
                </div>
                <div class="more-info" id="truyen-tranh-13171" style="display:none;">
                    <div class="title-more">`+item.name+`</div>
                        <div class="title-more-other">Tên khác: `+item.othername+`</div>
                        <p class="info">Tình trạng: `+item.status+`</p>
                    <p class="info">Lượt xem: `+item.views+`</p>
                    <p class="info">Lượt theo dõi: `+item.follows+`</p>
                    `+list_tag+`
                    <div class="excerpt">`+item.intro+`</div>
                </div>
            </div>
            <div class="clear"></div>`
        }
    }
})

setInterval(function(){
    let type_label=document.getElementsByClassName("type-label");
    for(let item of type_label)
    {
        item.style.display="none";
        setTimeout(function(){
            item.style.display="inline";
        },500);
    }
},1000);



