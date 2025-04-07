import ZoomableImage from "../../components/shared/image/zoomable-image";

const PinchZoomImage = () => {
  return (
    <ZoomableImage
      src="https://picsum.photos/3840/2160"
      alt="랜덤 이미지"
      objectFit="fill"
      aspectRatio={384 / 216}
      fallback={
        <div className="aspect-[384/216] w-full bg-[#f0f0f0] rounded-md animate-pulse" />
      }
    />
  );
};

export default PinchZoomImage;
