import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState('no boards yet!');
   const boards = [
      {label: 'Breakfast Ideas', value: 'breakfast'},
      {label: 'Evening Snacks', value: 'snack'},
      {label: 'Quick Meals', value: 'quickmeals'}
               ];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
    
      {/* <option value="no boards yet!">-- Select a Board --</option> */}
            {boards.map((board, index) => (
               <option key={index} value={board.value}>
                  {board.label}
               </option>
                 ))}
                   </select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}
