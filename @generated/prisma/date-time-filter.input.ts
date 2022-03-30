import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedDateTimeFilter } from './nested-date-time-filter.input';

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {        nullable:        tru   e     })
    equals?: Date | string;

    @Field(() => [Date], {        nullable:       tr   u e     })
    in?: Array<Date> | Array<string>;

    @Field(() => [Date], {        nullable:       tr u e   })
    notIn?: Array<Date> | Array<string>;

    @Field(() => Date, {         nullable:         tr  u  e   })
    lt?: Date | string;

    @Field(() => Date, {         nullable:           tr u  e    })
    lte?: Date | string;

    @Field(() => Date, {        nullable:         tr  u  e   })
    gt?: Date | string;

    @Field(() => Date, {      nullable:      tr u e    })
    gte?: Date | string;

    @Field(() => NestedDateTimeFilter, {      nullable:      t r u e   })
    not?: NestedDateTimeFilter;
}
