const dummyIcon = require("../assets/dummy.svg").default;
// export type Streak = {
//   id: string;
//   title: string;
//   duration: number;
//   isFinished: boolean;
//   isInterrupted: boolean;
// };

export type Habit = {
  id: string;
  title: string;
  subtitle: string;
  illustration: string;
  //   streaks: Streak[];
  isFinished: boolean;
};

// export const allStreaks: Streak[] = [
//   {
//     id: "s1",
//     title: "Morning Brush",
//     duration: 14,
//     isFinished: false,
//     isInterrupted: false,
//   },
//   {
//     id: "s2",
//     title: "Evening Brush",
//     duration: 14,
//     isFinished: false,
//     isInterrupted: false,
//   },
//   {
//     id: "s3",
//     title: "Daytime Rinse",
//     duration: 14,
//     isFinished: false,
//     isInterrupted: false,
//   },
//   {
//     id: "s4",
//     title: "Morning Run",
//     duration: 7,
//     isFinished: true,
//     isInterrupted: false,
//   },
//   {
//     id: "s5",
//     title: "Evening Workout",
//     duration: 7,
//     isFinished: false,
//     isInterrupted: false,
//   },
//   {
//     id: "s6",
//     title: "Healthy Eating",
//     duration: 21,
//     isFinished: true,
//     isInterrupted: false,
//   },
//   {
//     id: "s7",
//     title: "Vocabulary Practice",
//     duration: 30,
//     isFinished: false,
//     isInterrupted: true,
//   },
//   {
//     id: "s8",
//     title: "Daily Conversation",
//     duration: 15,
//     isFinished: false,
//     isInterrupted: false,
//   },
// ];

export const allHabits: Habit[] = [
  {
    id: "h1",
    title: "Teeth Brushing",
    subtitle: "Something is written here",
    illustration: dummyIcon,
    isFinished: false,
  },
  {
    id: "h2",
    title: "Exercise",
    subtitle: "Something was there",
    illustration: dummyIcon,
    isFinished: false,
  },
  {
    id: "h3",
    title: "Stop eating sugar",
    subtitle: "Something is",
    illustration: dummyIcon,
    isFinished: false,
  },
  {
    id: "h4",
    title: "Learning a Language",
    subtitle: "Something is cool",
    illustration: dummyIcon,
    isFinished: false,
  },
  {
    id: "h5",
    title: "Wake up in time",
    subtitle: "Something is not",
    illustration: dummyIcon,
    isFinished: false,
  },
  {
    id: "h6",
    title: "Stop interrupting",
    subtitle: "Something is eating me!",
    illustration: dummyIcon,
    isFinished: false,
  },
  {
    id: "h7",
    title: "Drink more water",
    subtitle: "Something terrible",
    illustration: dummyIcon,
    isFinished: false,
  },
];

export const myHabits: Habit[] = [
  allHabits[0],
  allHabits[1],
  allHabits[2],
  allHabits[3],
];
