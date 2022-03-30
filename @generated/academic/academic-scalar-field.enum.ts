import { registerEnumType } from '@nestjs/graphql';

export enum AcademicScalarFieldEnum {
    id = 'id',
    institute = 'institute',
    passingDate = 'passingDate',
    duration = 'duration',
    total = 'total',
    obtained = 'obtained',
    percentage = 'percentage',
    division = 'division',
}

registerEnumType(AcademicScalarFieldEnum, {
    name: 'AcademicScalarFieldEnum',
    description: undefined,
});
