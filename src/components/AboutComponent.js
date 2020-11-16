import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardHeader,
    Media,
} from "reactstrap";
import { Link } from "react-router-dom";
// import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { Fade, Stagger } from "react-animation-components";

function RenderPartner({ partner }) {
    if (partner) {
        return (
            <React.Fragment>
                <Media
                    object
                    src={partner.image}
                    alt={partner.name}
                    width="150"
                />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div />;
}

function PartnerList(props) {
    const partners = props.partners.partners.map((partner) => {
        return (
            <Fade in key={partner.id}>
                <Media tag="li" className="partnersSpacer" >
                    <RenderPartner partner={partner} />
                </Media>
            </Fade>
        );
    });

    if (props.partners.isLoading) {
        return <Loading />;
    }
    if (props.partners.errMess) {
        return (
            <div className="col">
                <h4>{props.partners.errMess}</h4>
            </div>
        );
    }
    return (
        <div className="col mt-4">
            <Media list>
                <Stagger in>{partners}</Stagger>
            </Media>
        </div>
    );
}

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>
                        Mug-Life brand and coffee, we are determined to positively influence our
                        global community; from the people living in the villages and towns
                        where the coffee beans are grown, to the farmers, the shippers,
                        our roasters, our baristas and most importantly, each and every
                        one of our customers, holding a warm cup of Red Whale coffee in
                        their hand every day. We are committed to source the best beans
                        possible, cook those beans precisely to reach their optimum
                        flavor, educate our customers about what they should expect in a
                        quality bean (knowledge is power) and then make that quality bean
                        available. While our objectives are to roast specialty coffee that
                        tastes great and offer a brand recognized for quality, our greater
                        vision is to use coffee to improve our community through education
                        and business practices, based on ethics, respect and transparency
            </p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white">
                            <h3>Facts At a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2016</dd>
                                <dt className="col-6">No. of Cafes in 2019</dt>
                                <dd className="col-6">563</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">
                                    I will not follow where the path may lead, but I will go
                                    where there is no path, and I will leave a trail.
                  </p>
                                <footer className="blockquote-footer">
                                    Muriel Strode,{" "}
                                    <cite title="Source Title">
                                        "Wind-Wafted Wild Flowers" - The Open Court, 1903
                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <PartnerList partners={props.partners} />
            </div>
        </div>
    );
}

export default About;
