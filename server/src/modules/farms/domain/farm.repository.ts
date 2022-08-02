import { FarmFullInformation, FarmStatus } from "./farm.model"

export interface FarmRepository {
    addFarm(farmData: FarmFullInformation): Promise<boolean>
    updateFarmStatus(farmId: string, status: FarmStatus): Promise<boolean>
    getFarmStatusById(farmId: string): Promise<FarmStatus>
}