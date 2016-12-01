


var value = document.querySelector('#search').value;
console.log(value);

 $.getJSON(‘select.json’, function(data) {
        var output="<ul>";
        for (var i in data.ResponseHeader) {
            output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "–" + data.users[i].joined.month+"</li>";
        }

        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
  });