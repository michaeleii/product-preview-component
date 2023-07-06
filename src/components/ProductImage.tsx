function ProductImage({
  desktopImg,
  mobileImg,
  alt,
}: {
  desktopImg: string;
  mobileImg: string;
  alt: string;
}) {
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktopImg}></source>
      <img
        src={mobileImg}
        className="max-w-md rounded-t-lg xl:rounded-tr-none xl:rounded-l-lg h-full object-cover xl:w-[300px]"
        alt={alt}
      />
    </picture>
  );
}
export default ProductImage;
