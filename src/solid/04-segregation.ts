interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  public fly() { }
  public eat() { }
  public run() { }
  public swim() { }
}

class Humminbird implements Bird {
  public fly() { }
  public eat() { }
  public run() { }
  public swim() { }
}

class Ostrich implements Bird {
  public fly() {
    throw new Error("Ño");
  }
  public eat() { }
  public run() { }
  public swim() { }
}

class Panguin implements Bird {
  public fly() {
    throw new Error("Ño");
  }
  public eat() { }
  public run() { }
  public swim() { }
}