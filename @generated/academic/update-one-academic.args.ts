import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicUpdateInput } from './academic-update.input';
import { AcademicWhereUniqueInput } from './academic-where-unique.input';

@ArgsType()
export class UpdateOneAcademicArgs {
    @Field(() => AcademicUpdateInput, { nullable: false })
    data!: AcademicUpdateInput;

    @Field(() => AcademicWhereUniqueInput, { nullable: false })
    where!: AcademicWhereUniqueInput;
}
