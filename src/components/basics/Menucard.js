import React from "react";

const Menucard = ({ menuData }) => {
  // const style = {color : "red"}  // for internal CSS
  return (
    <>
    <section className="main-card--cointainer">
      {menuData.map((i) => {
        const {id,name,category,description,image} = i // destructing
        return (
          <>
            <div className="card-container" key = {id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  {/* <span className='card-author subtle' style={style}>breakfast</span>  //for internal CSS */}
                  {/* <span className='card-author subtle' style={{color:"blue"}}>breakfast</span>  //for inline CSS */}
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}
                  </span>
                  <div className="card-read subtle">Read</div>
                  <img src ={image} alt="error while loading images" className='card-media'></img>
                  <span className="card-tag subtle">Order now </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default Menucard;
