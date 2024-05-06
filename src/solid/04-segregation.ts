interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() { }
  public eat() { }
}

class Humminbird implements Bird, FlyingBird {
  public fly() { }
  public eat() { }
}

class Ostrich implements Bird, RunningBird {
  public run() { }
  public eat() { }
}

class Panguin implements Bird, RunningBird, SwimmerBird {
  public eat() { }
  public run() { }
  public swim() { }
}

class Duck implements Bird, FlyingBird, RunningBird, SwimmerBird {
  public eat() { }
  public fly() { }
  public run() { }
  public swim() { }
}