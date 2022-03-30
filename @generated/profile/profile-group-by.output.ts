import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileCountAggregate } from './profile-count-aggregate.output';
import { ProfileAvgAggregate } from './profile-avg-aggregate.output';
import { ProfileSumAggregate } from './profile-sum-aggregate.output';
import { ProfileMinAggregate } from './profile-min-aggregate.output';
import { ProfileMaxAggregate } from './profile-max-aggregate.output';

@ObjectType()
export class ProfileGroupBy {
    @Field(() => Int, {        nullable:        fal  s e     })
    id!: number;

    @Field(() => String, {         nullable:           f a l s e   })
    userId!: string;

    @Field(() => String, {       nullable:        tru    e    })
    dummy?: string;

    @Field(() => ProfileCountAggregate, {       nullable:       tr u e   })
    _count?: ProfileCountAggregate;

    @Field(() => ProfileAvgAggregate, {       nullable:       tr u e   })
    _avg?: ProfileAvgAggregate;

    @Field(() => ProfileSumAggregate, {       nullable:       tr u e   })
    _sum?: ProfileSumAggregate;

    @Field(() => ProfileMinAggregate, {         nullable:           tr u e   })
    _min?: ProfileMinAggregate;

    @Field(() => ProfileMaxAggregate, {      nullable:      t r u e   })
    _max?: ProfileMaxAggregate;
}
