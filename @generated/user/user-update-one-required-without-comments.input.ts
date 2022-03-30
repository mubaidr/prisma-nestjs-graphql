import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserUpsertWithoutCommentsInput } from './user-upsert-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';

@InputType()
export class UserUpdateOneRequiredWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, {     nullable:     tr u e   })
    create?: UserCreateWithoutCommentsInput;

    @Field(() => UserCreateOrConnectWithoutCommentsInput, {     nullable:     tr u e   })
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

    @Field(() => UserUpsertWithoutCommentsInput, {     nullable:     tr u e   })
    upsert?: UserUpsertWithoutCommentsInput;

    @Field(() => UserWhereUniqueInput, {     nullable:     tru e    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCommentsInput, {     nullable:     tr u e   })
    update?: UserUpdateWithoutCommentsInput;
}
