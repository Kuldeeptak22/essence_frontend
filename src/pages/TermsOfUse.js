import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const data = [
  {
    para: "This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.",
  },
  {
    para: "This electronic record is generated by a computer system and does not require any physical or digital signatures. This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name [www.Essence.com](“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”) The Platform is owned by Essence Internet Private Limited, a company incorporated under the Companies Act, 1956 with its registered office at Buildings Alyssa, Begonia & Clover, Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru – 560103, Karnataka,India and its branch offices at 2nd Floor, Block F (Flora), Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,Bengaluru-560103, Karnataka, India and; 447/C, 12th Main, 4th Block,Koramangala, Bengaluru-560034, Karnataka, India (hereinafter referred to as Essence",
  },
  {
    para: "This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. Your use of the Platform and services and tools are governed by the following terms and conditions  as applicable to the Platform including the applicable policies which are incorporated herein by way of reference.",
  },
  {
    para: "If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with Essence Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Essence. For the purpose of these Terms of Use, wherever the context so requires You or User shall mean any natural or legal person who has agreed to become a buyer on the Platform by providing Registration Data while registering on the Platform as Registered User using the computer systems.",
  },
  {
    para: "Essence allows the User to surf the Platform or making purchases without registering on the Platform. The term We, Us, Our shall mean Essence Internet Private Limited. ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING. By impliedly or expressly accepting these Terms of Use, You also accept and agree to be bound by Essence Policies (including but not limited to Privacy Policy available at Privacy) as amended from time to time.",
  },
];
const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Row>
        <Col className="py-3">
          <p className="font-bold text-2xl my-3 text-left">Terms Of Use</p>

          {data && data.map((item) => <p className="text-left">{item.para}</p>)}
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfUse;
