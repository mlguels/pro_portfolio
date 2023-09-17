interface desktopImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}
interface mobileImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface FeaturedProjectv1Props {
  projectTitle: string;
  technologies: string;
  desktopView: desktopImage;
  mobileView: mobileImage;
}

const FeaturedProjectv1: React.FC<FeaturedProjectv1Props> = ({
  projectTitle,
  technologies,
  desktopView,
  mobileView,
}) => {
  return <div>FeaturedProjectv1</div>;
};

export default FeaturedProjectv1;
