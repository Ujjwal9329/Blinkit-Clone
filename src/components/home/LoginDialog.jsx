// import React from 'react'

const LoginDialog = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn"
            data-bs-dismiss="modal"
            aria-label="">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="modal-body"></div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginDialog