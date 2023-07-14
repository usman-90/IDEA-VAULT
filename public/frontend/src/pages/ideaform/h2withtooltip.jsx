/* eslint-disable react/no-unknown-property */
import { Tooltip, OverlayTrigger } from "react-bootstrap";
const H2WithToolTip = ({ heading, tooltip }) => {
  return (
    <h2>
      {heading}{" "}
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip">{tooltip}</Tooltip>}
      >
        <span href="." className="tooltipa" bsStyle="default">
          <i className="fs-4 fa-solid fa-circle-info"></i>
        </span>
      </OverlayTrigger>
    </h2>
  );
};

export default H2WithToolTip;
