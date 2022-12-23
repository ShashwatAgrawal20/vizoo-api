import React from "react";

export default function ApiBar() {
  const dropdownOptions = ["GET", "POST", "PUT", "DELETE", "PATCH"];

  return (
    <div>
      <form style={{marginTop:"30px"}}>
        <label style={{fontSize:"20px"}}>
          Request Options
          <select style={{marginLeft:"10px", height:"40px", width:"80px", fontSize:"20px", paddingLeft:"10px", marginRight:"10px", marginTop:"5px", borderRadius:"5px"}}>
            {dropdownOptions.map((item, i) => {
              return <option key={i} style={{fontSize:"15px"}}>{item}</option>
            })}
          </select>
          <input type="text" placeholder="Base Url" style={{height:"40px", width:"300px",marginRight:"10px", fontSize:"20px", paddingLeft:"10px", borderRadius:"5px", borderWidth:"1px"}} />
          <button type="submit" style={{height:"40px", width:"80px", fontSize:"20px", backgroundColor:"#008080", color:"white", border:"none", borderRadius:"5px"}}>Fetch</button>
        </label>
      </form>
    </div>
  );
}
