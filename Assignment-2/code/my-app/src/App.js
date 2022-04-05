import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
 const {name,profileImg,bloodGroup,location,age} = employee; 
    
return(
  <div className="container">
  {/* Start your React code here */}
  <div className="image">
    <img src= {profileImg} alt="profile-pic" ></img>
  </div>
  <div className='data'>
    <h2>{name}</h2>
    <br></br>
    <p>location</p>
    <h3>{location}</h3>
    <br></br>
    <p>bloodGroup</p>
    <h3>{bloodGroup}</h3>
    <br></br>
    <p>Age</p>
    <h3>{age}</h3>
  </div>
</div>
)
}



export default App;
