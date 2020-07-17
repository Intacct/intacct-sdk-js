/**
 * @module Intacct/SDK/Functions/AccountsPayable
 */

/**
 * Copyright 2020 Sage Intacct, Inc.
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

import IaXmlWriter from "../../Xml/IaXmlWriter";
import IXmlObject from "../../Xml/IXmlObject";

export default class ApPaymentRequestItem implements IXmlObject {

    public applyToRecordId: number;
    public amountToApply: number;
    public creditToApply: number;
    public discountToApply: number;

    public writeXml(xml: IaXmlWriter): void {
        xml.writeStartElement("paymentrequestitem");

        xml.writeElement("key", this.applyToRecordId, true);
        xml.writeElement("paymentamount", this.amountToApply, true);
        xml.writeElement("credittoapply", this.creditToApply);
        xml.writeElement("discounttoapply", this.discountToApply);

        xml.writeEndElement(); // paymentrequestitem
    }
}
