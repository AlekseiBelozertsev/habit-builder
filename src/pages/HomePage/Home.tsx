import { Habit, SectionHeader } from "../../collections";

const Home = () => {
  return (
    <div className='flex flex-col justify-start grow'>
      <SectionHeader title={`Top habits`} />
      <div className='grid grid-cols-1 grid-rows-6 h-full gap-0.5 divide-y divide-gray-200'>
        <Habit />
        <Habit />
        <Habit />
        <Habit />
        <Habit />
        <Habit />
      </div>
    </div>
  );
};

export default Home;
