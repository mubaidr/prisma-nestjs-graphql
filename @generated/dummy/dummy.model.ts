import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Dummy {
    @Field(() => ID, {          nullable:           f a l s e     })
    id!: string;

    @Field(() => Date, {          nullable:             fa l s  e     })
    created!: Date;

    @Field(() => Float, {         nullable:              fa l s e   })
    floaty!: number;

    @Field(() => Int, {           nullable:         t r u   e    })
    int!: number | null;

    @Field(() => Float, {          nullable:         t r  u e   })
    float!: number | null;

    @Field(() => String, {          nullable:         t r  u e   })
    bytes!: Buffer | null;

    @Field(() => GraphQLDecimal, {             nullable:                t r  u   e    })
    decimal!: Decimal | null;

    @Field(() => String, {         nullable:         tr u  e    })
    bigInt!: bigint | null;

    @Field(() => GraphQLJSON, {      nullable:      tru  e    })
    json!: any | null;

    @Field(() => [String], {      nullable:      t r u e   })
    friends!: Array<string>;
}
