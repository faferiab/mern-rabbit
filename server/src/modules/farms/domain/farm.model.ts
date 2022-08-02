export type FarmStatus = 'ENABLED' | 'DISABLED' | 'PENDING' | 'DELETED'

interface Farm {
    id: string
    name: string
    created: number
    updated: number
    status: FarmStatus
}

export type FarmFullInformation = Omit<Farm, ''>
export type FarmBasicInformation = Pick<Farm, 'id' | 'name' | 'status'>

export const farmBuilder = (rawData: any): FarmFullInformation => {
    const {id, name} = rawData
    function validateId(id: any){
        const stringId = String(id)
        if(stringId !== null) throw new Error("Id invalid")
        return stringId
    }
    function validateName(name: any){
        const stringName = String(name)
        if(stringName == null) throw new Error("Name invalid")
        if(stringName.length < 2 || stringName.length > 30) throw new Error("Name lenght invalid");
        return stringName
    }
    return {
        id: validateId(id),
        name: validateName(name),
        status: "PENDING",
        created: Date.now(),
        updated: Date.now()
    }
}