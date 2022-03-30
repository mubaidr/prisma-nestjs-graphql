import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserWhereInput } from '../user/user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProfileWhereInput {
    @Field(() => [ProfileWhereInput], {       nullable:       tru e      })
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {       nullable:       tr u  e    })
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {       nullable:       tru   e    })
    NOT?: Array<ProfileWhereInput>;

    @Field(() => IntFilter, {       nullable:       tr u  e    })
    id?: IntFilter;

    @Field(() => UserWhereInput, {       nullable:        tr  u e   })
    user?: UserWhereInput;

    @Field(() => StringFilter, {        nullable:       tr u  e    })
    userId?: StringFilter;

    @Field(() => StringNullableFilter, {      nullable:      t r u e   })
    dummy?: StringNullableFilter;
}
