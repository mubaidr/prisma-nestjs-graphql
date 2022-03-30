import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserAvgOrderByAggregateInput } from './user-avg-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
import { UserSumOrderByAggregateInput } from './user-sum-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {           nullable:       tr u  e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                 t  r u  e      })
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                t r   u  e      })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                 t r u   e    })
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                      t  r u   e    })
    bio?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:                 t r u   e    })
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {                nullable:         t r u   e    })
    countComments?: keyof typeof SortOrder;

    @Field(() => SortOrder, {       nullable:         tr  u  e   })
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:     tru e    })
    role?: keyof typeof SortOrder;

    @Field(() => UserCountOrderByAggregateInput, {           nullable:       tr u e   })
    _count?: UserCountOrderByAggregateInput;

    @Field(() => UserAvgOrderByAggregateInput, {               nullable:              t r u e   })
    _avg?: UserAvgOrderByAggregateInput;

    @Field(() => UserMaxOrderByAggregateInput, {          nullable:        tr u e    })
    _max?: UserMaxOrderByAggregateInput;

    @Field(() => UserMinOrderByAggregateInput, {      nullable:        t r u e   })
    _min?: UserMinOrderByAggregateInput;

    @Field(() => UserSumOrderByAggregateInput, {    nullable:    tru e   })
    _sum?: UserSumOrderByAggregateInput;
}
