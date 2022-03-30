import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';

@ObjectType()
export class CommentGroupBy {
    @Field(() => String, {         nullable:         fal s e       })
    id!: string;

    @Field(() => Date, {         nullable:         fal s  e      })
    createdAt!: Date | string;

    @Field(() => Date, {         nullable:         fa l s   e    })
    updatedAt!: Date | string;

    @Field(() => String, {         nullable:          fals   e     })
    body!: string;

    @Field(() => String, {          nullable:              fa l s e   })
    authorId!: string;

    @Field(() => String, {       nullable:       tru   e    })
    articleId?: string;

    @Field(() => CommentCountAggregate, {        nullable:         tr u e   })
    _count?: CommentCountAggregate;

    @Field(() => CommentMinAggregate, {         nullable:           tr u e   })
    _min?: CommentMinAggregate;

    @Field(() => CommentMaxAggregate, {      nullable:      t r u e   })
    _max?: CommentMaxAggregate;
}
