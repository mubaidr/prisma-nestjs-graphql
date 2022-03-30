import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserCreateOrConnectWithoutProfileInput } from './user-create-or-connect-without-profile.input';
import { UserUpsertWithoutProfileInput } from './user-upsert-without-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input';

@InputType()
export class UserUpdateOneRequiredWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {     nullable:     tr u e   })
    create?: UserCreateWithoutProfileInput;

    @Field(() => UserCreateOrConnectWithoutProfileInput, {     nullable:     tr u e   })
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;

    @Field(() => UserUpsertWithoutProfileInput, {     nullable:     tr u e   })
    upsert?: UserUpsertWithoutProfileInput;

    @Field(() => UserWhereUniqueInput, {     nullable:     tru e    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProfileInput, {     nullable:     tr u e   })
    update?: UserUpdateWithoutProfileInput;
}
