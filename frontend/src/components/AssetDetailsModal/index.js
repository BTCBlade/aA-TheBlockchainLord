import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AssetDetails from "./AssetDetails";
import "./AssetDetails.css";
function AssetDetailsModal(asset, btnText) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="AssetDetails-button"
        onClick={() => setShowModal(true)}
      >
        {asset.symbol}
      </button>
      {showModal && (
        <Modal
          className="AssetDetails-modal"
          onClose={() => setShowModal(false)}
        >
          <AssetDetails setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
