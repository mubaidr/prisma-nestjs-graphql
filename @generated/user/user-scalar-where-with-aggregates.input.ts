import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { EnumRoleNullableWithAggregatesFilter } from '../prisma/enum-role-nullable-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {           nullable:         tr   u  e      })
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {           nullable:               t r  u  e    })
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {          nullable:         t r u  e     })
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {           nullable:         t r  u  e    })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {           nullable:             t r u   e    })
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {           nullable:              t r  u   e    })
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {           nullable:        tr u   e    })
    password?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {         nullable:          t r  u   e    })
    bio?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {           nullable:         t r u   e    })
    image?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {             nullable:              tr u e    })
    countComments?: IntNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {       nullable:         tr u e   })
    rating?: FloatNullableWithAggregatesFilter;

    @Field(() => EnumRoleNullableWithAggregatesFilter, {    nullable:    tru e   })
    role?: EnumRoleNullableWithAggregatesFilter;
}
