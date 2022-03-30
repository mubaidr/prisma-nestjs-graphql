import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleCreateOrConnectWithoutFavoritedByInput } from './article-create-or-connect-without-favorited-by.input';
import { ArticleUpsertWithWhereUniqueWithoutFavoritedByInput } from './article-upsert-with-where-unique-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutFavoritedByInput } from './article-update-with-where-unique-without-favorited-by.input';
import { ArticleUpdateManyWithWhereWithoutFavoritedByInput } from './article-update-many-with-where-without-favorited-by.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

@InputType()
export class ArticleUncheckedUpdateManyWithoutFavoritedByInput {
    @Field(() => [ArticleCreateWithoutFavoritedByInput], {        nullable:      tr u  e   })
    create?: Array<ArticleCreateWithoutFavoritedByInput>;

    @Field(() => [ArticleCreateOrConnectWithoutFavoritedByInput], {  
         nullable:    tru,
    e  ,
    })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutFavoritedByInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutFavoritedByInput], {
        
        
        
        nullable:,
       ,
         ,
          ,
    t,
    r,
    u,
    e,
    })
    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutFavoritedByInput>;

    @Field(() => [ArticleWhereUniqueInput], {          nullable:       tru  e     })
    set?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {        nullable:     tr u e   })
    disconnect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {        nullable:          ,
    t,
    r u  e   })
    delete?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {     nullable:,
              ,
    t,
    r,
    u ,
    e    })
    connect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutFavoritedByInput], {
        
        
        
        
        
          nullable:      ,
     ,
       ,
     ,
          ,
    t,
    r,
    u,
    e,
    })
    update?: Array<ArticleUpdateWithWhereUniqueWithoutFavoritedByInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutFavoritedByInput], {
        
        
         nullable:    t r,
    u,
    e,
    })
    updateMany?: Array<ArticleUpdateManyWithWhereWithoutFavoritedByInput>;

    @Field(() => [ArticleScalarWhereInput], {     nullable:     tr u e   })
    deleteMany?: Array<ArticleScalarWhereInput>;
}
