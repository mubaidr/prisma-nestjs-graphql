import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {          nullable:      tr u e    })
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {        nullable:          fa l  s  e     })
    email!: string;

    @Field(() => String, {         nullable:         fa l s  e     })
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name!: string;

    @Field(() => String, {        nullable:             f a l s e   })
    password!: string;

    @Field(() => String, {         nullable:         t r u   e    })
    bio?: string;

    @Field(() => String, {          nullable:       tru   e    })
    image?: string;

    @Field(() => Int, {          nullable:            tru  e    })
    countComments?: number;

    @Field(() => Float, {       nullable:         tr u e   })
    rating?: number;

    @Field(() => Role, {     nullable:     tr u e   })
    role?: keyof typeof Role;
}
