import {fixNbsp, showAdditionalInfoDivIfDefined, tryToParseTranslationsToList, appendExampleBack} from "./shared";

showAdditionalInfoDivIfDefined();
tryToParseTranslationsToList();
fixNbsp(document.getElementById("translations"));
appendExampleBack(`{{例子}}`, `{{听力}}`);
appendExampleBack(`{{例子2}}`, `{{听力2}}`);
