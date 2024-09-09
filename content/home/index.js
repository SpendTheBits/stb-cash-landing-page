"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle, Text } from "@styles/styledComponent";
import { CustomImage, Input, LineDivider } from "@components/ui";
import { Canvas, SignupForm } from "@components/parts";
import {
  AppleStore,
  FeatureTwo,
  Financial,
  GPlay,
  P2pTransaction,
  Rewards,
  ScanPay,
  StbLogo,
  Success,
} from "@public/assets";
import {
  Envelope,
  EnvelopeFill,
  LockFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import Link from "next/link";

const Content = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <main className={styles.landingPage}>
      <section className={styles.aboutSection} id="about">
        <Container>
          <Row>
            <Col lg={12}>
              <CustomImage src={StbLogo} alt="STB Cash" />
              <SectionTitle>
                ABOUT{" "}
                <span style={{ color: "var(--accentColor)" }}>STB CASH APP</span>{" "}
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Text>
                This innovative application allows users to conveniently
                transfer money by simply scanning a QR code or using a phone
                number. With its user-friendly interface, sending and receiving
                money has never been easier. Whether you're buying a cup of
                coffee or paying for goods and services, the "STB CASH APP"
                provides a seamless and efficient way to spend your money.
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.featuresSection} id="features">
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>
                <span style={{ color: "var(--accentColor)" }}>STB CASH APP</span>{" "}
                FEATURES
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>QR Code Payments</SectionTitle>
              <LineDivider />
              <Text>
                With QR Code Payments, users can send or receive money by
                conveniently scanning QR codes or using a phone number,
                eliminating the need to carry physical cards or cash. Users can
                effortlessly add funds to their wallet via Interac. Once the
                wallet is funded, users can make bill payments, peer-to-peer
                (P2P), and peer-to-business (P2B) transactions. Withdrawals to
                your bank account are facilitated through Interac rails,
                providing easy access to your funds whenever needed.
              </Text>
              {/* <Link href={"#"} className="primaryBtn">
                Demo Button
              </Link> */}
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={ScanPay} alt="Scan and Pay" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={P2pTransaction} alt="Second Feature" />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>
                Unlock Zero Transaction Fees for P2P and P2B
              </SectionTitle>
              <LineDivider />
              <Text>
                Canadians are currently paying high fees for banking services.
                Our app offers a solution by providing free peer-to-peer (P2P)
                transactions, and peer-to-business (P2B) transactions. By
                eliminating fees, our app aims to increase user engagement and
                make it a cost-effective option for regular users. Furthermore,
                our on-demand spending account comes with no monthly fees, so
                users can enjoy the convenience of spending their money without
                worrying about additional charges.
              </Text>
              {/* <Link href={"#"} className="primaryBtn">
                Demo Button
              </Link> */}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>Cashback Rewards on P2B Transactions!</SectionTitle>
              <LineDivider />
              <Text>
                STB rewards users on every P2B transaction with cashback
                rewards. The more users spend on goods and services using our
                app, the greater their account grows with cashback benefits.
                STB's innovative cashback rewards program revolutionizes how
                users interact with peer-to-business (p2b) transactions. With
                every purchase made through our app, users are entitled to
                cashback rewards, creating a virtuous cycle of savings and
                growth. The more users engage in p2b transactions using our
                platform, the greater their account accumulates cashback
                benefits. This encourages users to make more purchases through
                our app, fostering a vibrant ecosystem where every participant
                wins.
              </Text>
              {/* <Link href={"#"} className="primaryBtn">
                Demo Button
              </Link> */}
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={Rewards} alt="Scan and Pay" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={Financial} alt="Second Feature" />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>Comprehensive Financial Management</SectionTitle>
              <LineDivider />
              <Text>
                Beyond payments, users can manage various financial activities
                such as bill payments and in-store purchases, providing a
                holistic financial management experience.
              </Text>
              {/* <Link href={"#"} className="primaryBtn">
                Demo Button
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.joinusSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <Text>
                Join the STB revolution today and start reaping the benefits of
                our lucrative cash-back rewards program. With every purchase,
                accumulate valuable cashback rewards to enhance your financial
                well-being. Take control of your finances with the STB Cash App!
                Download now to revolutionize your financial experience.
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.signUpSection} id="register">
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>
                LET'S GET YOU{" "}
                <span style={{ color: "var(--accentColor)" }}>STARTED</span>!
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            {!isSubmitted ? (
              <Col xs={12} md={12} lg={12}>
                <SignupForm isSubmitted={(val) => setIsSubmitted(val)} />
              </Col>
            ) : (
              <>
                <Col xs={12} md={3} lg={2}>
                  <CustomImage src={Success} alt="Sign up success" />
                </Col>
                <Col xs={12} md={9} lg={10}>
                  <SectionTitle>
                    Congratuations, Sign Up Successfull.
                  </SectionTitle>
                  <Text>
                    We have sent you email confirmation link on your email and
                    continue sign up process on mobile app
                  </Text>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>
      <section className={styles.downloadAppSection} id="download">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={8}>
              <SectionTitle>
                Download{" "}
                <span style={{ color: "var(--accentColor)" }}>STB Cash App</span>{" "}
                Now!
              </SectionTitle>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <Link href="https://play.google.com/store/apps/details?id=com.stb.cash"><CustomImage src={GPlay} alt="Google Play Store" /></Link>
              <Link href="https://apps.apple.com/app/spend-the-bits-cash/id6471470011"><CustomImage src={AppleStore} alt="Apple Store" /></Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Content;
