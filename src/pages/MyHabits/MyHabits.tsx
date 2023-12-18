import { ScrollableCollection, SectionHeader } from "../../collections";

const MyHabits: React.FC = () => {
  return (
    <div className='flex w-full container flex-col justify-start grow'>
      <SectionHeader title={`My habits`} />
      <ScrollableCollection />
    </div>
  );
};

export default MyHabits;
