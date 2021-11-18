import lodashPick = require('lodash.pick');

import * as models from '../../infrastructure/models';

export class MainView {

  public index(mains: models.Main[]) {
    return mains.map(main => this.one(main));
  }

  public one(main: models.Main) {
    return lodashPick(
      main,
      [
        'id',
        'firstName',
        'lastName',
        'email',
        'isDraft',
      ],
    );
  }

}
