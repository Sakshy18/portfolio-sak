import { forwardRef, useState, type ImgHTMLAttributes } from "react";

type SuspenseImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

const SuspenseImage = forwardRef<HTMLImageElement, SuspenseImageProps>(
  function SuspenseImage(
    { className = "", priority = false, onLoad, onError, ...props },
    ref,
  ) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const loading = props.loading ?? (priority ? "eager" : "lazy");
    const fetchPriority = props.fetchPriority ?? (priority ? "high" : "auto");
    const decoding = props.decoding ?? "async";

    return (
      <img
        ref={ref}
        {...props}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setHasError(true);
          onError?.(event);
        }}
        className={[
          className,
          !isLoaded ? "bg-zinc-700/50 animate-pulse" : "",
          hasError ? "opacity-70" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    );
  },
);

SuspenseImage.displayName = "SuspenseImage";

export default SuspenseImage;
