import BlockImage from "../../components/BlockImage";
//import paysage from "./../../assets/paysage.png"

//let popo = "/assets/paysage.png"
//let paysage = require(popo.toString);

const Home = ()=>{
    let name = "paysage.png"
    const image = require('../../assets/'+name);
    return (
        <div>
            <h1>hfjdfhdjfdkj</h1>
            <div>dfkdkfddd</div>
            <BlockImage url={image}></BlockImage>
        </div>
      
    )
}

export default Home;