import React from "react";
import style from '../styles/apiBar.module.css'

export default function ApiBar() {
  const dropdownOptions = ["GET", "POST", "PUT", "DELETE", "PATCH"];

  return (
    <div>
      <form className={style.form1}>
        <label className={style.req_options}>
          Request Options
          <select className={style.selection}>
            {dropdownOptions.map((item, i) => {
              return <option key={i} className={style.selection_dropdown}>{item}</option>
            })}
          </select>
          <input type="text" placeholder="Base Url" className={style.base_url_input}/>
          <button type="submit" className={style.fetch_button}>Fetch</button>
        </label>
      </form>
    </div>
  );
}
