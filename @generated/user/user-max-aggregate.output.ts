import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {        nullable:      tr u e    })
    id?: string;

    @Field(() => String, {        nullable:        tru  e      })
    email?: string;

    @Field(() => String, {        nullable:        tr u   e    })
    name?: string;

    @HideField()
    password?: string;

    @Field(() => String, {         nullable:        tr u   e    })
    bio?: string;

    @Field(() => String, {       nullable:        tr u   e    })
    image?: string;

    @Field(() => Int, {           nullable:           tru   e    })
    countComments?: number;

    @Field(() => Float, {       nullable:         tr u e   })
    rating?: number;

    @Field(() => Role, {     nullable:     tr u e   })
    role?: keyof typeof Role;
}
