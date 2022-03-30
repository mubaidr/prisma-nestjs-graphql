import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DummyCountAggregate {
    @Field(() => Int, {        nullable:       fals  e     })
    id!: number;

    @Field(() => Int, {          nullable:              fa l  s    e     })
    created!: number;

    @Field(() => Int, {          nullable:               f a l s e   })
    floaty!: number;

    @Field(() => Int, {          nullable:              fal s  e     })
    int!: number;

    @Field(() => Int, {          nullable:      fal  s e   })
    float!: number;

    @Field(() => Int, {          nullable:             f  a l s  e   })
    bytes!: number;

    @Field(() => Int, {          nullable:             f a  l s   e    })
    decimal!: number;

    @Field(() => Int, {             nullable:              fal s   e    })
    bigInt!: number;

    @Field(() => Int, {       nullable:          fal s   e    })
    json!: number;

    @Field(() => Int, {      nullable:      fal s e    })
    friends!: number;

    @Field(() => Int, {     nullable:    fals e   })
    _all!: number;
}
