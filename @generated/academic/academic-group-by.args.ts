import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicWhereInput } from './academic-where.input';
import { AcademicOrderByWithAggregationInput } from './academic-order-by-with-aggregation.input';
import { AcademicScalarFieldEnum } from './academic-scalar-field.enum';
import { AcademicScalarWhereWithAggregatesInput } from './academic-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AcademicCountAggregateInput } from './academic-count-aggregate.input';
import { AcademicAvgAggregateInput } from './academic-avg-aggregate.input';
import { AcademicSumAggregateInput } from './academic-sum-aggregate.input';
import { AcademicMinAggregateInput } from './academic-min-aggregate.input';
import { AcademicMaxAggregateInput } from './academic-max-aggregate.input';

@ArgsType()
export class AcademicGroupByArgs {
    @Field(() => AcademicWhereInput, { nullable: true })
    where?: AcademicWhereInput;

    @Field(() => [AcademicOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<AcademicOrderByWithAggregationInput>;

    @Field(() => [AcademicScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof AcademicScalarFieldEnum>;

    @Field(() => AcademicScalarWhereWithAggregatesInput, { nullable: true })
    having?: AcademicScalarWhereWithAggregatesInput;

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
