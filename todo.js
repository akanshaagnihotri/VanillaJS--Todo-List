 
    var a = [];

    function addnames() {
        var entry = document.getElementById("abc").value;
        a.push(entry);
        write_letters();
    }

    function write_letters() {
        var letters = "";

        for (var i = 0; i < a.length; i++) {

            letters += "<li onclick= deleteitem("+i+")>" + a[i] + "</li>";
        }

        document.getElementById("itemList").innerHTML = letters;
    }

    function deleteitem(i)
    {
    	
    	var l1 = a.slice(0,i);
    	var l2 = a.slice(i+1,(a.length)+1);
    
    	for (var i=0;i<l2.length;i++){
    		l1.push(l2[i]);
    	}
    	a = l1;
        write_letters();
       
    }
    