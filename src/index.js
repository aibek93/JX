import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />
    <div>
      <img
        alt="plov"
        className="picture"
        src="https://s1.eda.ru/StaticContent/Photos/130410124428/150630142514/p_O.jpg"
      ></img>
      <img
        alt="burger"
        className="picture"
        src="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1-500x500.jpg"
      ></img>
      <img
        alt="chicken"
        className="picture"
        src="https://www.gastronom.ru/binfiles/images/20200427/b9b8118f.jpg"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
