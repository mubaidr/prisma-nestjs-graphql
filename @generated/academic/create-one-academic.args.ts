import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicCreateInput } from './academic-create.input';

@ArgsType()
export class CreateOneAcademicArgs {
    @Field(() => AcademicCreateInput, { nullable: false })
    data!: AcademicCreateInput;
}
