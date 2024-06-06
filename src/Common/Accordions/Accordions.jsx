import { Accordion, Row } from "react-bootstrap"

const Accordions = ({ Faq }) => {

    return (
        <>
            <Row className="mt-5 mb-5">
                <h1 className="centered">Frequently Asked Questions</h1>
                <Accordion className=" d-flex flex-column gap-3 py-5">
                    {Faq.map((data) => (
                        <Accordion.Item key={data.id} eventKey={data.id}>
                            <Accordion.Header>{data.question}</Accordion.Header>
                            <Accordion.Body className="bg-dark text-light">
                                {data.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Row>
        </>
    )
}

export default Accordions