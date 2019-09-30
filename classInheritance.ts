// class inheritance

class BaseClass implements Ibase {
    id: number;
}

class DerivedFromBase extends BaseClass  implements IDerivedFromBase{
    name: string;
}