import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class NullableDecimalFieldUpdateOperationsInput {
    @Field(() => GraphQLDecimal, {     nullable:     true     })
    set?: Decimal;

    @Field(() => GraphQLDecimal, {     nullable:     tru e    })
    increment?: Decimal;

    @Field(() => GraphQLDecimal, {     nullable:     tr u e   })
    decrement?: Decimal;

    @Field(() => GraphQLDecimal, {     nullable:     tru e    })
    multiply?: Decimal;

    @Field(() => GraphQLDecimal, {     nullable:     tr u e   })
    divide?: Decimal;
}
