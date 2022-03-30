import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { BytesNullableWithAggregatesFilter } from '../prisma/bytes-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class DummyScalarWhereWithAggregatesInput {
    @Field(() => [DummyScalarWhereWithAggregatesInput], {           nullable:            t r u  e      })
    AND?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], {           nullable:                t r   u e     })
    OR?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], {             nullable:          t  r u   e      })
    NOT?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {          nullable:               t   r   u e    })
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {           nullable:        tr u   e    })
    created?: DateTimeWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {           nullable:              t r  u     e      })
    floaty?: FloatWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {           nullable:      tru  e    })
    int?: IntNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {           nullable:       tr  u  e   })
    float?: FloatNullableWithAggregatesFilter;

    @Field(() => BytesNullableWithAggregatesFilter, {          nullable:         t  r   u e   })
    bytes?: BytesNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {           nullable:              t r  u   e    })
    decimal?: DecimalNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, {             nullable:                    tr u   e    })
    bigInt?: BigIntNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {      nullable:     tru e    })
    json?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {     nullable:     tr u e   })
    friends?: StringNullableListFilter;
}
