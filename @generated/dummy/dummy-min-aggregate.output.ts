import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class DummyMinAggregate {
    @Field(() => String, {         nullable:       tr u  e    })
    id?: string;

    @Field(() => Date, {       nullable:       tru  e     })
    created?: Date | string;

    @Field(() => Float, {       nullable:        tr u  e   })
    floaty?: number;

    @Field(() => Int, {        nullable:        tr u   e    })
    int?: number;

    @Field(() => Float, {       nullable:       tru   e    })
    float?: number;

    @Field(() => String, {          nullable:             t r  u e   })
    bytes?: Buffer;

    @Field(() => GraphQLDecimal, {       nullable:      tru  e    })
    decimal?: Decimal;

    @Field(() => String, {      nullable:      t r u e   })
    bigInt?: bigint | number;
}
