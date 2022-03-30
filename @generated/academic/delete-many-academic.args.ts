import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicWhereInput } from './academic-where.input';

@ArgsType()
export class DeleteManyAcademicArgs {
    @Field(() => AcademicWhereInput, { nullable: true })
    where?: AcademicWhereInput;
}
