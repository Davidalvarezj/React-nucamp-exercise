import { Col } from "reactstrap";
import Partner from "../../components/Partner";
import { selectAllPartners } from "./partnersSlice";






const PartnersList = () => {
    const partners = selectAllPartners();

    return (
        <Col className='mt-4'>
            {partners.map((elm) => {
                return (
                    <div className='d-flex mb-5' key={elm.id}>
                        <Partner partner={elm} />
                    </div>
                );
            })}
        </Col>
  );
};
export default PartnersList;