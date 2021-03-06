import ElasticCarousel from "react-elastic-carousel";
import { connect } from "react-redux";

const Carousel = (props) => {
  const images = props.images;
  if (!images.length) {
    return null;
  }
  return (
    <ElasticCarousel enableAutoPlay>
      {images.map((src) => (
        <img key={src} height="200" alt="dog" src={src} />
      ))}
    </ElasticCarousel>
  );
};

const սթեյթիցՎերցրուԴիրՓրոփսիՄեջ = (allState) => ({
  images: allState.carouselImages,
});

export default connect(սթեյթիցՎերցրուԴիրՓրոփսիՄեջ)(Carousel);
