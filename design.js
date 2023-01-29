function calc()
        {
            var m1=Number(document.getElementById("mark1").value);
            var m2=Number(document.getElementById("mark2").value);
            var m3=Number(document.getElementById("mark3").value);
            var m4=Number(document.getElementById("mark4").value);
            var m5=Number(document.getElementById("mark5").value);
            var total=m1+m2+m3+m4+m5;
            var average=Math.round(total/5);
            document.getElementById("total").value=total;
            document.getElementById("avg").value=average;
        }

        const btnsubmit=document.getElementById("btnsubmit");
        btnsubmit.onclick = function click()
        {
            var row=document.getElementById("table").insertRow(-1);
            var reg_col=row.insertCell(0);
            var name_col=row.insertCell(1);
            var m1_col=row.insertCell(2);
            var m2_col=row.insertCell(3);
            var m3_col=row.insertCell(4);
            var m4_col=row.insertCell(5);
            var m5_col=row.insertCell(6);

            reg_col.innerHTML=document.getElementById("regno").value;
            name_col.innerHTML=document.getElementById("name").value;
            m1_col.innerHTML=document.getElementById("mark1").value;
            m2_col.innerHTML=document.getElementById("mark2").value;
            m3_col.innerHTML=document.getElementById("mark3").value;
            m4_col.innerHTML=document.getElementById("mark4").value;
            m5_col.innerHTML=document.getElementById("mark5").value;

            document.getElementById("regno").value="";
            document.getElementById("name").value="";
            document.getElementById("mark1").value="";
            document.getElementById("mark2").value="";
            document.getElementById("mark3").value="";
            document.getElementById("mark4").value="";
            document.getElementById("mark5").value="";

            return false;

        }
        document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}