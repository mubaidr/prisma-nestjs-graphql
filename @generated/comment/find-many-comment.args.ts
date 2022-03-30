import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from './comment-order-by-with-relation-and-search-relevance.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, {   
          nullable:      tru  e    })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByWithRelationAndSearchRelevanceInput], {
        
        nullable:       ,
    t,
    r,
    u,
    e,
    })
    orderBy?: Array<CommentOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CommentWhereUniqueInput, { 
          nullable:        t r  u   e ,
    })
    cursor?: CommentWhereUniqueInput;

    @Field(() => Int, {       nullable:     tru e    })
    take?: number;

    @Field(() => Int, {     nullable:      tr u e    })
    skip?: number;

    @Field(() => [CommentScalarFieldEnum], {     nullable:     tr u e   })
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}
