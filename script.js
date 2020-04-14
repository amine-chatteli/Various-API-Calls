

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

////////////////////////////////////
$('#loadData').click(function(){
    var html=''
  var url='https://spreadsheets.google.com/feeds/list/15q2PqaCJJwoFwr9xuQRIIeTWbKFz3ZZZLWuhkigZZs4/od6/public/values?alt=json';
  $.getJSON(url,function(data){
    var info=data.feed.entry
      var arr =[]
      for (let key in info){
          var obj={'first name':info[key].gsx$first.$t,'last name: ':info[key].gsx$last.$t,
        'Company: ': info[key].gsx$company.$t,'Group: ':info[key].gsx$group.$t}
        arr.push(obj)
      }
      console.log(arr);
      
      let table = document.querySelector("table");
      console.log(arr);
      try{let heads = Object.keys(arr[0]);
        generateTableHead(table, heads);
        generateTable(table, arr);}
      catch{
           console.error('empty');
         
      }
     
  })
    
}) 
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  $('#myForm2').submit(function(e){
      e.preventDefault()
      console.log('yep');
      var myData=$('#myForm2 :input').serialize();
      console.log(myData);
      $.ajax({
          url:'https://script.google.com/macros/s/AKfycbxoofAGITClJP7-yzyZh5zoM5XCOVfZ28fDvkvQojfcLplihdx6/exec',
         method:'POST',
         data:myData,
         success:function(data){
             console.log(data);
             
         }

        })
  })

  document.getElementById('fill').addEventListener('click',function(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data.results[0]);
            
          document.querySelector('input[name="first2"]').value= data.results[0].name.first;
          document.querySelector('input[name="last2"]').value=data.results[0].name.last;
          document.querySelector('input[name="company2"]').value=data.results[0].location.city;
          document.querySelector('input[name="group2"]').value=data.results[0].phone
        }
      });
  })