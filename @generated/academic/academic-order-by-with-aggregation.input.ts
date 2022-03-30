import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AcademicCountOrderByAggregateInput } from './academic-count-order-by-aggregate.input';
import { AcademicAvgOrderByAggregateInput } from './academic-avg-order-by-aggregate.input';
import { AcademicMaxOrderByAggregateInput } from './academic-max-order-by-aggregate.input';
import { AcademicMinOrderByAggregateInput } from './academic-min-order-by-aggregate.input';
import { AcademicSumOrderByAggregateInput } from './academic-sum-order-by-aggregate.input';

@InputType()
export class AcademicOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    institute?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    passingDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    obtained?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    percentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    division?: keyof typeof SortOrder;

    @Field(() => AcademicCountOrderByAggregateInput, { nullable: true })
    _count?: AcademicCountOrderByAggregateInput;

    @Field(() => AcademicAvgOrderByAggregateInput, { nullable: true })
    _avg?: AcademicAvgOrderByAggregateInput;

    @Field(() => AcademicMaxOrderByAggregateInput, { nullable: true })
    _max?: AcademicMaxOrderByAggregateInput;

    @Field(() => AcademicMinOrderByAggregateInput, { nullable: true })
    _min?: AcademicMinOrderByAggregateInput;

    @Field(() => AcademicSumOrderByAggregateInput, { nullable: true })
    _sum?: AcademicSumOrderByAggregateInput;
}
