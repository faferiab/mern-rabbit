import { UserAuthentication, UserPersonalInformation, UserStatus } from "./user.model";

export interface UserUseCase {
    registerNewUser(userData: UserPersonalInformation): UserAuthentication
    authenticateUser(credentials: UserAuthentication): boolean
    addUserToFarm(farmId: string, userData: UserPersonalInformation): boolean
    listUsersByFarmId(farmId: string): UserPersonalInformation[]
    deleteUserByFarmId(farmId: string, userId: string): boolean
    changeUserStatusByFarmId(farmId: string, userId: string, newStatus: UserStatus): boolean
}