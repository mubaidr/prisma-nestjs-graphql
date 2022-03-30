import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input';
import { CommentUpsertWithWhereUniqueWithoutAuthorInput } from './comment-upsert-with-where-unique-without-author.input';
import { CommentCreateManyAuthorInputEnvelope } from './comment-create-many-author-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutAuthorInput } from './comment-update-with-where-unique-without-author.input';
import { CommentUpdateManyWithWhereWithoutAuthorInput } from './comment-update-many-with-where-without-author.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {         nullable:       tr u e   })
    create?: Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {         nullable:       tr u e   })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {          nullable:       tr u e   })
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => CommentCreateManyAuthorInputEnvelope, {        nullable:             t r  u e   })
    createMany?: CommentCreateManyAuthorInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {           nullable:       tru  e     })
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {          nullable:       tr u e   })
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {           nullable:         t  r   u e   })
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {     nullable:              tr u e    })
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {           nullable:          t r  u   e    })
    update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {         nullable:             tr u  e    })
    updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [CommentScalarWhereInput], {      nullable:      t r u e   })
    deleteMany?: Array<CommentScalarWhereInput>;
}
