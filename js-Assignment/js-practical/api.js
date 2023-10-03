fetch('https://fakestoreapi.com/products/1')
            .then((res)=>{
             return res.json()})
            .then((djs)=>{
              var data="";
              const newarr = djs.map((dj)=>{

               data =
                `<tr>
            <td>${dj.id}</td>
            <td>${dj.title}</td>
            <td>${dj.price}</td>
        </tr>`
              })
              document.getElementById("data").innerHTML = data;

            })