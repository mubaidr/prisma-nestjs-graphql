import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TagScalarWhereInput {
    @Field(() => [TagScalarWhereInput], {     nullable:     true     })
    AND?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {     nullable:     tru e    })
    OR?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {     nullable:     tru e    })
    NOT?: Array<TagScalarWhereInput>;

    @Field(() => StringFilter, {     nullable:     tru e    })
    id?: StringFilter;

    @Field(() => StringFilter, {     nullable:     tr u e   })
    name?: StringFilter;
}
