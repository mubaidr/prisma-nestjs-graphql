import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicWhereUniqueInput } from './academic-where-unique.input';

@ArgsType()
export class FindUniqueAcademicArgs {
    @Field(() => AcademicWhereUniqueInput, { nullable: false })
    where!: AcademicWhereUniqueInput;
}
