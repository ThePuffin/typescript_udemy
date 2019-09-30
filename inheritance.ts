// inheritance

interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}

class InterfaceInheritance implements IDerivedFromBase {
  id: number;
  name: string;
}

interface IBaseBis {
  idbis: number;
}

interface INotDerivedFromBase {
  namebis: string;
}

class InterfaceInheritanceBis implements IBaseBis, INotDerivedFromBase {
  idbis: number;
  namebis: string;
}
