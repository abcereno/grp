import React from 'react'
import { Container } from 'react-bootstrap'

const Services = () => {
    return (
        <Container>
            <div class="d-flex justify-content-between pt-5 pb-5 row">
                <div class="d-flex flex-column justify-self-center align-self-center home-card pt-5 pb-5 col-md-6 col-12"><h6 class="p-3">Why Choose Us</h6><h1 class="p-3">Our Services</h1>
                    <article class="p-3">
                        <h6>REPAIR</h6>
                        <p>The first step in getting your financial life back is removing inaccurate information from your credit report. The law allows any consumer to challenge inaccurate information on their credit report if that consumer feels that the items are inaccurate.</p>
                        <h6>REBUILD</h6>
                        <p>The second step to restoring your credit is to rebuild it while we work on removing inaccurate information. It's not enough just to remove negative items, but you must prove to FICO and the creditors that you can make your payments on time.</p>
                        <h6>Raise Your Score</h6>
                        <p>The third step to restoring your credit is to focus on raising your credit score. As we all know, the credit score is the number one factor when it comes to getting approved for a loan. If you have a low credit score, you can get denied or pay high interest rates.</p>
                    </article>
                </div>
                <div class="d-flex flex-column py-5 col-md-6 col-12">
                    <img class="img-fluid resize" src="/static/media/good credit makes.5843b6861cc5e967b40f.png" alt="good credit" />
                    <div class="d-flex justify-content-center">
                        <a class="btn btn-warning" href="/">Get Started</a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services