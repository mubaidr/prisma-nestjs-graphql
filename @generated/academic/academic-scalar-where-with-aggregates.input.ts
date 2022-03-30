import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';

@InputType()
export class AcademicScalarWhereWithAggregatesInput {
    @Field(() => [AcademicScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<AcademicScalarWhereWithAggregatesInput>;

    @Field(() => [AcademicScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<AcademicScalarWhereWithAggregatesInput>;

    @Field(() => [AcademicScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<AcademicScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    institute?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    passingDate?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    duration?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    total?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, { nullable: true })
    obtained?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, { nullable: true })
    percentage?: DecimalWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    division?: IntWithAggregatesFilter;
}
