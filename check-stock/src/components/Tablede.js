import Butadd from "../components/Butadd"
const Tablede = ({ data }) => {
  return (
    <tr>
      <td>{data.pro}</td>
      <td>{data.serialc}</td>
      <td>{data.name}</td>
      <td>{data.number}</td>
      <td>{data.price}</td>
      <td><Butadd  inde="+"/></td>
      <td><Butadd  inde="-"/></td>
      <td>{parseInt(data.number)}</td>
      
    </tr>
  );
};

export default Tablede;
