import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {    nullable:    tru e   })
    create?: Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentCreateOrConnectWithoutArticleInput], {    nullable:    tru e   })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

    @Field(() => CommentCreateManyArticleInputEnvelope, {    nullable:    tru e   })
    createMany?: CommentCreateManyArticleInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {    nullable:    tru e   })
    connect?: Array<CommentWhereUniqueInput>;
}
