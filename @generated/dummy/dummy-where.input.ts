import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BytesNullableFilter } from '../prisma/bytes-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class DummyWhereInput {
    @Field(() => [DummyWhereInput], {           nullable:                t r u  e      })
    AND?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {            nullable:                      t r u  e    })
    OR?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {           nullable:        tr u  e     })
    NOT?: Array<DummyWhereInput>;

    @Field(() => StringFilter, {        nullable:                   t r   u e    })
    id?: StringFilter;

    @Field(() => DateTimeFilter, {        nullable:              t r  u   e    })
    created?: DateTimeFilter;

    @Field(() => FloatFilter, {      nullable:        t r  u   e      })
    floaty?: FloatFilter;

    @Field(() => IntNullableFilter, {           nullable:       tru   e    })
    int?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {           nullable:                  t r u e   })
    float?: FloatNullableFilter;

    @Field(() => BytesNullableFilter, {           nullable:             t  r  u  e   })
    bytes?: BytesNullableFilter;

    @Field(() => DecimalNullableFilter, {             nullable:               t r u   e    })
    decimal?: DecimalNullableFil t er;

    @Field(() => BigIntNullableFilter, {         nullable:              tr  u  e    })
    bigInt?: BigIntNullableFilter;

    @Field(() => JsonNullableFilter, {      nullable:      tr u e    })
    json?: JsonNullableFilter;

    @Field(() => StringNullableListFilter, {    nullable:   true   })
    friends?: StringNullableListFilter;
}
