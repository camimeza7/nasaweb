import Link from 'next/link';

const Photo = ({ photo }) => {
  return (
    <div className="column">
      <style jsx>
        {`
          .titulo-item {
            font-size: 14px;
            font-weight: 500;
            line-height: 19px;
            text-align: center;
            word-break: break-word;
            white-space: normal;
            color: white;
          }

          .titulo-secundario {
            font-size: 10px;
            font-weight: 300;
            line-height: 17px;
            letter-spacing: 0.05em;
            text-align: center;
            margin-top: 5px;
            text-transform: uppercase;
            word-break: break-word;
            white-space: normal;
          }

          .profile {
            aspect-ratio: 1/1;
            background-size: cover;
            border-radius: 50px;
            height: 0;
            margin-bottom: 15px;
            background-position: center;
            max-width: 100%;
            padding-bottom: 100%;
          }
          // .contenedora {
          //   height: 80vh;
          //   display: flex;
          //   flex-direction: column;
          //   align-items: center;
          //   justify-content: flex-start;
          // }
          .column {
            min-width: 100vh;
            max-width: 100vh;
            padding: 30px;
          }
          .column:focus {
            outline: none;
          }
          @media (max-width: 992px) {
            .profile {
              padding-bottom: 250px;
            }
            .column {
              min-width: 300px;
              max-width: 300px;
              padding: 30px;
            }
          }
        `}
      </style>

      <a className="contenedora">
        <div
          className="profile"
          style={{
            backgroundImage: 'url(' + photo.img_src + ')',
          }}
        ></div>
        <h2 className="titulo-item">{photo.earth_date}</h2>
      </a>
    </div>
  );
};

export default Photo;
