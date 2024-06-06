import React from 'react'
import { Container } from 'react-bootstrap'
import pic from "../../Common/Images/good credit (Small).png"
import Buttons from '../../Common/Buttons/Buttons'
const Services = () => {
    return (
        <Container>
            <div className="d-flex justify-content-between pt-5 pb-5 row">
                <div className="d-flex flex-column justify-self-center align-self-center home-card pt-5 pb-5 col-md-6 col-12"><h6 className="p-3">Why Choose Us</h6><h1 className="p-3">Our Services</h1>
                    <article className="p-3">
                        <h6>Challenge Errors</h6>
                        <p>We help you identify and dispute inaccurate information on your credit report. This can significantly improve your credit report accuracy and potentially raise your score.</p>
                        <h6>Improve Credit Health</h6>
                        <p>We develop strategies to help you rebuild your credit while we work on removing errors. This includes managing credit utilization and making on-time payments.</p>
                        <h6>Boost Your Credit Score</h6>
                        <p>By combining error correction with positive credit habits, we aim to help you achieve a higher credit score. A better score can lead to lower interest rates and improved loan approvals.</p>
                    </article>
                </div>
                <div className="d-flex flex-column py-5 col-md-6 col-12">
                    <img className="img-fluid resize" src={pic} alt="good credit" />
                    <div className="d-flex justify-content-center">
                        <Buttons />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services