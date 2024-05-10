import './App.css';



  const card1=[
  
    {
      class:"fa-solid fa-check fa-xs ",
      content:"Single User"
    },
    {
    class:"fa-solid fa-check fa-xs ",
    content:"50GB storage"
  },
  {
    class:"fa-solid fa-check fa-xs ",
    content:"50GB storage"
  },
  {
    class:"fa-solid fa-check fa-xs ",
    content:"Unlimited Public Projects"
  },
  {
    class:"fa-solid fa-check fa-xs ",
    content:"Community access"
  }]
  const cardd1=[
  {
    class:"fa-solid fa-xmark fa-xs",
    content:"Unlimited Private Projects"
  },
  {
    class:"fa-solid fa-xmark fa-xs",
    content:"Dedicated Phone Support"
  },
  {
    class:"fa-solid fa-xmark fa-xs",
    content:"Free Subdomain"
  },
  {
    class:"fa-solid fa-xmark fa-xs ",
    content:"Monthly status Reports"
  }]
  const card2=[
    {
      class:"fa-solid fa-check fa-xs",
      content:"5 Users"
    },
    {
    class:"fa-solid fa-check fa-xs",
    content:"50GB storage"
  },
  {
   class:"fa-solid fa-check fa-xs",
    content:"Unlimited Public Projects"
  },
  {
  class:"fa-solid fa-check fa-xs",
    content:"Community access"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Unlimited Private Projects"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Dedicated Phone Support"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Free Subdomain"
  }]
  const cardd2=[
  {
    class:"fa-solid fa-xmark fa-xs",
    content:"Monthly status Reports"
  }]
  const card3=[
  
    {
       class:"fa-solid fa-check fa-xs",
      content:"Unlimited Users"
    },
    {
    class:"fa-solid fa-check fa-xs",
    content:"50GB storage"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Unlimited Public Projects"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Community access"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Unlimited Private Projects"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Dedicated Phone Support"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Free Subdomain"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Monthly status Reports"
  },
  {
    class:"fa-solid fa-check fa-xs",
    content:"Monthly status Reports"
  }
]
   

   
  function App() {
  return (
    <div className="App">
     <div className="card" style={{width: "18rem"}}>
     <div className="card-body">
    <p className="text-muted" style={{fontsize:"10px"}}>FREE</p>
    <h3 className="card-title">$0/month</h3>
     { card1.map((car) => (
              <Card1  icon={car.class} content={car.content}  />
            ))}

          {cardd1.map((cardds1)=>(<Card1 icon1={cardds1.class} content1={cardds1.content}/>
        ))}
            
      <div class="d-grid gap-2">
  <button class="btn btn-secondary" type="button">Button</button>
  
</div>
</div>
    </div>  

    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
    <p className="text-muted" style={{fontsize:"10px"}}>PRO</p>
    <h3 className="card-title">$49/month</h3>
      {card2.map((car1)=>(
        <Card2 icon2={car1.class} content2={car1.content} />
      ))}
      {cardd2.map((carr1)=>(<Card2 icon3={carr1.class} content3={carr1.content}/>))}
      <br/>
      <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  
</div>


</div>
    </div> 
    
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
    <p className="text-muted" style={{fontsize:"10px"}}>PRO</p>
    <h3 className="card-title">$49/month</h3>
      {card3.map((car2)=>(
        <Card3 icon4={car2.class} content4={car2.content} />
      ))}
      <br/>
      <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  
</div>


</div>
    </div>  
  </div>
  );
}
  
function Card1({icon,content,icon1,content1}){
  return(
  
    <div>
    <div className="card-text">
     
  <i className={icon}></i>
  <span >{content}</span>

  <div className="card-subtitle mb-2 text-muted">
   <i className={icon1}></i>
   <span>{content1}</span>
   </div>
  
  </div>
</div>

  )
}

function Card2({icon2,content2,icon3,content3}){

  return(
  <div>
    <div className="card-text">
     
     <i className={icon2}></i>
     <span >{content2}</span>
     
     <div className="card-subtitle mb-2 text-muted">
      <i className={icon3}></i>
      <span>{content3}</span>
       </div>
     </div>
   </div>
    
     )
   }
   
   function Card3({icon4,content4}){
     return(
      <div className="card-text">
<i className={icon4}></i>
<span>{content4}</span>
</div>
  )

  }

export default App;