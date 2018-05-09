import Jasmine from 'jasmine';
import { SpecReporter } from 'jasmine-spec-reporter';

const jasmine = new Jasmine();

jasmine.configureDefaultReporter({
  print() {},
});

jasmine.addReporter(
  new SpecReporter({
    spec: {
      displayPending: true,
    },
  }),
);

jasmine.loadConfigFile('./src/spec/support/jasmine.json');
jasmine.execute();
