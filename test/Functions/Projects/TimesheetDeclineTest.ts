/**
 * Copyright 2019 Sage Intacct, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "LICENSE" file accompanying this file. This file is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import * as chai from "chai";
import TimesheetDecline from "../../../src/Functions/Projects/TimesheetDecline";
import XmlObjectTestHelper from "../../Xml/XmlObjectTestHelper";

describe("TimesheetDecline", () => {
  before(done => {
    return done();
  });
  beforeEach(done => {
    return done();
  });
  afterEach(done => {
    return done();
  });
  after(done => {
    return done();
  });
  it("should decline timesheet", () => {
    const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <decline>
            <TIMESHEET>
                <RECORDNO>2</RECORDNO>
                <ENTRYKEYS>497,323</ENTRYKEYS>
                <DECLINEDBY>John</DECLINEDBY>
                <COMMENT>Declined by John</COMMENT>
            </TIMESHEET>
        </decline>
    </function>
</test>`;

    const record = new TimesheetDecline("unittest");
    record.recordNo = 2;
    record.declinedBy = "John";
    record.comment = "Declined by John";
    record.entryKeys = [497, 323];

    XmlObjectTestHelper.CompareXml(expected, record);
  });
});