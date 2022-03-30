import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {          nullable:                   f a l s  e    })
    id!: string;

    @Field(() => String, {          nullable:                    fal s  e     })
    email!: string;

    @Field(() => String, {           nullable:                   f a l s e   })
    name!: string;

    @HideField()
    password!: string;

    @Field(() => String, {                 nullable:                        t  r u   e    })
    bio?: string;

    @Field(() => String, {            nullable:        tr u   e    })
    image?: string;

    @Field(() => Int, {           nullable:               t r u   e    })
    countComments?: number;

    @Field(() => Float, {      nullable:      tr  u e   })
    rating?: number;

    @Field(() => Role, {       nullable:       tru   e    })
    role?: keyof typeof Role;

    @Field(() => UserCountAggregate, {      nullable:     tr u e   })
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, {           nullable:              t r u e   })
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {        nullable:        t r u e   })
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {       nullable:        t r u e   })
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {     nullable:    tru e   })
    _max?: UserMaxAggregate;
}
