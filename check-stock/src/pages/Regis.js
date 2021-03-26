import Nev from "../components/Nev";

const Regis = () => {
  return (
    <div className="col">
        <Nev header="Check Stock"/> 
      <div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label" for="Serial">
                    First Name:{" "}
                  </label>
                  <input className="form-control"
                    id="Serial"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="name">
                    Last Name:{" "}
                  </label>
                  <input
                  className="form-control"
                    id="name"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="price">
                    Email:{" "}
                  </label>
                  <input
                  className="form-control"
                    id="price"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" for="Serial">
                    Password:{" "}
                  </label>
                  <input
                  className="form-control"
                    id="number"
                    type="password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
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

export default Regis;
