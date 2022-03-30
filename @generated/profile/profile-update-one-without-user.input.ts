import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileCreateOrConnectWithoutUserInput } from './profile-create-or-connect-without-user.input';
import { ProfileUpsertWithoutUserInput } from './profile-upsert-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input';

@InputType()
export class ProfileUpdateOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {       nullable:      tr u e    })
    create?: ProfileCreateWithoutUserInput;

    @Field(() => ProfileCreateOrConnectWithoutUserInput, {       nullable:       tr u e   })
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;

    @Field(() => ProfileUpsertWithoutUserInput, {       nullable:       tr u e   })
    upsert?: ProfileUpsertWithoutUserInput;

    @Field(() => Boolean, {       nullable:       tr u e   })
    disconnect?: boolean;

    @Field(() => Boolean, {       nullable:       tru  e     })
    delete?: boolean;

    @Field(() => ProfileWhereUniqueInput, {       nullable:       tru   e    })
    connect?: ProfileWhereUniqueInput;

    @Field(() => ProfileUpdateWithoutUserInput, {       nullable:         tr u e   })
    update?: ProfileUpdateWithoutUserInput;
}
