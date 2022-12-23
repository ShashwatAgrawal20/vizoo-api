import React from "react";
import style from '../styles/apiBar.module.css'
import ReactJson from 'react-json-view'

export default function ApiBar() {
  const [data, setData] = React.useState({});
  const [baseurl, setBaseurl] = React.useState();

  const dropdownOptions = ["GET", "POST", "PUT", "DELETE", "PATCH"];

  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch(baseurl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  

  const handleChange = (e) => {
    setBaseurl(e.target.value);
    fetchData()
  };


  return (
    <div style={{marginTop:"20px", marginLeft:"50px"}}>
        <label className={style.req_options}>
          Request Options
          <select className={style.selection}>
            {dropdownOptions.map((item, i) => {
              return <option key={i} className={style.selection_dropdown}>{item}</option>
            })}
          </select>
          <input type="text" id="url" onChange={handleChange} placeholder="Base Url" className={style.base_url_input}/>
          <button className={style.fetch_button} onClick={fetchData}>Fetch</button>
        </label>
        <div style={{marginTop: "30px", width: "635px",height:"600px", display: "flex", overflow:"scroll"}}>
          {data === {} ? <div></div>: <ReactJson src={data} theme="summerfruit:inverted" style={{width:"100%"}}/>
      }
      </div>
    
    </div>
  );
}
