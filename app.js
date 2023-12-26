async function functionclicked(){
      
    let promise = fetch ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle')
       promise.then((res)=>{
        console.log(res);
        return res.json()

       }).then((data)=>{
        const heading = document.getElementById("heading")
        heading.innerHTML="Data is Fetched successfully"
        let listdata=""
        console.log(data);
        })
    }
    functionclicked();
    //     data.map((display)=>{
    //         // console.log(display.title);
    //         listdata +=`<li>${display.title}</li>`;
    //         console.log(listdata);
    //     })

        
    //     document.getElementById("item").innerHTML = listdata;
      
    //    }).catch((error)=>{
    //     document.write("Error cant fetch the data")
    //    })
    // }
    // const button = document.getElementById("btn")
    //    button.addEventListener("click", functionclicked);