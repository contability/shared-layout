import { useCallback, useRef } from "react";
import QuickPinchZoom, {
  make3dTransformValue,
  UpdateAction,
} from "react-quick-pinch-zoom";
import ResponsiveImage, { ResponsiveImageProps } from "./responsive-image";

interface ZoomableImageProps extends ResponsiveImageProps {
  /** 이미지 클릭 이벤트 핸들러 */
  handleImageClick?: () => void;
}

/** 이미지만 따로 zoom 가능하도록 분리 시켜주는 react-quick-pinch-zoom을 이용한 컴포넌트 */
const ZoomableImage = ({
  src,
  alt,
  aspectRatio,
  objectFit = "contain",
  objectPosition = "50% 50%",
  priority = false,
  fallback,
  handleImageClick,
}: ZoomableImageProps) => {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const onUpdate = useCallback(({ x, y, scale }: UpdateAction) => {
    const container = imgContainerRef?.current;

    if (container) {
      const value = make3dTransformValue({ x, y, scale });
      container.style.setProperty("transform", value);
    }
  }, []);

  return (
    <div className="w-full">
      <QuickPinchZoom onUpdate={onUpdate}>
        <div
          onClick={handleImageClick}
          className="aspect-auto"
          ref={imgContainerRef}
        >
          <ResponsiveImage
            src={src}
            alt={alt}
            aspectRatio={aspectRatio}
            objectFit={objectFit}
            objectPosition={objectPosition}
            priority={priority}
            fallback={fallback}
          />
        </div>
      </QuickPinchZoom>
    </div>
  );
};

export default ZoomableImage;
