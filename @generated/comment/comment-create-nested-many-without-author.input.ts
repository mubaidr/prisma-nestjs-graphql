import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input';
import { CommentCreateManyAuthorInputEnvelope } from './comment-create-many-author-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {    nullable:    tru e   })
    create?: Array<CommentCreateWithoutAuthorInput>;

    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {    nullable:    tru e   })
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

    @Field(() => CommentCreateManyAuthorInputEnvelope, {    nullable:    tru e   })
    createMany?: CommentCreateManyAuthorInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {    nullable:    tru e   })
    connect?: Array<CommentWhereUniqueInput>;
}
