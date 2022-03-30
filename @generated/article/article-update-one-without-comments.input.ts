import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';

@InputType()
export class ArticleUpdateOneWithoutCommentsInput {
    @Field(() => ArticleCreateWithoutCommentsInput, {       nullable:      tr u e    })
    create?: ArticleCreateWithoutCommentsInput;

    @Field(() => ArticleCreateOrConnectWithoutCommentsInput, {       nullable:       tr u e   })
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput;

    @Field(() => ArticleUpsertWithoutCommentsInput, {       nullable:       tr u e   })
    upsert?: ArticleUpsertWithoutCommentsInput;

    @Field(() => Boolean, {       nullable:       tr u e   })
    disconnect?: boolean;

    @Field(() => Boolean, {       nullable:       tru  e     })
    delete?: boolean;

    @Field(() => ArticleWhereUniqueInput, {       nullable:       tru   e    })
    connect?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutCommentsInput, {       nullable:         tr u e   })
    update?: ArticleUpdateWithoutCommentsInput;
}
