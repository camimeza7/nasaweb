import Head from 'next/head';
import Menu from '../components/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import api from '../services/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home({ apod }) {
  const [seeApod, setSeeApod] = useState(false);
  const handleApod = () => {
    setSeeApod(true);
  };
  const urlvideo = apod.media_type === 'video' ? apod.url : null;

  return (
    <div>
      <style jsx>
        {`
          .main-section {
            display: flex;
          }
          .apod-image {
            height: 60vh;
            background-size: contain;
            background-repeat: no-repeat;
          }
          iframe {
            height: 60vh;
            width: 100%;
          }
          .astronauta {
            width: 100%;
          }
        `}
      </style>
      <Head>
        <title>Nasa for Kids</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>

      <Container style={{ position: 'relative' }}>
        <Row
          className={
            seeApod
              ? 'fadeOut'
              : 'section main-section align-items-center fadeIn justify-content-center'
          }
        >
          <Col lg={6} md={8} className="text-center">
            <h1>Hi! Do you want to see the ASTRONOMY PICTURE OF THE DAY?</h1>
            <a className="btn btn-primary" onClick={handleApod}>
              YES!
            </a>
          </Col>
          <Col lg={6}>
            <img className="astronauta" src="/astronaut.png" />
          </Col>
        </Row>

        <div className={seeApod ? ' fadeIn' : 'apodsee fadeOut'}>
          <div
            className={apod.media_type === 'video' ? 'is-hidden' : 'section'}
          >
            <h2>ASTRONOMY PICTURE OF THE DAY</h2>
            <br />
            <Row>
              <Col lg={6}>
                <div
                  className="apod-image"
                  style={{
                    backgroundImage: 'url(' + (seeApod ? apod.url : '') + ')',
                  }}
                ></div>
              </Col>
              <Col lg={6}>
                <br />
                <h3>{apod.title}</h3>
                <h6>{apod.date}</h6>
                <p>{apod.explanation}</p>

                <h6>{apod.copyright}</h6>
              </Col>
            </Row>
          </div>

          <div
            className={apod.media_type === 'video' ? 'apod-video' : 'is-hidden'}
          >
            <Row>
              <Col lg={6}>
                <h2>This time it's actually a VIDEO! YAY!</h2>

                <iframe
                  src={apod.media_type === 'video' ? { urlvideo } : ''}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Col>
              <Col lg={6}>
                <h3>{apod.title}</h3>
                <h6>{apod.date}</h6>
                <p>{apod.explanation}</p>

                <h6>{apod.copyright}</h6>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <br />
      <Container>
        <Row className="section main-section align-items-center">
          <Col lg={7}>
            <img className="astronauta" src="/astro.png" />
          </Col>
          <Col lg={5} className="text-center">
            <br />
            <br />
            <h1>What has been Mars doing? Let's see!</h1>
            <Link href="/mars">
              <a className="btn btn-primary">Let's go!</a>
            </Link>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
}

export async function getServerSideProps(context) {
  let apod = {};

  apod = await api.getAPOD();

  return { props: { apod } };
}
