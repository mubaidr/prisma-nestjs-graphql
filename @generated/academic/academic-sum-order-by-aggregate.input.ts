import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AcademicSumOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

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
}
