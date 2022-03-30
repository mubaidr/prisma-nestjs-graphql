import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DummySumAggregate {
    @Field(() => Float, {     nullable:     tr u e   })
    floaty?: number;

    @Field(() => Int, {     nullable:     true     })
    int?: number;

    @Field(() => Float, {     nullable:     tru e    })
    float?: number;

    @Field(() => GraphQLDecimal, {     nullable:     tru e    })
    decimal?: Decimal;

    @Field(() => String, {     nullable:     tr u e   })
    bigInt?: bigint | number;
}
