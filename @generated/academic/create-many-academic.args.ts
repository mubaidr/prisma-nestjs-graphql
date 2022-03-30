import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AcademicCreateManyInput } from './academic-create-many.input';

@ArgsType()
export class CreateManyAcademicArgs {
    @Field(() => [AcademicCreateManyInput], { nullable: false })
    data!: Array<AcademicCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
