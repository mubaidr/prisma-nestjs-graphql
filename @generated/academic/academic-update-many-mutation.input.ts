import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';

@InputType()
export class AcademicUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    institute?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    passingDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    total?: IntFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, { nullable: true })
    obtained?: DecimalFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, { nullable: true })
    percentage?: DecimalFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    division?: IntFieldUpdateOperationsInput;
}