import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicWhereInput } from './academic-where.input';
import { AcademicOrderByWithRelationAndSearchRelevanceInput } from './academic-order-by-with-relation-and-search-relevance.input';
import { AcademicWhereUniqueInput } from './academic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AcademicScalarFieldEnum } from './academic-scalar-field.enum';

@ArgsType()
export class FindManyAcademicArgs {
    @Field(() => AcademicWhereInput, { nullable: true })
    where?: AcademicWhereInput;

    @Field(() => [AcademicOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true,
    })
    orderBy?: Array<AcademicOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => AcademicWhereUniqueInput, { nullable: true })
    cursor?: AcademicWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [AcademicScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof AcademicScalarFieldEnum>;
}
