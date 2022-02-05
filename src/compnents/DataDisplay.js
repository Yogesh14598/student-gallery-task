import React ,{useState} from "react";
import Data from "./Home/Data.json";

const DataDisplay = () => { 
  
    
      const [list, setlist] = useState(Data);
      const [addFormData, setAddFormData] = useState({
      name:"",
        email: "",
        
      });

      console.log(addFormData , "addFormData");
    
      const handleRemoveItem = (e) => {
       const name = e.target.getAttribute("name")
       setlist(list.filter(item => item.name !== name)); 
      };
   
      const onchangeval = (event) => {
        setAddFormData({
          ...addFormData,
          [event.target.name]: event.target.value,
        });
      };

      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newlist = {
          id: Math.floor(Math.random() * 10000),
          name: addFormData.name,
          email: addFormData.email
        };
    
        const newlists = [...list, newlist];
        setlist(newlists);

       
      };
      return (
        <div>
          {list.map(item => {
            return (
              <>
              <div>           
                <span name={item.name} onClick={handleRemoveItem}>
                  x
                </span>
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.email}</span>
                </div>
              </>
            );
          })}
          <form>
              <input type="text" value={addFormData.name} onChange={onchangeval} name="name"/>
              <input type="text" value={addFormData.email} onChange={onchangeval} name="email" /> 
              <button onClick={handleAddFormSubmit}>add</button>

          </form>
        </div>
      );
};

export default DataDisplay;
