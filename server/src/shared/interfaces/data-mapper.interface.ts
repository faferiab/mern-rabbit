export interface DataMapper<ENTITY, DATA> {
    toEntity(data: DATA): ENTITY;
    toData(entity: ENTITY): DATA;
  };