import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleCreateOrConnectWithoutTagsInput } from './article-create-or-connect-without-tags.input';
import { ArticleUpsertWithWhereUniqueWithoutTagsInput } from './article-upsert-with-where-unique-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutTagsInput } from './article-update-with-where-unique-without-tags.input';
import { ArticleUpdateManyWithWhereWithoutTagsInput } from './article-update-many-with-where-without-tags.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

@InputType()
export class ArticleUncheckedUpdateManyWithoutTagsInput {
    @Field(() => [ArticleCreateWithoutTagsInput], {        nullable:      tr u e    })
    create?: Array<ArticleCreateWithoutTagsInput>;

    @Field(() => [ArticleCreateOrConnectWithoutTagsInput], {        nullable:       tr u e   })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutTagsInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutTagsInput], {        nullable:        tr  u  e    })
    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ArticleWhereUniqueInput], {         nullable:         t r u  e     })
    set?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {         nullable:       tr u e   })
    disconnect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {          nullable:           t r u  e   })
    delete?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {       nullable:      tru  e    })
    connect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutTagsInput], {          nullable:             t  r u  e    })
    update?: Array<ArticleUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutTagsInput], {         nullable:           tr u  e    })
    updateMany?: Array<ArticleUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ArticleScalarWhereInput], {      nullable:      t r u e   })
    deleteMany?: Array<ArticleScalarWhereInput>;
}
