import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TagCountOrderByAggregateInput } from './tag-count-order-by-aggregate.input';
import { TagMaxOrderByAggregateInput } from './tag-max-order-by-aggregate.input';
import { TagMinOrderByAggregateInput } from './tag-min-order-by-aggregate.input';

@InputType()
export class TagOrderByWithAggregationInput {
    @Field(() => SortOrder, {     nullable:     tru e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tru e    })
    name?: keyof typeof SortOrder;

    @Field(() => TagCountOrderByAggregateInput, {     nullable:     tr u e   })
    _count?: TagCountOrderByAggregateInput;

    @Field(() => TagMaxOrderByAggregateInput, {     nullable:     tr u e   })
    _max?: TagMaxOrderByAggregateInput;

    @Field(() => TagMinOrderByAggregateInput, {     nullable:     tr u e   })
    _min?: TagMinOrderByAggregateInput;
}
