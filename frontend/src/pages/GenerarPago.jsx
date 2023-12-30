
export const GenerarPago = () => {
 
  return (
    <div className="container">
         <h2>Generar Pago</h2>
      <div className="row g-3 align-items-center">
      <label className="col-sm-2 col-form-label">Producto:</label>
      <div className="col-sm-10">
      <input type="text" readOnly className="form-control" id="staticEmail" value="email@example.com"/>
    </div>
  </div>

  <div className="row g-3 align-items-center">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
    </div>
  );
};
