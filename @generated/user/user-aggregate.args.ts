import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from './user-order-by-with-relation-and-search-relevance.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {         nullable:          t r u   e     })
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithRelationAndSearchRelevanceInput], {          nullable:          t r   u   e     })
    orderBy?: Array<UserOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => UserWhereUniqueInput, {         nullable:            t   r u   e     })
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {         nullable:          t r  u   e    })
    take?: number;

    @Field(() => Int, {        nullable:      tru  e    })
    skip?: number;

    @Field(() => UserCountAggregateInput, {         nullable:       tr u e   })
    _count?: UserCountAggregateInput;

    @Field(() => UserAvgAggregateInput, {          nullable:     tr u e   })
    _avg?: UserAvgAggregateInput;

    @Field(() => UserSumAggregateInput, {          nullable:              t r u e   })
    _sum?: UserSumAggregateInput;

    @Field(() => UserMinAggregateInput, {      nullable:     tr u e   })
    _min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, {     nullable:     tr u e   })
    _max?: UserMaxAggregateInput;
}
