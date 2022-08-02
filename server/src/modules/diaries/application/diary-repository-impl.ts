import { DiaryRepository } from "../domain/diary.repository";

export const DiaryRepositoryImpl = (params: { logger: any, datasSource: any }) => (): DiaryRepository => {
    const { logger, datasSource } = params;
    logger.log('funca');
    datasSource;
    return {
        addDiaryEntry: (entry) => {
            return new Promise(() => { })
        },
        getAllDiaryEntries: (pagination) => {
            return new Promise(() => { })
        },
        getDiaryEntryById: (id) => {
            return new Promise(() => { })
        }
    }
}