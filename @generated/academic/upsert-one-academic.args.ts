import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicWhereUniqueInput } from './academic-where-unique.input';
import { AcademicCreateInput } from './academic-create.input';
import { AcademicUpdateInput } from './academic-update.input';

@ArgsType()
export class UpsertOneAcademicArgs {
    @Field(() => AcademicWhereUniqueInput, { nullable: false })
    where!: AcademicWhereUniqueInput;

    @Field(() => AcademicCreateInput, { nullable: false })
    create!: AcademicCreateInput;

    @Field(() => AcademicUpdateInput, { nullable: false })
    update!: AcademicUpdateInput;
}
