import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { ArticleCreateNestedOneWithoutCommentsInput } from '../article/article-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateInput {
    @Field(() => String, {      nullable:      tr u e    })
    id?: string;

    @Field(() => Date, {      nullable:      tru e     })
    createdAt?: Date | string;

    @Field(() => Date, {      nullable:      tru  e    })
    updatedAt?: Date | string;

    @Field(() => String, {      nullable:      fals  e    })
    body!: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {      nullable:      fa l s e   })
    author!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => ArticleCreateNestedOneWithoutCommentsInput, {      nullable:      t r u e   })
    article?: ArticleCreateNestedOneWithoutCommentsInput;
}
