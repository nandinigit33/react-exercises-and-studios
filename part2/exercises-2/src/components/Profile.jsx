import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean =>
   // <div key={ocean.id} className="profile">
<div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src={ocean.image} 
         alt={ocean.name} 
         className="img"/>   
         <h1>{ocean.name}</h1> 
         <h3>Fun Facts:</h3>
   <ul>
      <li>{ocean.fact1}</li>
      <li>{ocean.fact2}</li>
      <li>{ocean.fact3}</li>
   </ul> 
   {/* <ul>
        {ocean.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul> */}
      <Button/>
   </div>
);


function Profile()
{
   return(
      <>
        <ul>
            {listItem}
         </ul>  
         {/* <Button /> */}
      </>  
   );
}

export default Profile;