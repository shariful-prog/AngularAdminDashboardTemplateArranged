
export interface IGenericModel {
    Id: string;
    CreatedBy: string;
    CreatedDate: string;
    UpdatedBy: string;
    UpdatedDate: string;
    IsActive: boolean;
    ContentBaseUrl: string;
    ContentUrl: string;
    Language: string;
    Email: string;
    Password: string;
    FullName: string;
    UserName: string;
}

export class GenericModel implements IGenericModel {
    constructor() { }
    Id: string = '';
    CreatedBy: string = '';
    CreatedDate: string = '';
    UpdatedBy: string = '';
    UpdatedDate: string = '';
    IsActive: boolean = true;
    ContentBaseUrl: string = '';
    ContentUrl: string = '';
    Language: string = '';
    Email: string = '';
    Password: string = '';
    FullName: string = '';
    UserName: string = '';
}

