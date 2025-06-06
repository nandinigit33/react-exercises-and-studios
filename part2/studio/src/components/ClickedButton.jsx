//import styling and assign correct className clickedButton
import "./styling.css";
function ClickedButton() {
  //create alert to inform user that the pin has been saved
  function handleClick() {
    alert("You are removing this pin!");
  }
  return (
    //create button 
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
     );
}

export default ClickedButton;





