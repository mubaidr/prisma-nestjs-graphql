import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserCreateOrConnectWithoutFollowingInput } from './user-create-or-connect-without-following.input';
import { UserUpsertWithWhereUniqueWithoutFollowingInput } from './user-upsert-with-where-unique-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowingInput } from './user-update-with-where-unique-without-following.input';
import { UserUpdateManyWithWhereWithoutFollowingInput } from './user-update-many-with-where-without-following.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {        nullable:      tr u e    })
    create?: Array<UserCreateWithoutFollowingInput>;

    @Field(() => [UserCreateOrConnectWithoutFollowingInput], {        nullable:       tr u e   })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowingInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingInput], {        nullable:        tr  u  e    })
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [UserWhereUniqueInput], {         nullable:         t r u  e     })
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {         nullable:       tr u e   })
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {          nullable:           t r u  e   })
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {       nullable:      tru  e    })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingInput], {          nullable:             t  r u  e    })
    update?: Array<UserUpdateWithWhereUniqueWithoutFollowingInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowingInput], {         nullable:           tr u  e    })
    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowingInput>;

    @Field(() => [UserScalarWhereInput], {      nullable:      t r u e   })
    deleteMany?: Array<UserScalarWhereInput>;
}
