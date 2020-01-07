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

import TimesheetUpdate from "../../../src/Functions/Projects/TimesheetUpdate";
import XmlObjectTestHelper from "../../Xml/XmlObjectTestHelper";

describe("TimesheetUpdate", () => {
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
  it("should build TimesheetUpdate object", () => {
    const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <update>
            <TIMESHEET>
                <EMPLOYEEID>E1234</EMPLOYEEID>
                <BEGINDATE>06/30/2016</BEGINDATE>
            </TIMESHEET>
        </update>
    </function>
</test>`;

    const record = new TimesheetUpdate();
    record.controlId = "unittest";
    record.employeeId = "E1234";
    record.beginDate = new Date("06/30/2016");
    XmlObjectTestHelper.CompareXml(expected, record);
  });
  it("should build TimesheetUpdate object with all fields", () => {
    const expected = `<?xml version="1.0" encoding="utf-8" ?>
<test>
    <function controlid="unittest">
        <update>
            <TIMESHEET>
                <EMPLOYEEID>E1234</EMPLOYEEID>
                <BEGINDATE>06/30/2016</BEGINDATE>
                <DESCRIPTION>desc</DESCRIPTION>
                <SUPDOCID>A1234</SUPDOCID>
                <STATE>Submitted</STATE>
                <customfield1>customvalue1</customfield1>
            </TIMESHEET>
        </update>
    </function>
</test>`;

    const record = new TimesheetUpdate();
    record.controlId = "unittest";
    record.employeeId = "E1234";
    record.beginDate = new Date("06/30/2016");
    record.description = "desc";
    record.attachmentsId = "A1234";
    record.action = "Submitted";
    record.customFields = [["customfield1", "customvalue1"]];
    XmlObjectTestHelper.CompareXml(expected, record);
  });
});