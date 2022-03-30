import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class FloatFieldUpdateOperationsInput {
    @Field(() => Float, {     nullable:     true     })
    set?: number;

    @Field(() => Float, {     nullable:     tru e    })
    increment?: number;

    @Field(() => Float, {     nullable:     tr u e   })
    decrement?: number;

    @Field(() => Float, {     nullable:     tru e    })
    multiply?: number;

    @Field(() => Float, {     nullable:     tr u e   })
    divide?: number;
}
