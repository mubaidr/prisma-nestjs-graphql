import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutArticleInput {
    @Field(() => String, {     nullable:     tru e    })
    id?: string;

    @Field(() => Date, {     nullable:     tru e    })
    createdAt?: Date | string;

    @Field(() => Date, {     nullable:     tr u e   })
    updatedAt?: Date | string;

    @Field(() => String, {     nullable:     fals e    })
    body!: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {     nullable:     fal s e   })
    author!: UserCreateNestedOneWithoutCommentsInput;
}
