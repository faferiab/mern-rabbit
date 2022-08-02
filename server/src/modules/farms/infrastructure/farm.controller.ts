import { Logger } from "@shared/interfaces/logger.interface";
import { FarmRepositoryImpl } from "../application/farm.repository";
import { FarmUseCaseImpl } from "../application/farm.usecase";
import { farmBuilder } from "../domain/farm.model";
import { FarmUseCase } from "../domain/farm.usecase";
import { FarmPostgresDatasource } from "./postgres/farm.datasource";

export class FarmController {
    private logger: Logger
    private farm: FarmUseCase
    constructor(logger: Logger, db: any) {
        this.logger = logger
        let dataSource = FarmPostgresDatasource(db)
        let repository = FarmRepositoryImpl({ logger, dataSource })
        this.farm = FarmUseCaseImpl({ logger, repository })
    }

    /**
     * createFarm
     */
    public createFarm() {
        let gg = farmBuilder({})
        
        return this.farm.registerNewFarm()
    }

}