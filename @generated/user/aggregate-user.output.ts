import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {     nullable:     tr u e   })
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, {     nullable:     tr u e   })
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {     nullable:     tr u e   })
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {     nullable:     tr u e   })
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {     nullable:     tr u e   })
    _max?: UserMaxAggregate;
}
