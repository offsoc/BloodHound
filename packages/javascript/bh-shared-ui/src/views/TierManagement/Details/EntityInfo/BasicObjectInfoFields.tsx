// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { OWNED_OBJECT_TAG, TIER_ZERO_TAG } from '../../../../constants';
import { Field } from '../../../Explore/fragments';

interface BasicObjectInfoFieldsProps {
    objectid: string;
    displayname?: string;
    system_tags?: string;
    service_principal_id?: string;
    noderesourcegroupid?: string;
    grouplinkid?: string;
    name?: string;
}

export const BasicObjectInfoFields: React.FC<BasicObjectInfoFieldsProps> = (props): JSX.Element => {
    return (
        <>
            {props.system_tags?.includes(TIER_ZERO_TAG) && <Field label='Tier Zero:' value={true} />}
            {props.system_tags?.includes(OWNED_OBJECT_TAG) && <Field label='Owned Object:' value={true} />}
            {props.displayname && <Field label='Display Name:' value={props.displayname} />}
            <Field label='Object ID:' value={props.objectid} />
        </>
    );
};
