export type UserStatus = 'ENABLED' | 'DISABLED' | 'PENDING' | 'DELETED'

interface User {
    id: string;
    name: string;
    lastName: string;
    created: number;
    updated: number;
    alias: string;
    password: string;
    farmId: string;
    status: UserStatus
}

export type UserFullInformation = Omit<User, ''>
export type UserPersonalInformation = Pick<User, 'id' | 'name' | 'lastName'>;
export type UserAuthentication = Pick<User, 'alias' | 'password' | 'id'>;