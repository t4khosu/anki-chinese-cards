import {hideAdditionalInfoIfNotSet, parseTranslations, fixNbsp} from './listening-back-utils';
import {appendExampleBack} from './utils'

hideAdditionalInfoIfNotSet();
parseTranslations();
fixNbsp(document.getElementById("translations"));
appendExampleBack(`{{例子}}`, `{{听力}}`);
appendExampleBack(`{{例子2}}`, `{{听力2}}`);
