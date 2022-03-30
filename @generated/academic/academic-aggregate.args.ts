import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicWhereInput } from './academic-where.input';
import { AcademicOrderByWithRelationAndSearchRelevanceInput } from './academic-order-by-with-relation-and-search-relevance.input';
import { AcademicWhereUniqueInput } from './academic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AcademicCountAggregateInput } from './academic-count-aggregate.input';
import { AcademicAvgAggregateInput } from './academic-avg-aggregate.input';
import { AcademicSumAggregateInput } from './academic-sum-aggregate.input';
import { AcademicMinAggregateInput } from './academic-min-aggregate.input';
import { AcademicMaxAggregateInput } from './academic-max-aggregate.input';

@ArgsType()
export class AcademicAggregateArgs {
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

    @Field(() => AcademicCountAggregateInput, { nullable: true })
    _count?: AcademicCountAggregateInput;

    @Field(() => AcademicAvgAggregateInput, { nullable: true })
    _avg?: AcademicAvgAggregateInput;

    @Field(() => AcademicSumAggregateInput, { nullable: true })
    _sum?: AcademicSumAggregateInput;

    @Field(() => AcademicMinAggregateInput, { nullable: true })
    _min?: AcademicMinAggregateInput;

    @Field(() => AcademicMaxAggregateInput, { nullable: true })
    _max?: AcademicMaxAggregateInput;
}
