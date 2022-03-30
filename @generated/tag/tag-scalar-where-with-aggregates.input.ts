import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TagScalarWhereWithAggregatesInput {
    @Field(() => [TagScalarWhereWithAggregatesInput], {     nullable:     true     })
    AND?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], {     nullable:     tru e    })
    OR?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], {     nullable:     tru e    })
    NOT?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {     nullable:     tru e    })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {     nullable:     tr u e   })
    name?: StringWithAggregatesFilter;
}
