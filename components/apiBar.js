import React from "react";
import style from '../styles/apiBar.module.css'
import axios from "axios"

export default function ApiBar() {
  const [data, setData] = React.useState([]);
  const [baseurl, setBaseurl] = React.useState([]);

  const dropdownOptions = ["GET", "POST", "PUT", "DELETE", "PATCH"];

  
  const fetchData = () => {
     axios.get(baseurl).then((response) => {
        setData(response.data);
     });
    }

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setBaseurl(document.getElementById('url').value);
    fetchData()
  };


  return (
    <div style={{marginTop:"20px"}}>
        <label className={style.req_options}>
          Request Options
          <select className={style.selection}>
            {dropdownOptions.map((item, i) => {
              return <option key={i} className={style.selection_dropdown}>{item}</option>
            })}
          </select>
          <input type="text" id="url" placeholder="Base Url" className={style.base_url_input}/>
          <button className={style.fetch_button} onClick={handleChange}>Fetch</button>
        </label>
      <p style={{marginTop: "30px"}}>
        {data.fact}
      </p>
    </div>
  );
}
