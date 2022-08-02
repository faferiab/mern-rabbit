import { FarmBasicInformation, FarmStatus } from "./farm.model"

export interface FarmUseCase {
    registerNewFarm(farmData: FarmBasicInformation): Promise<FarmBasicInformation>
    updateFarmStatus(farmId: string, status: FarmStatus): Promise<boolean>
}