import Nev from "../components/Nev";
import Tablede from "../components/Tablede";

const Check = ({data}) => {
  return (
    <div>
      <div>
        <Nev header="Check Stock" />
      </div>
      <table>
        <tr>
          <th>product</th>
          <th>SerialNumber</th>
          <th>Name of product</th>
          <th>Number of Product</th>
          <th>Price of the product</th>
          <th>Increase</th>
          <th>Decrease</th>
          <th>Current Amount</th>
        </tr>

        
        

              

        {data.map((el)=>{
            return <Tablede data={el}/>
        })}
      </table>
    </div>
  );
};

export default Check;
