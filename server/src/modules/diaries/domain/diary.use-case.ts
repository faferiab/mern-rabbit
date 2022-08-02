import { Pagination } from "../../../shared/interfaces/pagination.interface";
import { DiaryEntry, SimpleDiaryEntry } from "./diary.model";

export interface DiaryUseCase {
    getAllDiariesUseCase(pagination: Pagination): Promise<SimpleDiaryEntry[]>
    getDiaryUseCase(id: number): Promise<DiaryEntry>
    createDiaryUseCase(diary: DiaryEntry): Promise<boolean>
}