import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";






const PartnersList = () => {
    const partners = useSelector(selectAllPartners);

    return (
      <Col className="mt-4">
        <Row>
          {partners.map((elm) => {
            return (
              <div className="d-flex mb-5" key={elm.id}>
                <Partner partner={elm} />
              </div>
            );
          })}
        </Row>
      </Col>
    );
};
export default PartnersList;