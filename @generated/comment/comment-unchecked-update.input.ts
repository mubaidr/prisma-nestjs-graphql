import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class CommentUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {     nullable:     tru e    })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {     nullable:     tru e    })
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {     nullable:     tru e    })
    body?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {     nullable:     tr u e   })
    authorId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {     nullable:     tr u e   })
    articleId?: NullableStringFieldUpdateOperationsInput;
}
