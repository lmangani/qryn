"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGraphResponse = void 0;
/*
 * Copyright (c) 2019 - 2021 Dr. Krusche & Partner PartG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * @author Stefan Krusche, Dr. Krusche & Partner PartG
 *
 */
var data_1 = require("@grafana/data");
var ui_1 = require("@grafana/ui");
/**
 * @grafana/ui has no type declaration; therefore
 * the fields names are defined here.
 */
var FIELD_ID = ui_1.NodeGraphDataFrameFieldNames.id;
var FIELD_MAINSTAT = ui_1.NodeGraphDataFrameFieldNames.mainStat;
var FIELD_SOURCE = ui_1.NodeGraphDataFrameFieldNames.source;
var FIELD_SUBTITLE = ui_1.NodeGraphDataFrameFieldNames.subTitle;
var FIELD_TARGET = ui_1.NodeGraphDataFrameFieldNames.target;
var FIELD_TITLE = ui_1.NodeGraphDataFrameFieldNames.title;
/**
 * Get data frame to be shown in NodeGraph in Grafana.
 */
function parseGraphResponse(rawNodes, rawEdges, _query) {
    /**
     * idField
     *
     * This field is mandatory. It specifies the unique
     * identifier of the node. This ID is referenced by
     * edge in it’s source and target field.
     */
    var idField = {
        name: FIELD_ID,
        type: data_1.FieldType.string,
        values: new data_1.ArrayVector(),
    };
    /**
     * titleField
     *
     * This field is optional. Name of the node visible just
     * under the node.
     */
    var titleField = {
        name: FIELD_TITLE,
        type: data_1.FieldType.string,
        values: new data_1.ArrayVector(),
        /*
         * The displayName is used in the context menu that
         * refers to a specific node.
         */
        config: { displayName: 'Name' },
    };
    /**
     * subTitleField
     *
     * Additional, name, type or other identifier that will
     * be shown right under the title.
     */
    var subTitleField = {
        name: FIELD_SUBTITLE,
        type: data_1.FieldType.string,
        values: new data_1.ArrayVector(),
        config: { displayName: 'Type' },
    };
    /**
     * mainStatField
     *
     * First stat shown inside the node itself. Can be either
     * string in which case the value will be shown as it is
     * or it can be a number in which case any unit associated
     * with that field will be also shown.
     */
    var mainStatField = {
        name: FIELD_MAINSTAT,
        type: data_1.FieldType.number,
        values: new data_1.ArrayVector(),
        config: { displayName: 'Score' },
    };
    // /**
    //  * brandField (leverages the `brand` color)
    //  *
    //  * This field is used to draw a colored circle
    //  */
    // const brandField = {
    //   name: NodeGraphDataFrameFieldNames.arc + 'brand',
    //   type: FieldType.number,
    //   values: new ArrayVector(),
    //   config: { color: { fixedColor: '#1bacab', mode: FieldColorModeId.Fixed } },
    // };
    // /**
    //  * caseField (leverages the `case` color)
    //  *
    //  * This field is used to draw a colored circle
    //  */
    // const caseField = {
    //   name: NodeGraphDataFrameFieldNames.arc + 'case',
    //   type: FieldType.number,
    //   values: new ArrayVector(),
    //   config: { color: { fixedColor: '#fd7e14', mode: FieldColorModeId.Fixed } },
    // };
    /**
     * defaultField (leverages the `default` color)
     *
     * This field is used to draw a colored circle
     */
    var defaultField = {
        name: ui_1.NodeGraphDataFrameFieldNames.arc + 'default',
        type: data_1.FieldType.number,
        values: new data_1.ArrayVector(),
        config: { color: { fixedColor: '#5a84e4', mode: data_1.FieldColorModeId.Fixed } },
    };
    var negativeField = {
        name: ui_1.NodeGraphDataFrameFieldNames.arc + 'negative',
        type: data_1.FieldType.number,
        values: new data_1.ArrayVector(),
        config: { color: { fixedColor: 'red', mode: data_1.FieldColorModeId.Fixed } },
    };
    var neutralField = {
        name: ui_1.NodeGraphDataFrameFieldNames.arc + 'neutral',
        type: data_1.FieldType.number,
        values: new data_1.ArrayVector(),
        config: { color: { fixedColor: '#800080', mode: data_1.FieldColorModeId.Fixed } },
    };
    var positiveField = {
        name: ui_1.NodeGraphDataFrameFieldNames.arc + 'positive',
        type: data_1.FieldType.number,
        values: new data_1.ArrayVector(),
        config: { color: { fixedColor: 'green', mode: data_1.FieldColorModeId.Fixed } },
    };
    /**
     * idField
     *
     * This field is mandatory. Unique identifier of the edge.
     */
    var edgeIdField = {
        name: FIELD_ID,
        type: data_1.FieldType.string,
        values: new data_1.ArrayVector(),
    };
    /**
     * edgeSourceField
     *
     * This field is mandatory. It specifies the Id of the source node.
     */
    var edgeSourceField = {
        name: FIELD_SOURCE,
        type: data_1.FieldType.string,
        values: new data_1.ArrayVector(),
    };
    /**
     * edgeTargetField
     *
     *  This field is mandatory. It specifies the Id of the target node.
     */
    var edgeTargetField = {
        name: FIELD_TARGET,
        type: data_1.FieldType.string,
        values: new data_1.ArrayVector(),
    };
    /**
     * mainStat
     *
     * First stat shown in the overlay when hovering over the edge. Can be
     * either string in which case the value will be shown as it is or it
     * can be a number in which case any unit associated with that field
     * will be also shown.
     *
     * The current implementation leverages the `mainStat` field to assign
     * a label to an edge or the relationship field.
     *
     * If both field are available, the secondaryStat is also used.
     */
    var edgeMainStatField = {
        name: FIELD_MAINSTAT,
        type: data_1.FieldType.string,
        values: new data_1.ArrayVector(),
        config: { displayName: 'Label' },
    };
    /** Transform response into nodes & edges **/
    for (var _i = 0, rawNodes_1 = rawNodes; _i < rawNodes_1.length; _i++) {
        var rawNode = rawNodes_1[_i];
        idField.values.add(rawNode.id);
        titleField.values.add(rawNode.title);
        subTitleField.values.add(rawNode.subTitle);
        mainStatField.values.add(rawNode.mainStat);
        /*
         * Determine the color fraction
         */
        var defaultColor = 0.0;
        var negativeColor = 0.0;
        var neutralColor = 0.0;
        var positiveColor = 0.0;
        switch (rawNode.subTitle) {
            case 'default':
                defaultColor = 1.0;
                break;
            case 'negative':
                negativeColor = 1.0;
                break;
            case 'neutral':
                neutralColor = 1.0;
                break;
            case 'positive':
                positiveColor = 1.0;
                break;
            default:
                defaultColor = 1.0;
                break;
        }
        defaultField.values.add(defaultColor);
        negativeField.values.add(negativeColor);
        neutralField.values.add(neutralColor);
        positiveField.values.add(positiveColor);
    }
    for (var _a = 0, rawEdges_1 = rawEdges; _a < rawEdges_1.length; _a++) {
        var rawEdge = rawEdges_1[_a];
        edgeIdField.values.add(rawEdge.id);
        edgeSourceField.values.add(rawEdge.src);
        edgeTargetField.values.add(rawEdge.dst);
        edgeMainStatField.values.add(rawEdge.mainStat);
    }
    /*
     * Build the nodes and edges dataframe and
     * wrap as MutableDataFrame
     */
    var visualisationType = 'nodeGraph';
    var nodes = {
        name: 'nodes',
        refId: '*',
        fields: [
            idField,
            titleField,
            subTitleField,
            mainStatField,
            defaultField,
            negativeField,
            neutralField,
            positiveField,
        ],
        meta: {
            preferredVisualisationType: visualisationType,
        },
    };
    var edges = {
        name: 'edges',
        refId: '*',
        fields: [edgeIdField, edgeSourceField, edgeTargetField],
        meta: {
            preferredVisualisationType: visualisationType,
        },
    };
    return [new data_1.MutableDataFrame(nodes), new data_1.MutableDataFrame(edges)];
}
exports.parseGraphResponse = parseGraphResponse;
