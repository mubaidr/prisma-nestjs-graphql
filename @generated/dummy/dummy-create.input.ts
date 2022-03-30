import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyCreatefriendsInput } from '../prisma/dummy-createfriends.input';

@InputType()
export class DummyCreateInput {
    @Field(() => String, {          nullable:           fa l s e      })
    id!: string;

    @Field(() => Date, {          nullable:          t r u   e     })
    created?: Date | string;

    @Field(() => Float, {         nullable:              fa l s e   })
    floaty!: number;

    @Field(() => Int, {         nullable:           t r u   e    })
    int?: number;

    @Field(() => Float, {        nullable:        tr u e    })
    float?: number;

    @Field(() => String, {               nullable:               t r u  e   })
    bytes?: Buffer;

    @Field(() => GraphQLDecimal, {          nullable:          t r  u   e    })
    decimal?: Decimal;

    @Field(() => String, {          nullable:            tr u   e    })
    bigInt?: bigint | number;

    @Field(() => GraphQLJSON, {       nullable:       tr u  e    })
    json?: any;

    @Field(() => DummyCreatefriendsInput, {      nullable:      t r u e   })
    friends?: DummyCreatefriendsInput;
}
