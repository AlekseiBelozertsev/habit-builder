export type Streak = {
    id: string;
    name: string;
    duration: number;
    isFinished: boolean;
    isInterrupted: boolean;
};

export type Habit = {
    id: string;
    name: string;
    illustration: string;
    streaks: Streak[];
    isFinished: boolean;
};

export const allHabits: Habit[] = [
    {
        id: '21-ds-2e21e-sa',
        name: 'Teethbrushing',
        illustration: 'path.cvg',
        streaks: [{id: '', name: '', duration: 2, isFinished: false, isInterrupted: false}],
        isFinished: false,
    }
];