import React from 'react';
import { useDataApi, deleteById } from '../../utils/utils';
// import CreateReview from './CreateReview';
import CreatePortfolio from './CreatePortfolio';
import Gallery from 'react-grid-gallery';
import { toast, ToastContainer } from 'react-toastify';
import EditPortfolio from './EditPortfolio';

const url = '/api/portfolio';
const PortfolioGallery = props => {
  const [{ data, isLoading, isError }] = useDataApi(url, []);
  const [openModal, setOpenModal] = React.useState(false);
  const [mode, setMode] = React.useState('create');
  const createGallery = data => {
    const res = [];
    data &&
      data.map(img => {
        const { image, _id, size, style } = img;
        if (image.length) {
          const { src, thumbnail, thumbnailHeight, thumbnailWidth,   } = image[0];
          img.image.length &&
            res.push({
              src,
              thumbnail,
              //     caption: img.description,
              thumbnailWidth,
              thumbnailHeight,
              _id,
              tags: [
                { value: size, title: size },
                { value: style, title: style },
              ],
            });
        }
      });
    console.log(res);
    return res;
  };

  React.useEffect(() => {
    if (data) {
      setImages(data);
    }
  }, [data]);

  const [images, setImages] = React.useState([]);
  const [currentImage, setCurrentImage] = React.useState(0);

  const notify = text => {
    toast.info(text, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  const deleteImage = async () => {
    if (window.confirm(`Are you sure you want to delete image number ${currentImage}?`)) {
      // var imagesAr = images.slice();
      const deleteRes = await deleteById(url, images[currentImage], id =>
        notify('Problem with' + id)
      );
      console.log(deleteRes);
      const imagesAr = images.splice(currentImage, 1);
      setImages(imagesAr);
      notify('Removed');
    }
  };
  const onCurrentImageChange = index => {
    console.log(index);
    setOpenModal(true);
    setCurrentImage(index);
  };
  const onSelectImage = (index, image) => {
    var imagesSlice = images.slice();
    var img = imagesSlice[index];
    if (img.hasOwnProperty('isSelected')) img.isSelected = !img.isSelected;
    else img.isSelected = true;

    setImages(imagesSlice);
  };

  if (isError) return <div>Something went wrong ...</div>;
  if (isLoading) return <div>Loading ...</div>;

  return (
    <>
      {!images.length && <div> Empty </div>}
      <div className="row">
        <div className="col-md-12">
          <CreatePortfolio  />
          <EditPortfolio open={openModal} image={data[currentImage]} handleClose={setOpenModal} />
        </div>
      </div>

      <div
        style={{
          display: 'block',
          minHeight: '1px',
          width: '100%',
          overflow: 'auto',
        }}
        className="col"
      >
        <Gallery
          images={createGallery(images)}
          enableLightbox={false}
          onSelectImage={onSelectImage}
          onClickThumbnail={onCurrentImageChange}
          currentImageWillChange={onCurrentImageChange}
          enableImageSelection={true}
          customControls={[
            <button key="deleteImage" onClick={deleteImage}>
              Delete Image
            </button>,
          ]}
        />
        {currentImage}
      </div>

      <ToastContainer autoClose={4000} />
    </>
  );
};

export default PortfolioGallery;
