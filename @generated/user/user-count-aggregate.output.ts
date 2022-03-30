import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {         nullable:       fal s  e    })
    id!: number;

    @Field(() => Int, {         nullable:         fal s   e     })
    email!: number;

    @Field(() => Int, {         nullable:        fals   e     })
    name!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {         nullable:          fa l s   e     })
    bio!: number;

    @Field(() => Int, {          nullable:       fals   e    })
    image!: number;

    @Field(() => Int, {          nullable:          fa l s  e    })
    countComments!: number;

    @Field(() => Int, {         nullable:            fa l   s e   })
    rating!: number;

    @Field(() => Int, {      nullable:       fa l s e    })
    role!: number;

    @Field(() => Int, {     nullable:    fals e   })
    _all!: number;
}
