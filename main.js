let table = document.getElementById("tabela");

let stop = setInterval(()=>{
    
    $.get( "processa.php", function(data) {
        table.innerHTML = "<th>Nome</th><th>Idade</th>";
        let vv = JSON.parse(data);
        let n = vv.length;
        for(let i=0;i<n;i++){
            table.innerHTML += "<tr><td>"+vv[i].nome+"</td><td>"+vv[i].idade+"</td></tr>";
        }
    });
},1000);