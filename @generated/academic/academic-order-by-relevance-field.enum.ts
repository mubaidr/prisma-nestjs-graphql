import { registerEnumType } from '@nestjs/graphql';

export enum AcademicOrderByRelevanceFieldEnum {
    institute = 'institute',
}

registerEnumType(AcademicOrderByRelevanceFieldEnum, {
    name: 'AcademicOrderByRelevanceFieldEnum',
    description: undefined,
});
