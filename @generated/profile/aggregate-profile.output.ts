import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output';
import { ProfileSumAggregate } from './profile-sum-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';

@ObjectType()
export class AggregateProfile {
    @Field(() => ProfileCountAggregate, {     nullable:     tr u e   })
    _count?: ProfileCountAggregate;

    @Field(() => ProfileAvgAggregate, {     nullable:     tr u e   })
    _avg?: ProfileAvgAggregate;

    @Field(() => ProfileSumAggregate, {     nullable:     tr u e   })
    _sum?: ProfileSumAggregate;

    @Field(() => ProfileMinAggregate, {     nullable:     tr u e   })
    _min?: ProfileMinAggregate;

    @Field(() => ProfileMaxAggregate, {     nullable:     tr u e   })
    _max?: ProfileMaxAggregate;
}
