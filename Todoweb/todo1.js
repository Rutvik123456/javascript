  let tasklist = [];

        

function addAction(){

    let inputtxt = document.querySelector('.taskvalue');
    let dttxt = document.querySelector('.dtvalue');

    if (inputtxt.value==='' || dttxt.value===''){
        alert('please fill both the inputs');
        return;
    }
    tasklist.push({
        task : inputtxt.value,
        dt : dttxt.value
            });
        
        inputtxt.value = '';  
        dttxt.value = ''; 
        Displayitem()
    }

  
  function  Displayitem(){
     let newhtml = '' ;
        for (let i=0 ;i<tasklist.length;i++){
                
         newhtml += `
         
        <span>${tasklist[i].task}</span>
       <span>${tasklist[i].dt}</span>
        <button class="dlbut" onclick="delaction(${i})">Delete</button>
        
        `;         
        }
       let paragraph = document.querySelector('.container');       
         paragraph.innerHTML =  newhtml ; 
}

 function delaction(index){
        tasklist.splice(index,1);
        Displayitem();

    }  
