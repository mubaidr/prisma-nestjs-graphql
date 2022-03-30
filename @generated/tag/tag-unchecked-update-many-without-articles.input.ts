import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpdateManyWithWhereWithoutArticlesInput } from './tag-update-many-with-where-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], {          nullable:       tr u e   })
    create?: Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagCreateOrConnectWithoutArticlesInput], {        nullable:       tr u e   })
    connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], {        nullable:            t r  u e    })
    upsert?: Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], {          nullable:       tru  e     })
    set?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {         nullable:       tr u e   })
    disconnect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {          nullable:        t r  u  e   })
    delete?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {      nullable:        tr  u  e    })
    connect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], {          nullable:          t r  u   e    })
    update?: Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutArticlesInput], {          nullable:          tr u e    })
    updateMany?: Array<TagUpdateManyWithWhereWithoutArticlesInput>;

    @Field(() => [TagScalarWhereInput], {     nullable:      t r u e   })
    deleteMany?: Array<TagScalarWhereInput>;
}
