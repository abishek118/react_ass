import React from 'react';
import logo from './logo.svg';
import './App.css';

const User = {
  Name : 'Alan Ford',
  EmployeeId : '00005152',
  Appointment : '9:00 (24-05-2016)',
  Email : 'alan.form@email.nl',
  phone : '+31123456789',
  profileImg:'https://www.w3schools.com/howto/img_avatar.png',
  product_name: "Boltart Bosbessen",
  product_description:
    "This is some random description about the product mentioned above"
}

var arrow="<"
var arrow1 = ">"
function App(props) {
  const {User} = props
  const {Name,EmployeeId,Appointment,Email,phone,profileImg,product_name,product_description} = props.User
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='header'>
      <p id='header-para'>{arrow}</p>
      <div className='header-mid'>
      <h3>{Name}</h3>
      <p style={{color:'silver'}}>{EmployeeId}</p>
      </div>
      <button>Print</button>
    </div>
    <div className='customer-info'>
      <h3>Appointment:{Appointment}</h3>
      <h3>Email:{Email}</h3>
      <h3>phone:{phone}</h3>
    </div>
    <div className='order-info'>
      <div>
        <h3>Status</h3>
        <li>In Progress</li>
      </div>
      <div id='order1'>
        <h3>Door</h3>
        <p className='order-para'>Mark</p>
      </div>
      <div className='order-time'>
        <h3>Time</h3>
        <p id='time1'>10:30 (25-05-2016)</p>
      </div>
    </div>
    <div className='product-list'>
      <div className='checkbox'>
          <input type={'checkbox'}></input>
      </div>
      <div>
        <img src={profileImg}></img>
      </div>
      <div className='name'>
        <h3>{product_name}</h3>
        <p>{product_description}</p>
      </div>
      <div className='arr'>{arrow1}</div>
    </div>
  </div>
  );
}

export default App;
