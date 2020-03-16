import React from 'react';

import { Link } from 'react-router-dom';
import { useDataApi } from '../utils/utils';
import Gallery from 'react-grid-gallery';
const url = '//admin.fluffy.co.il/api/portfolio/';

const Portfolio = props => {
  const [{ data, isLoading, isError }] = useDataApi(url, []);
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    if (data.length) {
      console.log(data);
      setImages(createGallery(data));
    }
  }, [data]);

  const createGallery = data => {
    const res = [];
    data.length &&
      data.map(img => {
        const { image, _id, size, style } = img;
        if (image.length) {
          const { src, thumbnail, thumbnailHeight, thumbnailWidth } = image[0];
          res.push({
            src,
            thumbnail,
            thumbnailWidth,
            thumbnailHeight,
            _id,
            tags: [
              { value: size, title: size },
              { value: style, title: style },
            ],
          });
        }
        return false;
      });
    return res;
  };

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col text-center">
          <h3 className="lead mt-4 mb-4">I Create Pet Portrait from Photo!</h3>
          <p>
            <Link to="/order">4 Styles & 1 Step order</Link>
          </p>
        </div>
        <hr className="my-4" />
        <div className="col-12 mt-5">
          {isLoading ? (
            <div className="mt-5">Loading...</div>
          ) : !images && !images.length ? (
            <div> Empty </div>
          ) : (
            <div
              style={{
                display: 'block',
                minHeight: '1px',
                width: '100%',
                overflow: 'auto',
              }}
            >
              <Gallery
                images={images}
                enableLightbox={true}
                rowHeight={350}
                onClick={false}
                enableImageSelection={false}
              />{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
