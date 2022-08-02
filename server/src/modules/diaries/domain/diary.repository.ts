import { Pagination } from "../../../shared/interfaces/pagination.interface";
import { DiaryEntry } from "./diary.model";

export interface DiaryRepository {
    getDiaryEntryById(id: number): Promise<DiaryEntry>
    getAllDiaryEntries(pagination: Pagination): Promise<DiaryEntry[]>
    addDiaryEntry(diary: DiaryEntry): Promise<boolean>
}