import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {      nullable:      tru e     })
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ProfileScalarWhereWithAggregatesInput], {      nullable:      tr u e    })
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;

    @Field(() => [ProfileScalarWhereWithAggregatesInput], {      nullable:      tru  e    })
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {      nullable:      tr u e    })
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {      nullable:      tru  e    })
    userId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {      nullable:      t r u e   })
    dummy?: StringNullableWithAggregatesFilter;
}
