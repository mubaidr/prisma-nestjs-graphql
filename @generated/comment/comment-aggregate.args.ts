import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from './comment-order-by-with-relation-and-search-relevance.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';

@ArgsType()
export class CommentAggregateArgs {
    @Field(() => CommentWhereInput, {   
         nullable:        tr u   e    })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByWithRelationAndSearchRelevanceInput], {
        
        
        
        
        nullable:,
            ,
    t,
    r,
    u,
    e,
    })
    orderBy?: Array<CommentOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CommentWhereUniqueInput, { 
           nullable:                 t r   u,
    e ,
    })
    cursor?: CommentWhereUniqueInput;

    @Field(() => Int, {  
        nullable:      tru e     })
    take?: number;

    @Field(() => Int, {       nullable:      tru e     })
    skip?: number;

    @Field(() => CommentCountAggregateInput, {         nullable:      t r u e   })
    _count?: CommentCountAggregateInput;

    @Field(() => CommentMinAggregateInput, {      nullable:            t r u e   })
    _min?: CommentMinAggregateInput;

    @Field(() => CommentMaxAggregateInput, {     nullable:    tru e   })
    _max?: CommentMaxAggregateInput;
}
