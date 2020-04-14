//----------------------------------JSON AJAX API TUTORIAL ----------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------

/*var obj={
  friends:[
    {"firstname":"Amine",
    "lastname":"chatteli",
     
     "skills":"frontend develper"
    },
    {"firstname":"Brown",
    "lastname":"Graphics",
     
     "skills":"Graphic Designer"
    },
    {"firstname":"Amine",
    "lastname":"krifi",
     
     "skills":"Spring boot developper"
    }
  ]
}
var display='';

var friends=obj.friends
for(x in friends){
display+=(Number(x)+1)+ '---'+'First Name: '+friends[x].firstname+"<br>"
+'Last Name: '+obj.friends[x].lastname+'<br>'
+'Adress: '+friends[x].skills+'<br>';

}
obj.friends.splice(1,1,{
    "firstname":"Amine",
    "lastname":"mbarek",
     
     "skills":"chayech"

})
obj.friends.forEach(item=>{
    display+=item.firstname+'<br>'
    +item.lastname+'<br>'+
    item.skills+'<br>';
});
document.querySelector('p').innerHTML=display;
 var data=JSON.parse('{"results":[{"gender":"male","name":{"title":"Mr","first":"Oscar","last":"Johansen"},"location":{"street":{"number":6218,"name":"Hærvejen"},"city":"Haslev","state":"Midtjylland","country":"Denmark","postcode":50946,"coordinates":{"latitude":"-35.7616","longitude":"-141.9565"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"oscar.johansen@example.com","login":{"uuid":"b4d95467-b5c1-4341-ae58-bcdacb6edaaa","username":"greenlion767","password":"tight","salt":"RuWhpsgM","md5":"6c10e2d63d15af8ddc6d4c5b65c95ceb","sha1":"1dbe4db6d32fd9ba210becf3183601c5ac146f58","sha256":"18bcec23b8d37df9f66e17ddf19308f857de4272c80ded1362830e560ca31542"},"dob":{"date":"1987-05-06T16:47:14.247Z","age":33},"registered":{"date":"2017-01-27T05:38:48.357Z","age":3},"phone":"77388666","cell":"35141756","id":{"name":"CPR","value":"060587-5862"},"picture":{"large":"https://randomuser.me/api/portraits/men/65.jpg","medium":"https://randomuser.me/api/portraits/med/men/65.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/65.jpg"},"nat":"DK"}],"info":{"seed":"9686ba7978cff0ea","results":1,"page":1,"version":"1.3"}}');
 var person=data.results[0]
 var output=person.name.first+'<br>'+person.name.last+'<br>'+`<img src=${person.picture.thumbnail}>`;

document.querySelector('body').innerHTML=output 
var data=''
window.onload=function(){
    if(sessionStorage['Person']){
         data =this.JSON.parse(sessionStorage["Person"])
        var message ='<h1>Hello '+data.first+' '+data.last+'!'
        this.document.querySelector('body').innerHTML=message;
    }else{
        this.document.querySelector('message').innerHTML='<h1>Hello new guy! tell me your name!</h1>'
    }
    
}

var button=document.querySelector('input[type="submit"]')
var form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    var data=submitForm(form)
    sessionStorage["Person"]=JSON.stringify(data);
    
})
function submitForm(form){
var inputs=document.querySelectorAll('input[type="text"]')
console.log(inputs);
var person={};
for (var x=0;x<inputs.length;x++){
    person[inputs[x].name]=inputs[x].value
}
return person

}
*/
//---------------------------------JSON EXERCICE BUILDING CHECKLIST---------------------------------------------------------
//----------------------------------MY ATTEMPT----------------------------------------------------------------------
/*var dataJSON= [
    {"info":"clean house","status":true},
    {"info":"clean room","status":false},
    {"info":"wash hands","status":true},
    {"info":"shower","status":false},
    {"info":"get money","status":true}
  ]

var html=''
var index=-1;
dataJSON.forEach(item=>{
    index++
    var status;
 item.status? status='checked':status='';
html+='<li>'+item.info+`<input type="checkbox" data-id="${index}"${status}></li>`
})
document.querySelector('ul').innerHTML=html;

var checks=document.querySelectorAll('input[type="checkbox"]')
checks.forEach(item=>{
    console.log(item);
    
    item.addEventListener('change',updateStatus)
})
 function updateStatus(){
 var index=event.target.dataset.id;
dataJSON[index].status=event.target.checked;
 }

 document.querySelector('form').addEventListener('submit',addTask)
 function addTask(){
     event.preventDefault()
     var task=document.querySelector('input[type="text"]').value
dataJSON.push({"info":task,"status":false}) ;  
 }
    */




    //--------------------------------------JSON EXERCICE CORRECTION --------------------------------------------------------

var dataJSON;
var output =document.getElementById('output');
var tasklist=document.querySelector('#taskList')






document.getElementById('myForm').addEventListener('submit',function(e){
    e.preventDefault();
    var tempValue= document.querySelector('input[type="text"]').value
    addNewItem({"info":tempValue,"status":false})
})

function addNewItem(data){
    addCheckBoxes(data,dataJSON.length)
    //tasklist.innerHTML+='<li>'+data.info+`<input type="checkbox" value="${dataJSON.length}" "${status}"> </li>`
    dataJSON.push(data)
    sessionStorage['task']=JSON.stringify(dataJSON)

}
function addCheckBoxes(data,key){
var li=document.createElement('li');
var checkbox=document.createElement('input');
checkbox.type='checkbox';
checkbox.value=key;
checkbox.checked=data.status;
var span=document.createElement('span')
span.innerHTML='X'
checkbox.setAttribute('onchange','updateJson()')
li.appendChild(document.createTextNode(data.info))
li.appendChild(checkbox)
li.appendChild(span)
document.querySelector('#taskList').appendChild(li)
span.addEventListener('click',remove)
}
function remove(data){
   var index= event.target.previousSibling.value;
   dataJSON.splice(index,1)
    document.getElementById('taskList').innerHTML="";
  buildCheckboxes(dataJSON);
  sessionStorage['task']=JSON.stringify(dataJSON)

    
}

window.onload=function(){
    if(sessionStorage['task']!=null){
        dataJSON=this.JSON.parse(sessionStorage['task']);
    }else{
         dataJSON= [
            {"info":"clean house","status":true},
            {"info":"clean room","status":false},
            {"info":"wash hands","status":true},
            {"info":"shower","status":false},
            {"info":"get money","status":true}
          ]
    }
    buildCheckboxes(dataJSON)
}

function buildCheckboxes(data){
    for(var key in data){
        addCheckBoxes(data[key],key)
       /* var status =data[key].status?'checked':'';
        var html ='<li>'+data[key].info+`<input type="checkbox" value="${key}" "${status}"> </li>`
        tasklist.innerHTML+=html*/
   // }
   // addevents()
//}
  

/*function addevents(){
    var checkboxes=document.querySelectorAll('input[type="checkbox"]')
    for(var index in checkboxes){
        checkboxes[index].onchange=updateJson;
    }
*/}}

function updateJson(){
    var key=event.target.value;
    console.log(key);
    
    dataJSON[key].status=event.target.checked
    sessionStorage['task']=JSON.stringify(dataJSON)
}

//-----------------------------------------AJAX AJAX AJAX AJAX AJAX AJAX-------------------------------------------------

//GET DATA FROM API 

var output =document.getElementById('output2');
var button=document.querySelector('input[type="button"]')
button.addEventListener('click',function(){
    loadAjax()
})
function loadAjax(){
    var dataAJAX=''
    var ajax=new XMLHttpRequest();
    ajax.open('GET','https://randomuser.me/api',true)
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){
             data=ajax.responseText;
             dataAJAX=JSON.parse(data)
             console.log(dataAJAX);
             
 var name=document.createTextNode(dataAJAX.results[0].name.first);
 var gender =document.createTextNode(dataAJAX.results[0].gender);
var image=document.createElement('img')
image.src=dataAJAX.results[0].picture.medium
output.appendChild(name);
output.appendChild(gender);
output.appendChild(image);

 console.log(name,gender);
 
        }  
    }
    ajax.send()
   
}


//READ FROM FILE-----------------
document.querySelector('#button3').addEventListener('click',dataFromFile);

function dataFromFile(){
    ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4&&ajax.status===200){
            var AJAXdata=JSON.parse(ajax.responseText);
            
            document.getElementById('output3').innerHTML='<h4 style="color:red">'+AJAXdata[0]+'!!!!!!</h4>';
        }
    }
    ajax.open('GET','file.txt',true)

    ajax.send();

}

// LOAD FROM CHUCK NORRIS JOKES API
document.querySelector('#button4').addEventListener('click',chuckNorris);
function chuckNorris(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4&&ajax.status===200){
            var AJAXdata=JSON.parse(this.responseText)
            var html='<h5 style="color:green">Created at: '+AJAXdata.created_at+'</h5><h5 style="color:green">JOKE: </h5>'+
            '<p style="font-size:20px">'+AJAXdata.value+'</p>'+`<img src="${AJAXdata.icon_url}">`

            document.getElementById('output4').innerHTML=html
        }
    }
    ajax.open('GET','https://api.chucknorris.io/jokes/random',true);
    ajax.send();
}
//READ FROM CHUCK NORRIS USING FETCH-----------------

document.querySelector('#button5').addEventListener('click',fetcher);
function fetcher(){
    var url='https://api.chucknorris.io/jokes/random';
    fetch(url).then(response=>
       response.json()).then(json=>{
           console.log(json.created_at);
           
           var html='<h5 style="color:green">Created at: '+json.created_at+'</h5><h5 style="color:green">JOKE: </h5>'+
           '<p style="font-size:20px">'+json.value+'</p>'+`<img src="${json.icon_url}">`

           document.getElementById('output5').innerHTML=html
        })
    
    }
    
    // SEND DATA USING FETCH POST
    var form=document.getElementById('form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        loadJSON(formData(form))        
    })
    function formData(form){
        var inputs=form.querySelectorAll('input[type="text"]');
        var myData=''
        for (var i=0;i<inputs.length;i++){
            var name=inputs[i].name;
           var value=inputs[i].value;
           myData+= name+'='+value+'&';
            
        }
        return myData.slice(0,-1);
    }
    function loadJSON(data){
        const url='http://s179017901.onlinehome.us/discoveryvip/';
        console.log(data);
        
        const myData=data;
        fetch(url,{
            method:'post',
            headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"}, 
            body:myData
        })
        .then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data);
        }).catch(error=>console.log(error)
        )

    }

    //--------------------------------------------JQUERY JQUERY JQUERY JQUERY--------------------------------------------------
  
    $('#button6').click(webData)

    // SHORTHAND FOR THE NEXT OPTION USING $AJAX
    function webData(){
        var url= 'https://jsonplaceholder.typicode.com/posts/1'
        $.get(url,output);
        function output(data){
            $('#output6').html('<h2>'+data.title +'</h2>'+'<p>'+data.body +'</p>')
        }}


    
       /* $.ajax({
            url:'https://jsonplaceholder.typicode.com/posts/1',
            success:display,
           
        })
        
        function display(data,status,xhr){
            $('#output6').html('<h2>'+data.title +'</h2>'+'<p>'+data.body +'</p>')
            console.log(status);
            console.log(xhr);
        }
        */
     //  ------------------------POST AJAX JQUERY-----------------

     $('#myform').submit(function(e){
         e.preventDefault();
         var first= $('#first').val()
         var last= $('#last').val();
         const url='http://s179017901.onlinehome.us/discoveryvip/';
        $.post(url,{first_name:first,last_name:last})
         .done(function(data){
             console.log(data );
             
         })
     })

