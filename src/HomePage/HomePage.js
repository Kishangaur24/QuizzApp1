import React from "react";
import  Form  from "../Component/Form/Form";
import Card from "../Component/Card/Card";
import style from "./HomePage.module.css"

const HomePage = () => {
  return (
   
      
      <div className={style.container}>
        <Form />
       
          <img className={style.img} src="https://s.yimg.com/ny/api/res/1.2/8.x.8pPxeyFjJaXLXOasDg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://media.zenfs.com/en/cosmo_633/0c11e831c9f8a97cb3a376be65343959" alt="img" />
     
       {/* <Card/> */}
      

    </div>
  );
};

export default HomePage;
