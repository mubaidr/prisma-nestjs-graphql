import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedJsonNullableFilter } from './nested-json-nullable-filter.input';

@InputType()
export class JsonNullableWithAggregatesFilter {
    @Field(() => GraphQLJSON, {               nullable:                           t  r u  e      })
    equals?: any;

    @Field(() => [String], {            nullable:               t r u  e     })
    path?: Array<string>;

    @Field(() => String, {              nullable:              tr     u   e      })
    string_contains?: string;

    @Field(() => String, {              nullable:                tr     u e      })
    string_starts_with?: string;

    @Field(() => String, {       nullable:         tr u    e    })
    string_ends_with?: string;

    @Field(() => GraphQLJSON, {           nullable:           t  r     u  e      })
    array_contains?: any;

    @Field(() => GraphQLJSON, {           nullable:                   t  r  u  e   })
    array_starts_with?: any;

    @Field(() => GraphQLJSON, {           nullable:                   tr u  e    })
    array_ends_with?: any;

    @Field(() => GraphQLJSON, {                nullable:                         t r  u e   })
    lt?: any;

    @Field(() => GraphQLJSON, {           nullable:                 t r  u  e    })
    lte?: any;

    @Field(() => GraphQLJSON, {         nullable:         t r u  e   })
    gt?: any;

    @Field(() => GraphQLJSON, {        nullable:        tr u e    })
    gte?: any;

    @Field(() => GraphQLJSON, {        nullable:            tr u e    })
    not?: any;

    @Field(() => NestedIntNullableFilter, {       nullable:      t r u e   })
    _count?: NestedIntNullableFil t er;

    @Field(() => NestedJsonNullableFilter, {       nullable:      t r u e   })
    _min?: NestedJsonNullableFilter;

    @Field(() => NestedJsonNullableFilter, {     nullable:    tru e   })
    _max?: NestedJsonNullableFilter;
}
