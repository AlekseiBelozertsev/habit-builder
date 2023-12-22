import { List, ScrollableCollection, SectionHeader } from "../../collections";

const MyHabits: React.FC = () => {
  return (
    <div className='flex w-full container flex-col justify-start grow'>
      <br />
      <ScrollableCollection title={`My habits`} />
      <SectionHeader title={`Top habits`} />
      <List numOfRows={4} />
    </div>
  );
};

export default MyHabits;
