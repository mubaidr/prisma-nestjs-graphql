import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';
import { CommentUpsertWithWhereUniqueWithoutArticleInput } from './comment-upsert-with-where-unique-without-article.input';
import { CommentCreateManyArticleInputEnvelope } from './comment-create-many-article-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutArticleInput } from './comment-update-with-where-unique-without-article.input';
import { CommentUpdateManyWithWhereWithoutArticleInput } from './comment-update-many-with-where-without-article.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {         nullable:        tr u e    })
    create?: Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentCreateOrConnectWithoutArticleInput], {         nullable:       tr u e   })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutArticleInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutArticleInput], {           nullable:       tr u e   })
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutArticleInput>;

    @Field(() => CommentCreateManyArticleInputEnvelope, {         nullable:           t r  u e   })
    createMany?: CommentCreateManyArticleInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {          nullable:        tr u  e     })
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {         nullable:       tr u e   })
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {          nullable:        t r   u e   })
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {      nullable:           t  r u e     })
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutArticleInput], {          nullable:           t  r u   e     })
    update?: Array<CommentUpdateWithWhereUniqueWithoutArticleInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutArticleInput], {         nullable:            tr u e    })
    updateMany?: Array<CommentUpdateManyWithWhereWithoutArticleInput>;

    @Field(() => [CommentScalarWhereInput], {     nullable:      t r u e   })
    deleteMany?: Array<CommentScalarWhereInput>;
}
