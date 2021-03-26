import Lable from "../components/Lable";
import Nev from "../components/Nev";

const Addre = ({onAdd}) => {
    return (
        <div>
            <Nev header="Check Stock"/>  
            <Lable onAdd={onAdd}/>
        </div>



      );
}
 
export default Addre;