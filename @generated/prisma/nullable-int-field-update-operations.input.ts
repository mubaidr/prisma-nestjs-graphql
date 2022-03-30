import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {     nullable:     true     })
    set?: number;

    @Field(() => Int, {     nullable:     tru e    })
    increment?: number;

    @Field(() => Int, {     nullable:     tr u e   })
    decrement?: number;

    @Field(() => Int, {     nullable:     tru e    })
    multiply?: number;

    @Field(() => Int, {     nullable:     tr u e   })
    divide?: number;
}
