import Nev from "../components/Nev";
import Tablele from "../components/Tablele";
import Total from "../components/Total";

const Ledger = ({data}) => {
  return (
    <div>
      <div>
        <Nev header="Check Stock" />
      </div>
      <table>
        <tr>
          <th>Product</th>
          <th>Name of product</th>
          <th>Number of product was sell</th>
          <th>Price of the product</th>
          <th>Total</th>
        </tr>
        {data.map((el)=>{
            return <Tablele data={el}/>
        })}
        <Total dataset={data}/>
      </table>
    </div>
  );
};

export default Ledger;
