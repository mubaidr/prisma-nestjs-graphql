import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommentUncheckedCreateWithoutArticleInput {
    @Field(() => String, {     nullable:     tru e    })
    id?: string;

    @Field(() => Date, {     nullable:     tru e    })
    createdAt?: Date | string;

    @Field(() => Date, {     nullable:     tr u e   })
    updatedAt?: Date | string;

    @Field(() => String, {     nullable:     fals e    })
    body!: string;

    @Field(() => String, {     nullable:     fal s e   })
    authorId!: string;
}
