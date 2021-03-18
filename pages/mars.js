import Head from 'next/head';
import Menu from '../components/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import api from '../services/api';
import { useEffect, useState } from 'react';
import { useRouter, Router } from 'next/router';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Photos from '../components/photos';

export default function Mars({ photos }) {
  const [valueSol, setValueSol] = useState(100);
  const router = useRouter();

  const handlePhotos = () => {
    setValueSol(valueSol + 1);
    router.push({
      pathname: '/mars',
      query: { sol: valueSol + 1 },
    });
  };

  // useEffect(() => {
  //   router.push({
  //     pathname: '/mars',
  //     query: { sol: valueSol },
  //   });
  // }, [valueSol]);
  const [selected, setSelected] = useState(null);
  const photosMars = Photos(photos.photos, selected);

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const ArrowLeft = Arrow({ text: '', className: 'icon-left-arrow' });
  const ArrowRight = Arrow({ text: '', className: 'icon-right-arrow' });
  return (
    <div>
      <style jsx>{`
        .mars-images {
          height: 500px;
          background-size: cover;
        }
        .ally {
          max-width: 160px;
        }
        .section {
          text-align: center;
        }
      `}</style>
      <Head>
        <title>Nasa for Kids</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>
      <Container>
        <Row className=" contenedorally align-items-center justify-content-center ">
          <Col md={6}>
            <div className="section">
              <h2>Can you find Ally, the Alien in some of these photos?</h2>
            </div>
          </Col>
          <Col md={3} className="text-center">
            <img className="ally" src="/alien.png" alt="" />
            <br />
            <br />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            {photos.photos.length > 0 && (
              <h2 className="text-center">
                These photos are from the date: {photos.photos[0].earth_date}
              </h2>
            )}

            <ScrollMenu
              data={photosMars}
              selected={selected}
              onSelect={setSelected}
              wheel={false}
              translate={0}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
            />

            {photos.photos.length === 0 && (
              <h2 className="text-center">
                There are no photos on this date, but Click on More Photos to
                watch the next Date!
              </h2>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center section">
          <Col md={4} lg={2}>
            <a className="btn btn-primary" onClick={handlePhotos}>
              I want more photos!
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  let photos = [];
  const sol = context.query.sol || 100;
  photos = await api.getMarsPhotos(sol);
  return { props: { photos } };
}
