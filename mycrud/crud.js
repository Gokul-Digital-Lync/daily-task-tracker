var selectedRow=null;
function onformsubmit(){
    event.preventDefault();
    
    var formdata=readformData();
    if(selectedRow == null){
        insertNewRecord(formdata);
        resetform();
    }
      else {
        update(formdata);
        resetform();
      }
}
function readformData(){
    var formdata=[];
    formdata["fullname"]=document.getElementById("fullname").value;
    formdata["empcode"]=document.getElementById("empcode").value;
    formdata["salary"]=document.getElementById("salary").value;
    formdata["city"]=document.getElementById("city").value;
    formdata["bloodGroup"]=document.getElementById("bloodGroup").value;
    formdata["timestamp"]=Date();
    return formdata;
}
function insertNewRecord(data){
var table =document.getElementById("employeeList").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML =data.fullname;

cell2 = newRow.insertCell(1); 
cell2.innerHTML =data.empcode;

cell3 = newRow.insertCell(2);
cell3.innerHTML =data.salary;

cell4 = newRow.insertCell(3);
cell4.innerHTML =data.city;

cell5=newRow.insertCell(4);
cell5.innerHTML=data.bloodGroup;

cell6=newRow.insertCell(5);
cell6.innerHTML=data.timestamp;
cell6 = newRow.insertCell(6);
cell6.innerHTML =`<button onClick="onedit(this)">Edit</button>
                   <button onClick="ondelete(this)">Delete</button>`;        
}
 
function resetform(){
 document.getElementById("fullname").value="";   
 document.getElementById("empcode").value="";   
 document.getElementById("salary").value="";   
 document.getElementById("city").value="";   
 document.getElementById("bloodGroup").value="";
 document.getElementById("timestamp").value="";

selectedRow = null;
} 

function onedit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value= selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value=selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value=selectedRow.cells[2].innerHTML;
    document.getElementById("city").value=selectedRow.cells[3].innerHTML;
    document.getElementById("bloodGroup").value=selectedRow.cells[4].innerHTML;
    // document.getElementById("timestamp").value=selectedRow.cells[5].innerHTML;

}

function update(formdata){
    selectedRow.cells[0].innerHTML=formdata.fullname;
    selectedRow.cells[1].innerHTML=formdata.empcode;
    selectedRow.cells[2].innerHTML=formdata.salary;
    selectedRow.cells[3].innerHTML=formdata.city;
    selectedRow.cells[4].innerHTML=formdata.bloodGroup;
    selectedRow.cells[5].innerHTML=formdata.Date();

}

function ondelete(td){
    if(confirm('Are u sure to delete this row from table ')){
        row=td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
     resetform();        
    }else{
        alert(' no data is deleted ');
    }
}

