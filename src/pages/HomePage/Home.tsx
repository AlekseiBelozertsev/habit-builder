import { Habit, SectionHeader } from "../../collections";

const Home = () => {
  return (
    <div className='flex w-full container flex-col justify-start grow'>
      <SectionHeader title={`Top habits`} />
      <div className='grid lg:grid-cols-4 lg:gap-6 s:grid-cols-1 s:grid-rows-6 w-full h-full lg:pb-6 gap-0.5 divide-y divide-gray-200'>
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
