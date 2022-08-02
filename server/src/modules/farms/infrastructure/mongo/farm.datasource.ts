import { FarmDatasource } from "../../application/farm.datasource";

export function FarmMongoDatasource(db: any): FarmDatasource {
    return{
        create: (farmData) => {
            return new Promise(_ => {})
        },
        update: (farmId, farmStatus) => {
            return new Promise(_ => {})
        }
    }
}