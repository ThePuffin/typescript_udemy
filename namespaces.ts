//namespaces

namespace FirstNameSpace {
  class NotExported {}
  export class NameSpaceClass {
    id: number;
  }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass();
// impossible because not exported:
// let notExported = new FirstNameSpace.notExported();

namespace SecondNameSpace {
  export class NameSpaceClass {
    name: string;
  }
}
let secondNameSpace = new SecondNameSpace.NameSpaceClass();
