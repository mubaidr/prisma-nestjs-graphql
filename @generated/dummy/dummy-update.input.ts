import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableBytesFieldUpdateOperationsInput } from '../prisma/nullable-bytes-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DummyUpdatefriendsInput } from '../prisma/dummy-updatefriends.input';

@InputType()
export class DummyUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {        nullable:        tr u  e     })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {         nullable:         tr u   e     })
    created?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {          nullable:         t r  u e   })
    floaty?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {          nullable:        tr u   e    })
    int?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {        nullable:       tr u e   })
    float?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableBytesFieldUpdateOperationsInput, {          nullable:          t r  u  e   })
    bytes?: NullableBytesFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {          nullable:           t r u   e    })
    decimal?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {         nullable:            t r u  e    })
    bigInt?:    NullableBigIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {       nullable:         tr u  e    })
    json?: any;

    @Field(() => DummyUpdatefriendsInput, {      nullable:     tr u e   })
    friends?: DummyUpdatefriendsInput;
}
