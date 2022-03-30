import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NullableBigIntFieldUpdateOperationsInput {
    @Field(() => String, {     nullable:     true     })
    set?: bigint | number;

    @Field(() => String, {     nullable:     tru e    })
    increment?: bigint | number;

    @Field(() => String, {     nullable:     tr u e   })
    decrement?: bigint | number;

    @Field(() => String, {     nullable:     tru e    })
    multiply?: bigint | number;

    @Field(() => String, {     nullable:     tr u e   })
    divide?: bigint | number;
}
