 //need to import SaveButton and ClickedButton
import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';
 //import styling
 import "./styling.css";

function Button(props) {
  const saveButton = props.saveButton;
   //create conditional for these buttons
  return saveButton ? <SaveButton /> : <ClickedButton />;
}
 
 export default Button;
 



 


