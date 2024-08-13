
 var cl=console.log;    

var postsArr=[
   {
header:"school annual planning",
body:"on 26th of dec we going tomplan an annual day ,that day we are going to celebrate the 10th standards students togetherness w",
footer:"",

},
{
 header:"school  day fucntion planning",
body:"on 26th of dec we going tomplan an annual day ,that day we are goitudents togetherness with us from the beginning",
 footer:"",
    
    },
    
    {
header:"school annual day fucntion planning",
body:"on 26th of dec we going tomplan an annual day , students togetherness with us ",
footer:"",
        
        },
        
        
        {
header:"school annual day fucntion planning that brings happiness on our faces",
body:"on 26th of dec we going tomplan an ",
 footer:"",
            
            },
             {
               header:"school annual day fucntion planning",
               body:"on 26th of dec we going tomplan an annual to celebrate the 10th standards students togetherness with us from the beginning",
               footer:"",
               
               },
               {
                  header:"school annual day fucntion planning",
                  body:"on 26th of dec we going tomplan an annual day ,that day we are going to celebrate the 10th standards students togetherness with us from the beginning",
                  footer:"",
                  
                  },
                  {
                     header:"school annual day fucntion planning",
                     body:"on  celebrate the 10th standards students togetherness with us from the beginning",
                     footer:"",
                     
                     },
                                                             
        

]
// cl(cardarray);

const postscontainer=document.getElementById("postscontainer")


let result='';
for(let i=0; i<postsArr.length;i++){
//i>>>index number
result+= `
<div class="col-md-4 mb-3">
    <div class="card h-100">
        <div class="card-header">
            <h2 title="${postsArr[i].header}" class="m-0 text-capitalize ">${postsArr[i].header}</h2>
        </div>
        <div class="card-body">
          
        <p>
       ${postsArr[i].body}
        </p>


        </div>
        <div class="card-footer d-flex justify-content-between">

            <button class="btn btn-primary text-capitalize">edit </button >
            <button class="btn btn-danger text-capitalize">delete </button>

        </div>
    </div>
</div>

`


}

postscontainer.innerHTML=result;

















