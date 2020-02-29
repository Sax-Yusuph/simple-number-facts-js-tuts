const num = document.querySelector('#numInput');
const output = document.querySelector('#result');
const fact = document.querySelector('#numberFact');


num.addEventListener('input', getFact);


async function getFact(){
    let numvalue = num.value;
    const serverResponse= await fetch(`http://numbersapi.com/${numvalue}`);
    const responseData = await serverResponse.text();

    if(numvalue!=''){
        output.style.display= 'block'
        fact.innerText = responseData;
    }


        // fetch(`http://numbersapi.com/${numvalue}`);
        // .then(response => response.text())
        // .then(data =>{
        //     if((res.status= 'ok') &&(numvalue != '')){
        //         output.style.display= 'block'
        //         fact.innerText = data;
        //     }else{
        //         output.style.display= 'block'
        //         fact.innerText = "unable to fetch result, internet required";
        //     }
        // })
        
}


