import GuidesCard from '@/c/cards/GuidesCard';

interface GuideSliderProps {
  guides: {
    id: number;
    title: string;
    img: string;
    url: string;
    description: string;
  }[];
  directory: string;
}

const GuideSlider: React.FC<GuideSliderProps> = ({
  guides,
  directory,
}) => {
  return (
    <div className='flex justify-center items-center mb-8 space-x-12'>
      {guides.map((guide) => (
        <GuidesCard key={guide.id} {...guide} directory={directory} />
      ))}
    </div>
  );
};

export default GuideSlider;
