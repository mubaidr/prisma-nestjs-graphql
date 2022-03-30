import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedOneWithoutCommentsInput } from '../article/article-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutAuthorInput {
    @Field(() => String, {     nullable:     tru e    })
    id?: string;

    @Field(() => Date, {     nullable:     tru e    })
    createdAt?: Date | string;

    @Field(() => Date, {     nullable:     tru e    })
    updatedAt?: Date | string;

    @Field(() => String, {     nullable:    fal s e  })
    body!: string;

    @Field(() => ArticleCreateNestedOneWithoutCommentsInput, {     nullable:     tr u e   })
    article?: ArticleCreateNestedOneWithoutCommentsInput;
}
