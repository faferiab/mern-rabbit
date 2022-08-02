export type Weather = 'cloud' | 'raining';
export type Visibiity = 1 | 2 | 3 | 4 | 5;

interface Diary {
    id: number;
    date: string;
    weather: Weather;
    visibiity: Visibiity;
    comment: string;
}

export type DiaryEntry = Omit<Diary, ''>;
export type SimpleDiaryEntry = Omit<Diary, 'comment'>;