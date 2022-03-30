import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';

@InputType()
export class AcademicWhereInput {
    @Field(() => [AcademicWhereInput], { nullable: true })
    AND?: Array<AcademicWhereInput>;

    @Field(() => [AcademicWhereInput], { nullable: true })
    OR?: Array<AcademicWhereInput>;

    @Field(() => [AcademicWhereInput], { nullable: true })
    NOT?: Array<AcademicWhereInput>;

    @Field(() => IntFilter, { nullable: true })
    id?: IntFilter;

    @Field(() => StringFilter, { nullable: true })
    institute?: StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    passingDate?: DateTimeFilter;

    @Field(() => IntFilter, { nullable: true })
    duration?: IntFilter;

    @Field(() => IntFilter, { nullable: true })
    total?: IntFilter;

    @Field(() => DecimalFilter, { nullable: true })
    obtained?: DecimalFilter;

    @Field(() => DecimalFilter, { nullable: true })
    percentage?: DecimalFilter;

    @Field(() => IntFilter, { nullable: true })
    division?: IntFilter;
}
