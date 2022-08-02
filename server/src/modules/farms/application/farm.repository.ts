import { Logger } from "@shared/interfaces/logger.interface";
import { FarmRepository } from "../domain/farm.repository";
import { FarmDatasource } from "./farm.datasource";

export function FarmRepositoryImpl(params: { logger: Logger, dataSource: FarmDatasource }): FarmRepository {
    const { logger, dataSource } = params
    return {
        addFarm: async (farmData) => {
            logger.info('Adding farm', farmData)
            const newFarm = await dataSource.create(farmData)
            return newFarm.id !== null
        },
        updateFarmStatus: async (farmId, status) => {
            logger.info('Updating farm', farmId, status)
            const updateFarm = await dataSource.update(farmId, status)
            return updateFarm.status === status
        },
        getFarmStatusById: async (farmId) => {
            logger.info('Getting farm', farmId)
            const farmData = await dataSource.get(farmId)
            return farmData.status
        }
    }
}