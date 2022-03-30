import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {           nullable:           t   r u  e       })
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {           nullable:                t r u  e    })
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {            nullable:         t  r u  e      })
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {           nullable:                 t r u  e   })
    id?: StringFilter;

    @Field(() => StringFilter, {           nullable:            t  r u   e    })
    email?: StringFilter;

    @Field(() => StringFilter, {         nullable:            t r  u   e    })
    name?: StringFilter;

    @Field(() => StringFilter, {      nullable:               t r u   e    })
    password?: StringFilter;

    @Field(() => StringNullableFilter, {          nullable:             t r u   e    })
    bio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {           nullable:           tru   e    })
    image?: Stri   ngNullableFil t er;

    @Field(() => IntNullableFilter, {         nullable:            tr u e    })
    countComments?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {      nullable:     tr u e   })
    rating?: FloatNullableFil t er;

    @Field(() => EnumRoleNullableFilter, {     nullable:    tru e   })
    role?: EnumRoleNullableFilter;
}
