import { List, SectionHeader } from "../../collections";
import { Habit, allHabits } from "../../config";

const Home: React.FC = () => {
  const elements: Habit[] = allHabits;
  return (
    <div className='flex w-full container flex-col justify-start grow'>
      <SectionHeader title={`Top habits`} />
      <List component='Habit' elements={elements} numOfRows={6} />
    </div>
  );
};

export default Home;
