console.clear();
console.log("run code here")
url="https://reqres.in/api/users?page=1"
url2="https://reqres.in/api/users?page=2"
let line1=document.getElementById('line1')
let line2=document.getElementById('line2')
let line3=document.getElementById('line3')
let line4=document.getElementById('line4')
const show_data=()=>
{
    fetch(url).then((response) =>
{ return response.json()
}
).then((data)=>
{
    str="";
    let i=0;
    for( i=0;i<3;i++)
    {
        str+="<td class=card><ul type='none'>";
        str+="<img src='"+data['data'][i]["avatar"]+"'>"
            str+="<li>"+data['data'][i]["id"]+"</li>"
            str+="<li>"+data['data'][i]["email"]+"</li>"
            str+="<li1>"+data['data'][i]["first_name"]+data['data'][i]["last_name"]+"</li1>"
         
        str+="</ul></td>"
    }
    let str2=""
    for( i=3;i<6;i++)
    {
        str2+="<td class=card><ul type='none'>";
            str2+="<img src='"+data['data'][i]["avatar"]+"'>"
            str2+="<li>"+data['data'][i]["id"]+"</li>"
            str2+="<li>"+data['data'][i]["email"]+"</li>"
            str2+="<li1>"+data['data'][i]["first_name"]+data['data'][i]["last_name"]+"</li1>"
        str2+="</ul></td>"
    }
    console.log(str);
    line1.innerHTML=str;
    line2.innerHTML=str2;
})
fetch(url2).then((response) =>
{ return response.json()
}
).then((data)=>
{
    str="";
    let i=0;
    for( i=0;i<3;i++)
    {
        str+="<td class=card><ul type='none'>";
        str+="<img src='"+data['data'][i]["avatar"]+"'>"
            str+="<li>"+data['data'][i]["id"]+"</li>"
            str+="<li>"+data['data'][i]["email"]+"</li>"
            str+="<li1>"+data['data'][i]["first_name"]+data['data'][i]["last_name"]+"</li1>"
         
        str+="</ul></td>"
    }
    let str2=""
    for( i=3;i<6;i++)
    {
        str2+="<td class=card><ul type='none'>";
            str2+="<img src='"+data['data'][i]["avatar"]+"'>"
            str2+="<li>"+data['data'][i]["id"]+"</li>"
            str2+="<li>"+data['data'][i]["email"]+"</li>"
            str2+="<li1>"+data['data'][i]["first_name"]+data['data'][i]["last_name"]+"</li1>"
        str2+="</ul></td>"
    }
    console.log(str);
    line3.innerHTML=str;
    line4.innerHTML=str2;
})

}

//json->json->array->json
//id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},