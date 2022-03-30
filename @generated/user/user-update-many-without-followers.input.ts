import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserCreateOrConnectWithoutFollowersInput } from './user-create-or-connect-without-followers.input';
import { UserUpsertWithWhereUniqueWithoutFollowersInput } from './user-upsert-with-where-unique-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFollowersInput } from './user-update-with-where-unique-without-followers.input';
import { UserUpdateManyWithWhereWithoutFollowersInput } from './user-update-many-with-where-without-followers.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], {        nullable:      tr u e    })
    create?: Array<UserCreateWithoutFollowersInput>;

    @Field(() => [UserCreateOrConnectWithoutFollowersInput], {        nullable:       tr u e   })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFollowersInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowersInput], {        nullable:        tr  u  e    })
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFollowersInput>;

    @Field(() => [UserWhereUniqueInput], {         nullable:         t r u  e     })
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {         nullable:       tr u e   })
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {          nullable:           t r u  e   })
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {       nullable:      tru  e    })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowersInput], {          nullable:             t  r u  e    })
    update?: Array<UserUpdateWithWhereUniqueWithoutFollowersInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowersInput], {         nullable:           tr u  e    })
    updateMany?: Array<UserUpdateManyWithWhereWithoutFollowersInput>;

    @Field(() => [UserScalarWhereInput], {      nullable:      t r u e   })
    deleteMany?: Array<UserScalarWhereInput>;
}
