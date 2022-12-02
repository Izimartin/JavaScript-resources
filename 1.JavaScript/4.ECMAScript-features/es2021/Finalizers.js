const registry = new FinalizationRegistry(value => {
    // Do some stuff
  });

registry.register({greeting: "Hello World"}, "greetingObject");
