import React,{useState} from "react";
//const [hidden, change] = useState("yes");


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor]=useState("red");
	return (
	<div className="container text-center">	
	     <div className="tlTop"></div>
		 <div className="trafic-light">
			<div 
			onClick={()=>setSelectedColor("red")}
			className={
				"light red " + (selectedColor==="red" ? "glow":"")}>
            </div>
			<div  
			   onClick={()=>setSelectedColor("yellow")}
			   className={
				"light yellow " + (selectedColor==="yellow" ? "glow":"")}>

				</div>
			<div 
			   onClick={ ()=>setSelectedColor("green")}
			     className={ 
				"light green " + (selectedColor==="green" ? "glow":"")}>
         </div>
		</div>
	</div>
	);
};

export default Home;
