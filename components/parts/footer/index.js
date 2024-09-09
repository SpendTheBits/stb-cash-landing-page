import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Text } from "@styles/styledComponent";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Text>2024 © STB Cash App</Text>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Link href="/terms-condition">Terms & Condition</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
