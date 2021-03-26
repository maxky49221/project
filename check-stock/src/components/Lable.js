import { useState } from "react";

const Lable = ({ onAdd }) => {
  const [pro, setPro] = useState("");
  const [serial, setSerial] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");


  const onClickHandler = () => {
    const newData = {
      product: pro,
      serialc: serial,
      name: name,
      price: price,
      number: number,
    };
    onAdd(newData);
    // setText("");
  };
  return (
    <div className="col">
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label" for="Serial">
                    Serial number:{" "}
                  </label>
                  <input className="form-control"
                    id="Serial"
                    type="text"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="name">
                    Name product:{" "}
                  </label>
                  <input
                  className="form-control"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="price">
                    Price:{" "}
                  </label>
                  <input
                  className="form-control"
                    id="price"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="Serial">
                    Number of product:{" "}
                  </label>
                  <input
                  className="form-control"
                    id="number"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="pro">
                    Product:{" "}
                  </label>
                  <input
                  className="form-control"
                    id="pro"
                    type="text"
                    value={pro}
                    onChange={(e) => setPro(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onClickHandler}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <label>Added:</label>
        <input type="text" />
        <label>Subtract:</label>
        <input type="text" /> <br /> */}
    </div>
  );
};

export default Lable;
