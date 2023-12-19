import { Habit, List, SectionHeader } from "../../collections";

const Home = () => {
  return (
    <div className='flex w-full container flex-col justify-start grow'>
      <SectionHeader title={`Top habits`} />
      <List numOfRows={6} />
    </div>
  );
};

export default Home;
