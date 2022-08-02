import { FarmBasicInformation, FarmFullInformation, FarmStatus } from "../domain/farm.model";

export interface FarmDatasource {
    create(farmData: FarmBasicInformation): Promise<FarmFullInformation>
    update(farmId: string, status: FarmStatus): Promise<FarmFullInformation>
    get(farmId: string): Promise<FarmFullInformation>
}