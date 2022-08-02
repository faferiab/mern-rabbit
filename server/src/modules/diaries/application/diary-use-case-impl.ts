import { DataMapper } from "../../../shared/interfaces/data-mapper.interface";
import { Pagination } from "../../../shared/interfaces/pagination.interface";
import { DiaryEntry, SimpleDiaryEntry } from "../domain/diary.model";
import { DiaryRepository } from "../domain/diary.repository";
import { DiaryUseCase } from "../domain/diary.use-case";

const SimplifyDiary: DataMapper<DiaryEntry, SimpleDiaryEntry> = {
    toEntity: function (_data: SimpleDiaryEntry): DiaryEntry {
        throw new Error("Function not implemented.");
    },
    toData: function (entity: DiaryEntry): SimpleDiaryEntry {
        return {
            id: entity.id,
            date: entity.date,
            visibiity: entity.visibiity,
            weather: entity.weather
        }
    }
}

export const DiaryUseCaseImpl = (params: { logger: any, repository: DiaryRepository }) => (): DiaryUseCase => {
    const { logger, repository } = params;
    return {
        getAllDiariesUseCase: (pagination: Pagination) => {
            logger.log('working')
            return (repository.getAllDiaryEntries(pagination))
                .then(data => {
                    return data.map(oldData => SimplifyDiary.toData(oldData))
                });
        },
        getDiaryUseCase: (id: number) => {
            return (repository.getDiaryEntryById(id))
                .then(data => {
                    return data;
                });
        },
        createDiaryUseCase: (diary: DiaryEntry) => {
            return (repository.addDiaryEntry(diary))
                .then(data => {
                    return data;
                });
        },
    }
}