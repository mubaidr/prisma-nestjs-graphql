import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicUpdateManyMutationInput } from './academic-update-many-mutation.input';
import { AcademicWhereInput } from './academic-where.input';

@ArgsType()
export class UpdateManyAcademicArgs {
    @Field(() => AcademicUpdateManyMutationInput, { nullable: false })
    data!: AcademicUpdateManyMutationInput;

    @Field(() => AcademicWhereInput, { nullable: true })
    where?: AcademicWhereInput;
}
