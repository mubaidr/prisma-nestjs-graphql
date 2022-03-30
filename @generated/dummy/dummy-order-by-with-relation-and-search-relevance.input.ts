import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DummyOrderByRelevanceInput } from './dummy-order-by-relevance.input';

@InputType()
export class DummyOrderByWithRelationAndSearchRelevanceInput {
    @Field(() => SortOrder, {           nullable:         tr  u e    })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:          t r u   e     })
    created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {          nullable:              t r   u e     })
    floaty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {          nullable:        tru   e     })
    int?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:        tr  u e   })
    float?: keyof typeof SortOrder;

    @Field(() => SortOrder, {           nullable:           t  r   u e   })
    bytes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {          nullable:            t r  u   e    })
    decimal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {            nullable:              t  r u   e    })
    bigInt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {            nullable:                 tr u  e    })
    json?: keyof typeof SortOrder;

    @Field(() => SortOrder, {     nullable:      tr u e    })
    friends?: keyof typeof SortOrder;

    @Field(() => DummyOrderByRelevanceInput, {     nullable:    tru e   })
    _relevance?: DummyOrderByRelevanceInput;
}
