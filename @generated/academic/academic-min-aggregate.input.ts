import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AcademicMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    institute?: true;

    @Field(() => Boolean, { nullable: true })
    passingDate?: true;

    @Field(() => Boolean, { nullable: true })
    duration?: true;

    @Field(() => Boolean, { nullable: true })
    total?: true;

    @Field(() => Boolean, { nullable: true })
    obtained?: true;

    @Field(() => Boolean, { nullable: true })
    percentage?: true;

    @Field(() => Boolean, { nullable: true })
    division?: true;
}
