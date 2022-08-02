import { Pagination } from "@shared/interfaces/pagination.interface";
import { UserAuthentication, UserPersonalInformation, UserStatus } from "./user.model";

export interface UserRepository {
    addUser(userData: UserPersonalInformation): UserAuthentication
    listUsersByFarmId(farmId: string, pagination: Pagination): UserPersonalInformation
    updateUserStatus(userId: string, status: UserStatus): boolean
    getUserById(userId: string): UserPersonalInformation
    loginUser(credentials: UserAuthentication): boolean
}