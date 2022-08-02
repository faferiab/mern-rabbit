import { Logger } from "@shared/interfaces/logger.interface";
import { FarmFullInformation } from "../domain/farm.model";
import { FarmRepository } from "../domain/farm.repository";
import { FarmUseCase } from "../domain/farm.usecase";

export function FarmUseCaseImpl(params: { logger: Logger, repository: FarmRepository, idGenerator: any }): FarmUseCase {
    const { logger, repository, idGenerator } = params
    return {
        registerNewFarm: async (farmData) => {
            try {
                let fullFarmData: FarmFullInformation = {
                    id: idGenerator.getId(),
                    name: farmData.name,
                    status: "PENDING",
                    created: Date.now(),
                    updated: Date.now()
                }
                if (await repository.addFarm(fullFarmData)) {
                    farmData.id = fullFarmData.id
                    return farmData
                }
                logger.error('registerNewFarm', `${repository.addFarm.name} return false`)
                throw new Error('Farm not created');
            } catch (error) {
                logger.error('registerNewFarm', error)
                throw new Error('Farm not created');
            }
        },
        updateFarmStatus: async (farmId, farmStatus) => {
            try {
                return await repository.updateFarmStatus(farmId, farmStatus)
            } catch (error) {
                logger.error('updateFarmStatus', error)
                return false
            }
        }
    }
}