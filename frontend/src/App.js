import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

const details= [{
  name:'Mobile',
  type:"accessories",
  imagelink:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&w=1000&q=80",
  price:'$699'
},{
  name:'Jeans',
  type:"clothes",
  imagelink:"https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amVhbnN8ZW58MHx8MHx8&w=1000&q=80",
  price:'$50'
},{
  name:'Speakers',
  type:"accessories",
  imagelink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQe0RtswvcB-0F8kLGB4XJLjmjZrkmVpi1g&usqp=CAU",
  price:'$59'
},{
  name:'Shoe',
  type:"clothes&footwear",
  imagelink:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  price:'$65'

}]






class App extends Component{

constructor(props){
  super(props)
this.state = {name:'AMAZON',data:details,subs:true}

}

render(){

  const {name,data,subs} = this.state
  return (
    <div className="App">
    <div className="div1">
    <h1>{name}</h1>
    <div className='div2'>
<button type="button">Buy Now</button>
<button type="button">Add Cart</button>
    </div>
    </div>
    <ul>
      {details.map((each)=>(
<li className='card1'>
  <div className='main1'>
  <a href="https://s3-ap-southeast-1.amazonaws.com/he-public-data/dummy584713a.pdf" >Downloadable</a> 

    <p></p>
    <h1>{each.name}</h1>
  <div className="list1">
    <img src={each.imagelink} className="img1"/>
    
    </div>
   {subs?<p>prime</p>:<p>not prime</p>}
  
    <p>TYPE:{each.type}</p>
    <p>PRICE:{each.price}</p>
    <button type="button">buy Now</button>
    <p>Delivery date within 7 working days</p>
    


  </div>
</li>
      ))}
    </ul>
    </div>
  );
}
}

export default App;
