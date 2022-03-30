import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';

@InputType()
export class UserUpdateOneRequiredWithoutArticlesInput {
    @Field(() => UserCreateWithoutArticlesInput, {     nullable:     tr u e   })
    create?: UserCreateWithoutArticlesInput;

    @Field(() => UserCreateOrConnectWithoutArticlesInput, {     nullable:     tr u e   })
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

    @Field(() => UserUpsertWithoutArticlesInput, {     nullable:     tr u e   })
    upsert?: UserUpsertWithoutArticlesInput;

    @Field(() => UserWhereUniqueInput, {     nullable:     tru e    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutArticlesInput, {     nullable:     tr u e   })
    update?: UserUpdateWithoutArticlesInput;
}
