import { List, ScrollableCollection, SectionHeader } from "../../collections";
import { Habit, myHabits } from "../../config";

const MyHabits: React.FC = () => {
  const elements: Habit[] = myHabits;
  return (
    <div className='flex w-full container flex-col justify-start grow'>
      <br />
      <ScrollableCollection title={`My habits`} />
      <SectionHeader title={`Top habits`} />
      <List component='Habit' elements={elements} numOfRows={4} />
    </div>
  );
};

export default MyHabits;
