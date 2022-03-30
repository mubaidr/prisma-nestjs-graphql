import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class JsonNullableFilter {
    @Field(() => GraphQLJSON, {             nullable:              t   r u   e       })
    equals?: any;

    @Field(() => [String], {          nullable:              t r u   e     })
    path?: Array<string>;

    @Field(() => String, {           nullable:            tr u     e    })
    string_contains?: string;

    @Field(() => String, {             nullable:              tr    u  e      })
    string_starts_with?: string;

    @Field(() => String, {       nullable:       tru   e    })
    string_ends_with?: string;

    @Field(() => GraphQLJSON, {           nullable:        t r     u  e      })
    array_contains?: any;

    @Field(() => GraphQLJSON, {           nullable:                t   r   u e   })
    array_starts_with?: any;

    @Field(() => GraphQLJSON, {            nullable:               tr u  e    })
    array_ends_with?: any;

    @Field(() => GraphQLJSON, {           nullable:                 t  r  u  e   })
    lt?: any;

    @Field(() => GraphQLJSON, {            nullable:                    tr u e    })
    lte?: any;

    @Field(() => GraphQLJSON, {       nullable:       t r u  e   })
    gt?: any;

    @Field(() => GraphQLJSON, {      nullable:     tru e    })
    gte?: any;

    @Field(() => GraphQLJSON, {    nullable:    tru e   })
    not?: any;
}
