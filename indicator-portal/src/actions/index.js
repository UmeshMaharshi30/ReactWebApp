import { CHANGE_VIZ_PANEL } from "../constants/action_types";
import {LINE_GRAPH, MULTI_LINE_GRAPH, BAR_GRAPH, GROUPED_BAR} from "../constants/graphTypes";

const Housing = { 
    title : "Housing",
    totalGraphs : 2,
    graphs: [{title : "Graph1", graphType : LINE_GRAPH, dataUrl : "data/apples.csv", title : "Housing 1", xLabel : "year", xLabel :"year", yLabel: "Production lbs", yKey : "Value", dataUrl: "data/apples.csv", dataType : "csv",  data: null},
    {title : "Graph1", graphType : LINE_GRAPH, dataUrl : "data/apples.csv", title : "Housing 2", xLabel : "year", xLabel :"year", yLabel: "Production lbs", yKey : "Value", dataUrl: "data/apples.csv", dataType : "csv",  data: null}
    ]
    };
const Population_Demographics = { 
    title : "Population and Demographics",
    totalGraphs : 0,
    graphs: [{title : "Graph4", graphType : LINE_GRAPH, dataUrl : "data/apples.csv"},
            {title : "Graph5", graphType : GROUPED_BAR, dataUrl : ""},
            {title : "Graph6", graphType : LINE_GRAPH, dataUrl : ""}]
};
const Households_Families_Youth = { 
    title : "Households, Families, and Youth",
    totalGraphs : 0,
    graphs: [{title : "Grap7", graphType : GROUPED_BAR, dataUrl : "data/apples.csv"},
            {title : "Graph8", graphType : LINE_GRAPH, dataUrl : ""}]
};
const Income_Poverty = { 
    title : "Income and Poverty",
    totalGraphs : 0,
    graphs: [{title : "Graph9", graphType : LINE_GRAPH, dataUrl : "data/apples.csv"}]
};
const Workforce = { 
    title : "Workforce",
    totalGraphs : 0,
    graphs: [{title : "Graph10", graphType : GROUPED_BAR, dataUrl : "data/apples.csv"}]
};
const Energy_Environment = { 
    title : "Energy and Environment",
    totalGraphs : 0
};
const Agriculture = { 
    title : "Agriculture",
    totalGraphs : 0
};

const Health = { 
    title : "Health",
    totalGraphs : 0
};
export const Menu_details = [];

Menu_details[0] = Housing;
Menu_details[1] = Population_Demographics;
Menu_details[2] = Households_Families_Youth;
Menu_details[3] = Income_Poverty;
Menu_details[4] = Workforce;
Menu_details[5] = Energy_Environment;
Menu_details[6] = Agriculture;
Menu_details[7] = Health;


export function changeVizPanel(panel) {
    return {
        type: CHANGE_VIZ_PANEL,
        payload : panel 
    }
}

