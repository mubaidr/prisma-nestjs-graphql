import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { UserOrderByWithAggregationInput } from './user-order-by-with-aggregation.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
import { UserScalarWhereWithAggregatesInput } from './user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserAvgAggregateInput } from './user-avg-aggregate.input';
import { UserSumAggregateInput } from './user-sum-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {           nullable:            t r  u  e     })
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithAggregationInput], {           nullable:            t r  u  e     })
    orderBy?: Array<UserOrderByWithAggregationInput>;

    @Field(() => [UserScalarFieldEnum], {           nullable:      fal s e  })
    by!: Array<keyof typeof UserScalarFieldEnum>;

    @Field(() => UserScalarWhereWithAggregatesInput, {         nullable:               t r u   e    })
    having?: UserScalarWhereWithAggregatesInput;

    @Field(() => Int, {        nullable:          t r  u   e    })
    take?: number;

    @Field(() => Int, {       nullable:      tru  e    })
    skip?: number;

    @Field(() => UserCountAggregateInput, {           nullable:     tr u e   })
    _count?: UserCountAggregateInput;

    @Field(() => UserAvgAggregateInput, {           nullable:     tr u e   })
    _avg?: UserAvgAggregateInput;

    @Field(() => UserSumAggregateInput, {           nullable:          t r u e   })
    _sum?: UserSumAggregateInput;

    @Field(() => UserMinAggregateInput, {       nullable:            t r u e   })
    _min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, {     nullable:    tru e   })
    _max?: UserMaxAggregateInput;
}
