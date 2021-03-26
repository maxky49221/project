const Tablele = ({ data }) => {
    return (
      <tr>
        <td>{data.pro}</td>
        <td>{data.name}</td>
        <td>{data.number}</td>
        <td>{data.price}</td>
        <td>{parseInt(data.number) * parseInt(data.price)}</td>
      </tr>
    );
  };
  
  export default Tablele;
  