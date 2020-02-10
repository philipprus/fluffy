import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

import Carousel, { Modal, ModalGateway } from "react-images";

import { photos } from './photos';
import {Link} from 'react-router-dom';

const Portfolio = (props) => {

      const [currentImage, setCurrentImage] = useState(0);
      const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
      const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
      
      return (
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col text-center"> 
                <h3 className="lead mt-4 mb-4">I Create Pet Portrait from Photo!</h3>
                <p><Link to="/order">4 Styles & 1 Step order</Link></p>
              </div>
              <hr className="my-4"/>
              <div className="mt-5">
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                      <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                      />
                </Modal>
                ) : null}
                </ModalGateway>
              </div>
            </div>
          </div>
          );
}

export default Portfolio;