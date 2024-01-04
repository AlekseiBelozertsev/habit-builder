const dummyIcon = require("../assets/dummy.svg").default;
export type Streak = {
  id: string;
  title: string;
  subtitle: string;
  targetDuration: number;
  currentDuration: number;
  startDate: Date;
  endDate: Date;
  completed: boolean;
};

export type Habit = {
  id: string;
  title: string;
  subtitle: string;
  illustration: string;
  streaks: Streak[];
  isFinished: boolean;
};

export const allStreaks: Streak[] = [
  {
    id: "0",
    title: "Meditation",
    subtitle: "10 minutes of mindfulness",
    targetDuration: 10,
    currentDuration: 5,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "1",
    title: "Learn a New Language",
    subtitle: "Practice for 15 minutes",
    targetDuration: 15,
    currentDuration: 7,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "2",
    title: "Hydrate",
    subtitle: "Drink 8 glasses of water",
    targetDuration: 8,
    currentDuration: 4,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "3",
    title: "Write in Journal",
    subtitle: "Reflect for 10 minutes",
    targetDuration: 10,
    currentDuration: 5,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "4",
    title: "No Social Media",
    subtitle: "Take a break for 24 hours",
    targetDuration: 24,
    currentDuration: 12,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "5",
    title: "Healthy Eating",
    subtitle: "Include vegetables in every meal",
    targetDuration: 7,
    currentDuration: 3,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "6",
    title: "Gratitude Practice",
    subtitle: "List 3 things you're grateful for",
    targetDuration: 3,
    currentDuration: 2,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "7",
    title: "Early Wake-up",
    subtitle: "Wake up at 6 AM",
    targetDuration: 30,
    currentDuration: 15,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "8",
    title: "Digital Detox",
    subtitle: "No screen time after 9 PM",
    targetDuration: 30,
    currentDuration: 15,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
  {
    id: "9",
    title: "Stretching",
    subtitle: "10 minutes of stretching exercises",
    targetDuration: 10,
    currentDuration: 5,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    completed: false,
  },
];

export const allHabits: Habit[] = [
  {
    id: "h0",
    title: "Exercise Routine",
    subtitle: "Stay active and healthy",
    illustration: dummyIcon,
    streaks: [allStreaks[0], allStreaks[1], allStreaks[2]], // Add streaks as needed
    isFinished: false,
  },
  {
    id: "h1",
    title: "Mindfulness Meditation",
    subtitle: "Calm your mind",
    illustration: dummyIcon,
    streaks: [allStreaks[3]], // Add streaks as needed
    isFinished: false,
  },
  {
    id: "h2",
    title: "Language Learning",
    subtitle: "Expand your language skills",
    illustration: dummyIcon,
    streaks: [allStreaks[4]], // Add streaks as needed
    isFinished: false,
  },
  {
    id: "h3",
    title: "Hydration Challenge",
    subtitle: "Drink more water",
    illustration: dummyIcon,
    streaks: [allStreaks[5]], // Add streaks as needed
    isFinished: false,
  },
  {
    id: "h4",
    title: "Reflective Journaling",
    subtitle: "Express your thoughts",
    illustration: dummyIcon,
    streaks: [allStreaks[6]], // Add streaks as needed
    isFinished: false,
  },
  {
    id: "h5",
    title: "Social Media Detox",
    subtitle: "Take a break from social media",
    illustration: dummyIcon,
    streaks: [allStreaks[7]], // Add streaks as needed
    isFinished: false,
  },
  {
    id: "h6",
    title: "Healthy Eating Habits",
    subtitle: "Incorporate more veggies",
    illustration: dummyIcon,
    streaks: [allStreaks[8]], // Add streaks as needed
    isFinished: false,
  },
  {
    id: "h7",
    title: "Gratitude Practice",
    subtitle: "Cultivate gratitude",
    illustration: dummyIcon,
    streaks: [allStreaks[9]], // Add streaks as needed
    isFinished: false,
  },
];

export const myHabits: Habit[] = [
  allHabits[0],
  allHabits[1],
  allHabits[2],
  allHabits[3],
];
