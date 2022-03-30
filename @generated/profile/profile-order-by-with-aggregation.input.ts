import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileCountOrderByAggregateInput } from './profile-count-order-by-aggregate.input';
import { ProfileAvgOrderByAggregateInput } from './profile-avg-order-by-aggregate.input';
import { ProfileMaxOrderByAggregateInput } from './profile-max-order-by-aggregate.input';
import { ProfileMinOrderByAggregateInput } from './profile-min-order-by-aggregate.input';
import { ProfileSumOrderByAggregateInput } from './profile-sum-order-by-aggregate.input';

@InputType()
export class ProfileOrderByWithAggregationInput {
    @Field(() => SortOrder, {        nullable:         t r  u  e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {         nullable:       tru   e    })
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {       nullable:      tru  e    })
    dummy?: keyof typeof SortOrder;

    @Field(() => ProfileCountOrderByAggregateInput, {        nullable:        tr u  e   })
    _count?: ProfileCountOrderByAggregateInput;

    @Field(() => ProfileAvgOrderByAggregateInput, {        nullable:       tr u e   })
    _avg?: ProfileAvgOrderByAggregateInput;

    @Field(() => ProfileMaxOrderByAggregateInput, {        nullable:       tr u e   })
    _max?: ProfileMaxOrderByAggregateInput;

    @Field(() => ProfileMinOrderByAggregateInput, {        nullable:          t r u e   })
    _min?: ProfileMinOrderByAggregateInput;

    @Field(() => ProfileSumOrderByAggregateInput, {      nullable:     tr u e   })
    _sum?: ProfileSumOrderByAggregateInput;
}
