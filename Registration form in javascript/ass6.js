function validateform() {
    var x = document.forms["f1"]["Name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y= document.forms["f1"]["Father's Name"].value;
    if(y=="")
    {
        alert("Father's Name must be filled out");
        return false;
    }
    var z=document.forms["f1"]["num"].value;
    if(z.length<10 || z.length>10)
    {
        alert("Number must be of 10 digits");
        return false;
    }
    if(isNaN(z)||z.indexOf(" ")!=-1)
           {
              alert("Enter numeric value")
              return false; 
           }
           
     var a = document.forms["f1"]["email"].value;
        var atpos = a.indexOf("@");
        var dotpos = a.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=a.length) {
            alert("Enter a valid Email Address");
             return false;
        }
        var w=document.forms["f1"]["pass"].value;
        var q=document.forms["f1"]["confirm"].value;
        if(w!=q)
        {
            alert("Password does not match")
            return false;
        }

}